import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'ct-video-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoSectionComponent {
  readonly imageSrc = input('/assets/images/video-cover.png');
  readonly videoUrl = input('');

  readonly play = output<void>();

  onPlay(): void {
    const url = this.videoUrl();
    if (url && typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    this.play.emit();
  }
}
