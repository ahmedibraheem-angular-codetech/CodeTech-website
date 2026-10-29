import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { FooterHeaderComponent } from './footer-header/footer-header.component';
import {
  FOOTER_CONTACT_ITEMS,
  FOOTER_LEGAL_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICE_LINKS,
  FOOTER_SOCIAL_LINKS,
} from './footer.config';

@Component({
  selector: 'ct-footer',
  standalone: true,
  imports: [FooterHeaderComponent, RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly router = inject(Router);

  readonly quickLinks = FOOTER_QUICK_LINKS;
  readonly serviceLinks = FOOTER_SERVICE_LINKS;
  readonly productLinks = FOOTER_PRODUCT_LINKS;
  readonly contactItems = FOOTER_CONTACT_ITEMS;
  readonly socialLinks = FOOTER_SOCIAL_LINKS;
  readonly legalLinks = FOOTER_LEGAL_LINKS;
  readonly currentYear = new Date().getFullYear();

  onCtaClick(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
