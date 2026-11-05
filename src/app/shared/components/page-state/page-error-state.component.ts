import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'ct-page-error-state',
  standalone: true,
  imports: [TranslatePipe, ButtonComponent],
  template: `
    <section class="page-error-state" role="alert">
      <h2 class="page-error-state-title">{{ 'common.error.title' | translate }}</h2>
      <p class="page-error-state-description">{{ 'common.error.description' | translate }}</p>
      <ct-button
        [label]="'common.error.retry' | translate"
        variant="primary"
        (clicked)="retry.emit()"
      />
    </section>
  `,
  styles: `
    .page-error-state {
      display: grid;
      gap: 0.75rem;
      place-items: center;
      text-align: center;
      padding: 3rem 1rem;
    }

    .page-error-state-title {
      margin: 0;
      font-family: var(--font-heading);
      font-size: 1.5rem;
    }

    .page-error-state-description {
      margin: 0;
      max-width: 32rem;
      color: rgba(15, 23, 42, 0.72);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageErrorStateComponent {
  readonly retry = output<void>();
}
