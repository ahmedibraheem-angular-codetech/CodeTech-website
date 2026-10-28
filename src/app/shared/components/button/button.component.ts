import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

export type CtButtonVariant = 'primary' | 'dark' | 'light';
export type CtButtonType = 'button' | 'submit' | 'reset';
export type CtButtonLayout = 'center' | 'spread';
export type CtButtonIcon =
  | 'double-alt-arrow-left'
  | 'notebook-minimalistic'
  | 'phone-calling'
  | 'laptop'
  | 'refresh'
  | '';

@Component({
  selector: 'ct-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly label = input<string>('');
  readonly icon = input<CtButtonIcon>('');
  readonly variant = input<CtButtonVariant>('primary');
  readonly type = input<CtButtonType>('button');
  readonly disabled = input<boolean>(false);
  readonly layout = input<CtButtonLayout>('center');

  /** Override background color (e.g. `#1C81D3`). */
  readonly color = input<string>('');
  /** Override text/icon color. */
  readonly textColor = input<string>('');
  /** Offset shadow color; pass `''` to disable the default shadow. */
  readonly shadowColor = input<string | null>(null);
  /** Font size (e.g. `14px`). Empty keeps token `--font-small`. */
  readonly fontSize = input<string>('');
  /** Font weight (e.g. `500`, `700`). Empty keeps `700`. */
  readonly fontWeight = input<string>('');
  /** Button width (e.g. `170px`, `100%`). */
  readonly width = input<string>('');
  /** Button height (e.g. `36px`). Empty keeps token `--btn-height`. */
  readonly height = input<string>('');

  readonly clicked = output<void>();

  readonly iconSrc = computed(() => {
    const name = this.icon();
    return name ? `/assets/icons/${name}.svg` : '';
  });

  /** Arrow (and similar) icons flip horizontally in LTR. */
  readonly isDirectionalIcon = computed(() => {
    const name = this.icon();
    return name.includes('arrow') || name.includes('chevron');
  });

  readonly buttonClass = computed(() => {
    const classes = [
      'ct-button',
      `ct-button--${this.variant()}`,
      `ct-button--${this.layout()}`,
    ];

    if (this.resolvedShadowColor()) {
      classes.push('ct-button--shadow');
    }

    return classes.join(' ');
  });

  resolvedShadowColor(): string {
    if (this.shadowColor() !== null) {
      return this.shadowColor() ?? '';
    }

    return this.variant() === 'dark' ? 'var(--color-brand)' : '';
  }

  onClick(): void {
    if (this.disabled()) {
      return;
    }

    this.clicked.emit();
  }
}
