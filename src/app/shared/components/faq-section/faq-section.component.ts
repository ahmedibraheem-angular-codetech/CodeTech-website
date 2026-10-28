import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  model,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../divider/divider.component';
import { FaqItem } from './faq-section.model';

type FaqValue = string | number | string[] | number[] | null | undefined;

@Component({
  selector: 'ct-faq-section',
  standalone: true,
  imports: [DividerComponent, RouterLink, TranslatePipe],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSectionComponent {
  private readonly accordionRoot =
    viewChild<ElementRef<HTMLElement>>('accordionRoot');

  readonly label = input('');
  readonly title = input('');
  readonly items = input<FaqItem[]>([]);
  /** Optional CTA label under the section title (e.g. view all FAQs). */
  readonly linkLabel = input('');
  /** Route for the optional CTA. Defaults to the FAQ page. */
  readonly linkRoute = input('/faq');
  /** Active panel value. Pass a panel `id` to open one by default. */
  readonly value = model<FaqValue>(null);

  isOpen(id: string): boolean {
    const current = this.value();
    if (Array.isArray(current)) {
      return current.includes(id as never);
    }
    return current === id;
  }

  toggle(id: string): void {
    this.value.set(this.isOpen(id) ? undefined : id);
  }

  onHeaderKeydown(event: KeyboardEvent, id: string): void {
    switch (event.code) {
      case 'ArrowDown':
        this.focusSibling(event.currentTarget as HTMLElement, 1);
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.focusSibling(event.currentTarget as HTMLElement, -1);
        event.preventDefault();
        break;
      case 'Home':
        this.focusAt(0);
        event.preventDefault();
        break;
      case 'End':
        this.focusAt(-1);
        event.preventDefault();
        break;
      case 'Enter':
      case 'Space':
      case 'NumpadEnter':
        this.toggle(id);
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  private headers(): HTMLElement[] {
    const root = this.accordionRoot()?.nativeElement;
    if (!root) {
      return [];
    }
    return Array.from(root.querySelectorAll<HTMLElement>('.faq-item-trigger'));
  }

  private focusSibling(current: HTMLElement, delta: number): void {
    const headers = this.headers();
    const index = headers.indexOf(current);
    if (index < 0 || !headers.length) {
      return;
    }

    let nextIndex = index + delta;
    if (nextIndex >= headers.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = headers.length - 1;
    }
    headers[nextIndex]?.focus();
  }

  private focusAt(index: number): void {
    const headers = this.headers();
    if (!headers.length) {
      return;
    }
    const target = index < 0 ? headers[headers.length - 1] : headers[index];
    target?.focus();
  }
}
