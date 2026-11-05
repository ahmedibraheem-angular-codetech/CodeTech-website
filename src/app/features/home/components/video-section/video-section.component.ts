import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

const PREVIEW_END_SECONDS = 1;

@Component({
  selector: 'ct-video-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoSectionComponent {
  readonly videoUrl = input('');

  readonly isPlaying = signal(false);

  private readonly videoRef = viewChild<ElementRef<HTMLVideoElement>>('homeVideo');

  onPreviewMetadataLoaded(event: Event): void {
    if (this.isPlaying()) {
      return;
    }

    const video = event.target as HTMLVideoElement;
    video.muted = true;
    video.currentTime = 0;

    void video.play().catch(() => {
      this.seekPreviewFrame(video);
    });
  }

  onPreviewTimeUpdate(event: Event): void {
    if (this.isPlaying()) {
      return;
    }

    const video = event.target as HTMLVideoElement;
    if (video.currentTime >= PREVIEW_END_SECONDS) {
      video.pause();
      this.seekPreviewFrame(video);
    }
  }

  onPreviewEnded(event: Event): void {
    if (this.isPlaying()) {
      return;
    }

    (event.target as HTMLVideoElement).pause();
  }

  onPlay(): void {
    const url = this.videoUrl();
    if (!url) {
      return;
    }

    this.isPlaying.set(true);

    const video = this.videoRef()?.nativeElement;
    if (!video) {
      return;
    }

    video.muted = false;
    video.currentTime = 0;
    void video.play();
  }

  private seekPreviewFrame(video: HTMLVideoElement): void {
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    const previewAt = duration > 0 ? Math.min(PREVIEW_END_SECONDS, duration - 0.05) : 0;

    video.pause();
    video.muted = true;

    if (previewAt > 0) {
      video.currentTime = previewAt;
    }
  }
}
