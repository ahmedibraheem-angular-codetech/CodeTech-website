import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'ct-offline-page',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './offline-page.component.html',
  styleUrl: './offline-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfflinePageComponent {
  private readonly router = inject(Router);

  goHome(): void {
    void this.router.navigateByUrl('/');
  }
}
