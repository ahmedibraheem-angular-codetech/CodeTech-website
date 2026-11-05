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
import { ProjectStat } from '../../models/projects-api.model';

const COUNT_DURATION_MS = 1000;

interface CountTarget {
  id: number;
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  finalValue: string;
}

@Component({
  selector: 'ct-project-stats-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './project-stats-section.component.html',
  styleUrl: './project-stats-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectStatsSectionComponent {
  private readonly document = inject(DOCUMENT);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  private observer: IntersectionObserver | undefined;
  private frame = 0;
  private ready = false;

  readonly label = input('');
  readonly title = input('');
  readonly items = input.required<ProjectStat[]>();
  private readonly displayed = signal<Readonly<Record<number, string>>>({});

  /** Decorative assets by card position; the API only supplies title and value. */
  readonly mediaImageSrc = '/assets/images/products/stat-bars.svg';
  readonly cardIconSrcs: readonly string[] = [
    '',
    '',
    '/assets/icons/projects/rocket.svg',
    '/assets/icons/projects/sectors.svg',
  ];

  countLabel(item: ProjectStat): string {
    const current = this.displayed();
    return item.id in current ? current[item.id] : item.value;
  }

  constructor() {
    afterNextRender(() => {
      this.ready = true;
      this.watchSection();
    });

    effect(() => {
      this.items();
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
      const next: Record<number, string> = {};

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

    for (const item of this.items()) {
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

function parseCount(item: ProjectStat): CountTarget | null {
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
