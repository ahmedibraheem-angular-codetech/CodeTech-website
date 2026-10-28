import type { AppLanguage } from '../../../core/i18n/language.service';
import type { LegalDocument } from '../model/legal-document.model';

const TERMS_HTML_AR = `
<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>مقدمة</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>مرحبًا بك في موقع كود التقنية. باستخدامك للموقع أو خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>01- قبول الشروط</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>يُعد استخدام الموقع موافقة على جميع البنود الواردة هنا. في حال عدم الموافقة، يرجى عدم استخدام الموقع.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>02- استخدام الموقع</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<div class="row g-0">
    <div class="col-12 col-md-6"><h3>الاستخدام المسموح</h3>
      <ul>
        <li>الاطلاع على الخدمات</li>
        <li>طلب الاستشارات والعروض</li>
        <li>التواصل مع فريق العمل</li>
      </ul></div>
    <div class="col-12 col-md-6"><h3>الاستخدام غير المسموح</h3>
      <ul>
        <li>محاولة اختراق الموقع أو تعطيله</li>
        <li>نسخ المحتوى بدون إذن</li>
        <li>استخدام الموقع لأغراض غير قانونية</li>
      </ul></div>
  </div>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>03- الخدمات</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<ul>
    <li>يتم تحديد الخدمات وفقًا لاحتياجات كل مشروع</li>
    <li>الأسعار غير ثابتة ويتم تحديدها بعد دراسة المتطلبات</li>
    <li>يحق للشركة قبول أو رفض أي طلب حسب الإمكانيات والسياسات</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>04- الملكية الفكرية</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>جميع محتويات الموقع، بما فيها النصوص والتصاميم والشعارات والصور والعلامة التجارية، مملوكة لـ كود التقنية ولا يجوز استخدامها دون تصريح.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>05- حدود المسؤولية</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>تسعى الشركة لتوفير معلومات دقيقة، لكنها لا تضمن خلو الموقع من الأخطاء ولا تتحمل مسؤولية أي أضرار ناتجة عن سوء الاستخدام.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>06- الروابط الخارجية</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>قد يحتوي الموقع على روابط لمواقع خارجية، والشركة غير مسؤولة عن محتوى أو سياسات تلك المواقع.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>07- تعديل الشروط</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>نحتفظ الشركة بحق تحديث هذه الشروط عند الحاجة، ويُعد استمرار استخدام الموقع موافقة على التعديلات.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>08- القانون المعمول به</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>تخضع هذه الشروط لأنظمة وقوانين المملكة العربية السعودية.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>09- للاستفسارات القانونية</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<ul class="legal-contact">
    <li>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="13" stroke="currentColor"/><path d="M9 11.5h10v6H9v-6z" stroke="currentColor" stroke-linejoin="round"/><path d="M9 12l5 3.2L19 12" stroke="currentColor" stroke-linecap="round"/></svg>
      <a href="mailto:Legal@Code-Tech.sa">Legal@Code-Tech.sa</a>
    </li>
    <li>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="13" stroke="currentColor"/><path d="M11.2 10.2c.3-.7 1.2-.8 1.7-.3l1 .9c.4.4.4 1 0 1.4l-.6.6a8 8 0 0 0 2.9 2.9l.6-.6c.4-.4 1-.4 1.4 0l.9 1c.5.5.4 1.4-.3 1.7-.8.4-1.8.5-2.6.1a10.2 10.2 0 0 1-5.1-5.1c-.4-.8-.3-1.8.1-2.6z" stroke="currentColor" stroke-linejoin="round"/></svg>
      <a href="tel:+966500000000" dir="ltr">+966 50 000 0000</a>
    </li>
    <li>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="13" stroke="currentColor"/><path d="M14 17.8s3.2-2.5 3.2-4.6a3.2 3.2 0 1 0-6.4 0c0 2.1 3.2 4.6 3.2 4.6z" stroke="currentColor" stroke-linejoin="round"/><circle cx="14" cy="13.1" r="1" fill="currentColor"/></svg>
      <span>الرياض، المملكة العربية السعودية</span>
    </li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>
`.trim();

const TERMS_HTML_EN = `
<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>Introduction</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>Welcome to the CodeTech website. By using the site or our services, you agree to these terms and conditions.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>01- Acceptance of terms</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>Using the site constitutes agreement to all terms herein. If you do not agree, please do not use the site.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>02- Use of the website</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<div class="row g-0">
    <div class="col-12 col-md-6"><h3>Permitted use</h3>
      <ul>
        <li>Viewing services</li>
        <li>Requesting consultations and offers</li>
        <li>Communicating with the team</li>
      </ul></div>
    <div class="col-12 col-md-6"><h3>Prohibited use</h3>
      <ul>
        <li>Attempting to hack or disable the site</li>
        <li>Copying content without permission</li>
        <li>Using the site for illegal purposes</li>
      </ul></div>
  </div>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>03- Services</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<ul>
    <li>Services are determined according to the needs of each project</li>
    <li>Prices are not fixed and are set after studying requirements</li>
    <li>The company may accept or reject any request based on capabilities and policies</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>04- Intellectual property</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>All site content, including text, designs, logos, images, and trademarks, is owned by CodeTech and may not be used without authorization.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>05- Limitation of liability</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>The company strives to provide accurate information, but does not guarantee the site is free of errors and is not responsible for damages resulting from misuse.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>06- External links</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>The site may contain links to external sites. The company is not responsible for the content or policies of those sites.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>07- Amendment of terms</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>The company reserves the right to update these terms when needed. Continued use of the site constitutes agreement to the modifications.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>08- Governing law</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>These terms are subject to the regulations and laws of the Kingdom of Saudi Arabia.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>09- Legal inquiries</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<ul class="legal-contact">
    <li>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="13" stroke="currentColor"/><path d="M9 11.5h10v6H9v-6z" stroke="currentColor" stroke-linejoin="round"/><path d="M9 12l5 3.2L19 12" stroke="currentColor" stroke-linecap="round"/></svg>
      <a href="mailto:Legal@Code-Tech.sa">Legal@Code-Tech.sa</a>
    </li>
    <li>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="13" stroke="currentColor"/><path d="M11.2 10.2c.3-.7 1.2-.8 1.7-.3l1 .9c.4.4.4 1 0 1.4l-.6.6a8 8 0 0 0 2.9 2.9l.6-.6c.4-.4 1-.4 1.4 0l.9 1c.5.5.4 1.4-.3 1.7-.8.4-1.8.5-2.6.1a10.2 10.2 0 0 1-5.1-5.1c-.4-.8-.3-1.8.1-2.6z" stroke="currentColor" stroke-linejoin="round"/></svg>
      <a href="tel:+966500000000" dir="ltr">+966 50 000 0000</a>
    </li>
    <li>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="13" stroke="currentColor"/><path d="M14 17.8s3.2-2.5 3.2-4.6a3.2 3.2 0 1 0-6.4 0c0 2.1 3.2 4.6 3.2 4.6z" stroke="currentColor" stroke-linejoin="round"/><circle cx="14" cy="13.1" r="1" fill="currentColor"/></svg>
      <span>Riyadh, Kingdom of Saudi Arabia</span>
    </li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>
`.trim();

/** Temporary mock matching the terms endpoint. Swap for the API response later. */
export const TERMS_DOCUMENT: Record<AppLanguage, LegalDocument> = {
  ar: { contentHtml: TERMS_HTML_AR },
  en: { contentHtml: TERMS_HTML_EN },
};
