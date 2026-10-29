import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { ButtonComponent, CtButtonIcon } from '../button/button.component';

const WORD_STEP_SECONDS = 0.07;

interface PageHeroLine {
  words: string[];
  offset: number;
}

@Component({
  selector: 'ct-page-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeroComponent {
  readonly title = input('');
  readonly description = input('');
  readonly buttonLabel = input('');
  readonly secondaryLabel = input('');
  readonly secondaryIcon = input<CtButtonIcon>('');

  readonly ctaClick = output<void>();
  readonly secondaryClick = output<void>();

  readonly titleLines = computed(() => this.toLines(this.title()));
  readonly descriptionLines = computed(() => this.toLines(this.description()));

  private readonly titleWordCount = computed(() =>
    this.titleLines().reduce((count, line) => count + line.words.length, 0),
  );

  titleDelay(index: number): number {
    return index * WORD_STEP_SECONDS;
  }

  descriptionDelay(index: number): number {
    return (this.titleWordCount() + index) * WORD_STEP_SECONDS;
  }

  private toLines(value: string): PageHeroLine[] {
    let offset = 0;

    return value
      .split('\n')
      .map((line) => line.split(/\s+/).filter((word) => word.length > 0))
      .filter((words) => words.length > 0)
      .map((words) => {
        const heroLine: PageHeroLine = { words, offset };
        offset += words.length;
        return heroLine;
      });
  }

  onCtaClick(): void {
    this.ctaClick.emit();
  }

  onSecondaryClick(): void {
    this.secondaryClick.emit();
  }
}
