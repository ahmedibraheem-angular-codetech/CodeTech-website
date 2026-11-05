import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';

interface HeroParticle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  speed: number;
  size: number;
  alpha: number;
}

interface HeroPulse {
  x: number;
  y: number;
  length: number;
  speed: number;
  alpha: number;
}

/** Image-space box covering the original logo. Canvas effects are not drawn here. */
const LOGO_UV = { x: 0.02, y: 0.1, width: 0.4, height: 0.8 };
const PULSE_COUNT = 4;
const DISPERSE_RADIUS = 230;
const DISPERSE_PUSH = 980;

@Component({
  selector: 'ct-animated-hero-background',
  standalone: true,
  templateUrl: './animated-hero-background.component.html',
  styleUrl: './animated-hero-background.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedHeroBackgroundComponent implements OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly imageSrc = input('/assets/images/header/hero-home-bg.webp');
  readonly particleCount = input(100);
  readonly particleSpeed = input(0.035);
  readonly particleOpacity = input(0.42);
  readonly particleSize = input(1.9);
  readonly pulseSpeed = input(0.045);
  readonly pulseIntensity = input(0.2);

  private readonly canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly imageRef = viewChild<ElementRef<HTMLImageElement>>('image');

  private readonly particles: HeroParticle[] = [];
  private readonly pulses: HeroPulse[] = [];
  private context: CanvasRenderingContext2D | null = null;
  private frame = 0;
  private lastTime = 0;
  private width = 0;
  private height = 0;
  private running = false;
  private reducedMotion = false;
  private pointerX = 0;
  private pointerY = 0;
  private pointerActive = false;
  private pointerTarget: HTMLElement | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private motionQuery: MediaQueryList | null = null;
  private readonly onMotionChange = (): void => this.syncMotion();
  private readonly onPointerMove = (event: PointerEvent): void => {
    if (event.pointerType === 'touch' || !this.pointerTarget) {
      return;
    }
    const bounds = this.pointerTarget.getBoundingClientRect();
    this.pointerX = event.clientX - bounds.left;
    this.pointerY = event.clientY - bounds.top;
    this.pointerActive = true;
  };
  private readonly onPointerLeave = (): void => {
    this.pointerActive = false;
  };

  constructor() {
    afterNextRender(() => this.mount());
  }

  ngOnDestroy(): void {
    this.stop();
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
    this.motionQuery?.removeEventListener('change', this.onMotionChange);
    this.motionQuery = null;
    this.detachPointer();
    this.context = null;
  }

  private mount(): void {
    if (!this.isBrowser) {
      return;
    }

    const canvas = this.canvasRef()?.nativeElement;
    const view = canvas?.ownerDocument.defaultView;
    if (!canvas || !view) {
      return;
    }

    this.context = canvas.getContext('2d', { alpha: true });
    if (!this.context) {
      return;
    }

    this.motionQuery = view.matchMedia('(prefers-reduced-motion: reduce)');
    this.motionQuery.addEventListener('change', this.onMotionChange);
    this.reducedMotion = this.motionQuery.matches;

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.host.nativeElement);
    this.resize();
    this.zone.runOutsideAngular(() => this.attachPointer(this.host.nativeElement));

    if (!this.reducedMotion) {
      this.start();
    }
  }

  private syncMotion(): void {
    this.reducedMotion = this.motionQuery?.matches ?? false;
    if (this.reducedMotion) {
      this.stop();
      this.clear();
      return;
    }
    this.start();
  }

  private start(): void {
    if (this.running || this.reducedMotion || !this.context) {
      return;
    }

    this.running = true;
    this.lastTime = 0;
    this.zone.runOutsideAngular(() => {
      this.frame = requestAnimationFrame((time) => this.tick(time));
    });
  }

  private stop(): void {
    this.running = false;
    if (this.frame !== 0) {
      cancelAnimationFrame(this.frame);
      this.frame = 0;
    }
  }

  private resize(): void {
    const canvas = this.canvasRef()?.nativeElement;
    const context = this.context;
    const view = canvas?.ownerDocument.defaultView;
    if (!canvas || !context || !view) {
      return;
    }

    const bounds = this.host.nativeElement.getBoundingClientRect();
    const dpr = Math.min(view.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(bounds.width));
    const height = Math.max(1, Math.floor(bounds.height));
    const pixelWidth = Math.floor(width * dpr);
    const pixelHeight = Math.floor(height * dpr);

    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.width = width;
    this.height = height;
    this.seed();
    if (this.reducedMotion) {
      this.clear();
    }
  }

  private seed(): void {
    const count = this.width < 768 ? Math.round(this.particleCount() * 0.65) : this.particleCount();
    this.particles.length = count;
    for (let index = 0; index < count; index += 1) {
      const current = this.particles[index];
      if (current) {
        continue;
      }
      const homeX = this.streamStart() + Math.random() * (1 - this.streamStart());
      const homeY = 0.18 + Math.random() * 0.64;
      this.particles[index] = {
        x: homeX,
        y: homeY,
        homeX,
        homeY,
        speed: this.particleSpeed() * (0.55 + Math.random() * 0.9),
        size: this.particleSize() * (0.6 + Math.random() * 1.1),
        alpha: this.particleOpacity() * (0.35 + Math.random() * 0.65),
      };
    }

    this.pulses.length = PULSE_COUNT;
    for (let index = 0; index < PULSE_COUNT; index += 1) {
      if (this.pulses[index]) {
        continue;
      }
      this.pulses[index] = {
        x: this.streamStart() + (index / PULSE_COUNT) * (1 - this.streamStart()),
        y: 0.28 + (index / PULSE_COUNT) * 0.44,
        length: 0.16 + (index % 2) * 0.06,
        speed: this.pulseSpeed() * (0.75 + index * 0.08),
        alpha: this.pulseIntensity() * (0.55 + (index % 3) * 0.12),
      };
    }
  }

  private tick(time: number): void {
    if (!this.running) {
      return;
    }

    const dt = this.lastTime === 0 ? 0.016 : Math.min(0.05, (time - this.lastTime) / 1000);
    this.lastTime = time;
    this.draw(dt);
    this.frame = requestAnimationFrame((next) => this.tick(next));
  }

  private draw(dt: number): void {
    const context = this.context;
    if (!context || this.width === 0) {
      return;
    }

    const logoRight = this.logoScreenRight();
    context.clearRect(0, 0, this.width, this.height);
    this.drawPulses(context, dt, logoRight);
    this.drawParticles(context, dt, logoRight);
    context.globalAlpha = 1;
  }

  private drawParticles(context: CanvasRenderingContext2D, dt: number, logoRight: number): void {
    const start = this.streamStart();
    const settle = 1 - Math.exp(-1.6 * dt);
    const radiusSq = DISPERSE_RADIUS * DISPERSE_RADIUS;
    for (let index = 0; index < this.particles.length; index += 1) {
      const particle = this.particles[index];
      particle.homeX += particle.speed * dt;
      if (particle.homeX > 1.04) {
        const shift = particle.x - particle.homeX;
        particle.homeX = start;
        particle.x = start + shift;
      }

      particle.x += (particle.homeX - particle.x) * settle;
      particle.y += (particle.homeY - particle.y) * settle;
      this.disperse(particle, radiusSq, dt);

      const x = particle.x * this.width;
      if (x < logoRight) {
        continue;
      }

      const fade = Math.min(1, (x - logoRight) / 56);
      const y = particle.y * this.height;
      context.globalAlpha = particle.alpha * 0.28 * fade;
      context.fillStyle = '#7ec8ff';
      context.beginPath();
      context.arc(x, y, particle.size * 2.4, 0, Math.PI * 2);
      context.fill();

      context.globalAlpha = particle.alpha * fade;
      context.fillStyle = '#d7ecff';
      context.beginPath();
      context.arc(x, y, particle.size, 0, Math.PI * 2);
      context.fill();
    }
  }

  private drawPulses(context: CanvasRenderingContext2D, dt: number, logoRight: number): void {
    const start = this.streamStart();
    for (let index = 0; index < this.pulses.length; index += 1) {
      const pulse = this.pulses[index];
      pulse.x += pulse.speed * dt;
      if (pulse.x > 1.05) {
        pulse.x = start - pulse.length;
      }

      const x = pulse.x * this.width;
      const width = pulse.length * this.width;
      if (x + width < logoRight) {
        continue;
      }

      const y = pulse.y * this.height;
      const drawX = Math.max(x, logoRight);
      const drawWidth = x + width - drawX;
      const gradient = context.createLinearGradient(x, y, x + width, y);
      gradient.addColorStop(0, 'rgba(40, 140, 255, 0)');
      gradient.addColorStop(0.5, 'rgba(120, 196, 255, 1)');
      gradient.addColorStop(1, 'rgba(40, 140, 255, 0)');
      context.globalAlpha = pulse.alpha;
      context.fillStyle = gradient;
      context.fillRect(drawX, y - 1.25, drawWidth, 2.5);
    }
  }

  private disperse(particle: HeroParticle, radiusSq: number, dt: number): void {
    if (!this.pointerActive || this.width === 0 || this.height === 0) {
      return;
    }

    const px = particle.x * this.width;
    const py = particle.y * this.height;
    const dx = px - this.pointerX;
    const dy = py - this.pointerY;
    const distSq = dx * dx + dy * dy;
    if (distSq >= radiusSq || distSq < 0.01) {
      return;
    }

    const dist = Math.sqrt(distSq);
    const push = (1 - dist / DISPERSE_RADIUS) * DISPERSE_PUSH * dt;
    particle.x += (dx / dist) * (push / this.width);
    particle.y += (dy / dist) * (push / this.height);
  }

  private attachPointer(host: HTMLElement): void {
    this.detachPointer();
    this.pointerTarget = host;
    host.addEventListener('pointermove', this.onPointerMove, { passive: true });
    host.addEventListener('pointerleave', this.onPointerLeave);
  }

  private detachPointer(): void {
    this.pointerTarget?.removeEventListener('pointermove', this.onPointerMove);
    this.pointerTarget?.removeEventListener('pointerleave', this.onPointerLeave);
    this.pointerTarget = null;
    this.pointerActive = false;
  }

  private clear(): void {
    this.context?.clearRect(0, 0, this.width, this.height);
  }

  private streamStart(): number {
    return LOGO_UV.x + LOGO_UV.width;
  }

  private logoScreenRight(): number {
    const image = this.imageRef()?.nativeElement;
    const naturalWidth = image?.naturalWidth || 1600;
    const naturalHeight = image?.naturalHeight || 900;
    const position = this.objectPosition();
    const imageAspect = naturalWidth / naturalHeight;
    const viewAspect = this.width / Math.max(this.height, 1);
    let drawWidth = this.width;
    let offsetX = 0;

    if (imageAspect > viewAspect) {
      drawWidth = this.height * imageAspect;
      offsetX = (this.width - drawWidth) * position;
    }

    return offsetX + (LOGO_UV.x + LOGO_UV.width) * drawWidth;
  }

  private objectPosition(): number {
    const image = this.imageRef()?.nativeElement;
    const view = image?.ownerDocument.defaultView;
    if (!image || !view) {
      return 0.5;
    }

    const raw = view.getComputedStyle(image).objectPosition.split(' ')[0] ?? '50%';
    const value = Number.parseFloat(raw);
    return Number.isFinite(value) ? value / 100 : 0.5;
  }
}
