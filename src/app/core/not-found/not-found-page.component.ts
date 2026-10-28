import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'ct-not-found-page',
  standalone: true,
  imports: [ButtonComponent, TranslatePipe],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {
  private readonly router = inject(Router);

  goHome(): void {
    void this.router.navigateByUrl('/');
  }
}
