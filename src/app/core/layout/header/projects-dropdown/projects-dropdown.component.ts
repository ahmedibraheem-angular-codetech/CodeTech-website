import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { LayoutProjectItem } from '../../models/layout.model';

@Component({
  selector: 'ct-projects-dropdown',
  standalone: true,
  imports: [TranslatePipe, ButtonComponent],
  templateUrl: './projects-dropdown.component.html',
  styleUrl: './projects-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsDropdownComponent {
  private readonly router = inject(Router);

  readonly isOpen = input(false);
  /** Mapped project rows from GET /projects. */
  readonly items = input<LayoutProjectItem[]>([]);
  readonly closed = output<void>();

  readonly list = computed(() => {
    const value = this.items();
    return Array.isArray(value) ? value : [];
  });

  viewProject(project: LayoutProjectItem): void {
    void this.router.navigateByUrl(project.route);
    this.closed.emit();
  }
}
