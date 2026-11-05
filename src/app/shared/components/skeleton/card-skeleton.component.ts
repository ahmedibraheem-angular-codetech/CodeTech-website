import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SkeletonComponent } from './skeleton.component';

export type CardSkeletonVariant = 'info' | 'project';

@Component({
  selector: 'ct-card-skeleton',
  standalone: true,
  imports: [SkeletonComponent],
  templateUrl: './card-skeleton.component.html',
  styleUrl: './card-skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSkeletonComponent {
  readonly variant = input<CardSkeletonVariant>('info');
}
