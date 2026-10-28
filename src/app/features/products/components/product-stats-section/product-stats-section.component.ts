import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  signal,
  untracked,
} from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProductStatItem, ProductStatsSection } from '../../model/products.model';

const COUNT_DURATION_MS = 1000;

interface CountTarget {
  id: string;
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  finalValue: string;
}

@Component({
  selector: 'ct-product-stats-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './product-stats-section.component.html',
  styleUrl: './product-stats-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStatsSectionComponent {
  private readonly document = inject(DOCUMENT);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  private observer: IntersectionObserver | undefined;
  private frame = 0;
  private ready = false;

  readonly data = input.required<ProductStatsSection>();
  private readonly displayed = signal<Readonly<Record<string, string>>>({});

  countLabel(item: ProductStatItem): string {
    const current = this.displayed();
    return item.id in current ? current[item.id] : item.value;
  }

  constructor() {
    afterNextRender(() => {
      this.ready = true;
      this.watchSection();
    });

    effect(() => {
      this.data();
      if (!this.ready) {
        return;
      }

      untracked(() => {
        this.stop();
        this.displayed.set({});
        this.watchSection();
      });
    });

    this.destroyRef.onDestroy(() => this.stop());
  }

  private watchSection(): void {
    const view = this.document.defaultView;
    if (!view || !('IntersectionObserver' in view)) {
      return;
    }

    if (view.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const targets = this.countTargets();
    if (!targets.length) {
      return;
    }

    this.observer = new view.IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        this.observer?.disconnect();
        this.observer = undefined;
        this.runCount(targets);
      },
      { threshold: 0.35 },
    );

    this.observer.observe(this.host.nativeElement);
  }

  private runCount(targets: readonly CountTarget[]): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    const start = view.performance.now();

    const tick = (now: number): void => {
      const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
      const eased = 1 - (1 - progress) ** 3;
      const next: Record<string, string> = {};

      for (const target of targets) {
        next[target.id] =
          progress === 1 ? target.finalValue : formatCount(target, target.target * eased);
      }

      this.displayed.set(next);

      if (progress < 1) {
        this.frame = view.requestAnimationFrame(tick);
        return;
      }

      this.frame = 0;
    };

    this.frame = view.requestAnimationFrame(tick);
  }

  private countTargets(): CountTarget[] {
    const targets: CountTarget[] = [];

    for (const item of this.data().items) {
      const target = parseCount(item);
      if (target) {
        targets.push(target);
      }
    }

    return targets;
  }

  private stop(): void {
    this.observer?.disconnect();
    this.observer = undefined;

    const view = this.document.defaultView;
    if (this.frame && view) {
      view.cancelAnimationFrame(this.frame);
    }

    this.frame = 0;
  }
}

function parseCount(item: ProductStatItem): CountTarget | null {
  const match = /^(\D*?)(\d+(?:\.\d+)?)(.*)$/.exec(item.value.trim());
  if (!match) {
    return null;
  }

  const digits = match[2];
  const decimals = digits.includes('.') ? digits.split('.')[1].length : 0;

  return {
    id: item.id,
    prefix: match[1],
    suffix: match[3],
    target: Number(digits),
    decimals,
    finalValue: item.value,
  };
}

function formatCount(target: CountTarget, current: number): string {
  const digits = target.decimals ? current.toFixed(target.decimals) : String(Math.round(current));
  return `${target.prefix}${digits}${target.suffix}`;
}
