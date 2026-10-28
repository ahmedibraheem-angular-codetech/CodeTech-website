import { isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  Injectable,
  NgZone,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NetworkService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly zone = inject(NgZone);
  private readonly online = signal(true);

  readonly isOnline = this.online.asReadonly();

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.online.set(navigator.onLine);

    const onOnline = (): void => {
      this.zone.run(() => this.online.set(true));
    };

    const onOffline = (): void => {
      this.zone.run(() => this.online.set(false));
    };

    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    });
  }
}
