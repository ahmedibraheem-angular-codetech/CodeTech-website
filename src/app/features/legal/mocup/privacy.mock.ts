import type { AppLanguage } from '../../../core/i18n/language.service';
import type { LegalDocument } from '../model/legal-document.model';

const PRIVACY_HTML_AR = `
<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>مقدمة</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>نحن في كود التقنية نحرص على حماية خصوصية بيانات عملائنا وزوار موقعنا ونسعى إلى التعامل مع المعلومات التي يتم جمعها بطريقة آمنة وشفافة وفقًا للأنظمة المعمول بها في المملكة العربية السعودية.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>01- نظرة عامة</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<div class="row g-0">
    <div class="col-12 col-md-6"><h3>تهدف سياسة الخصوصية إلى توضيح</h3>
      <ul>
        <li>أنواع البيانات التي نقوم بجمعها</li>
        <li>كيفية استخدام وحماية هذه البيانات</li>
        <li>حقوق المستخدم المتعلقة بمعلوماته الشخصية</li>
      </ul></div>
    <div class="col-12 col-md-6"><h3>تطبق هذه السياسة على</h3>
      <ul>
        <li>زوار الموقع الإلكتروني</li>
        <li>العملاء الحاليين والمحتملين</li>
        <li>مستخدمي الخدمات الرقمية المقدمة من كود التقنية</li>
      </ul></div>
  </div>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>02- البيانات التي نجمعها</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>قد نقوم بجمع البيانات الآتية:</p>
  <ul>
    <li>الاسم الكامل</li>
    <li>البريد الإلكتروني</li>
    <li>رقم الجوال</li>
    <li>اسم الشركة أو الجهة</li>
    <li>تفاصيل ومتطلبات المشروع</li>
    <li>الملفات والوثائق المقدمة من المستخدم</li>
    <li>بيانات استخدام الموقع مثل الصفحات التي تمت زيارتها</li>
    <li>ملفات تعريف الارتباط (Cookies) لتحسين تجربة الاستخدام</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>03- كيف نستخدم بياناتك؟</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>نستخدم بياناتك بهدف:</p>
  <ul>
    <li>الرد على الاستفسارات والطلبات</li>
    <li>تقديم الخدمات المطلوبة وتنفيذ المشاريع</li>
    <li>تحسين تجربة المستخدم وتطوير الموقع</li>
    <li>التواصل مع العميل بشأن الخدمات والتحديثات</li>
    <li>تحسين جودة الحلول والخدمات المقدمة</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>04- مشاركة البيانات</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>لا نقوم ببيع أو مشاركة بيانات المستخدمين لأغراض تجارية، قد يتم مشاركة البيانات فقط عند الحاجة مع:</p>
  <ul>
    <li>مزودي الخدمات التقنية الموثوقين</li>
    <li>الجهات الحكومية عند وجود التزام قانوني</li>
    <li>الشركاء التقنيين المشاركين في تنفيذ الخدمة</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>05- حماية البيانات</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>نطبق إجراءات أمنية صارمة لحماية البيانات من:</p>
  <ul>
    <li>الوصول غير المصرح به</li>
    <li>الفقدان أو التعديل غير المسموح</li>
    <li>الاستخدام غير المشروع</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>06- ملفات تعريف الارتباط (Cookies)</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>نستخدم ملفات تعريف الارتباط من أجل:</p>
  <ul>
    <li>تحسين سرعة وأداء الموقع</li>
    <li>تذكر تفضيلات المستخدم</li>
    <li>تحليل استخدام الموقع لتحسين الخدمات</li>
  </ul>
  <p>يمكن للمستخدم إدارة أو تعطيل ملفات Cookies من خلال إعدادات المتصفح الخاص به، وقد يؤثر ذلك على بعض وظائف الموقع.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>07- حقوق المستخدم</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>يحق للمستخدم:</p>
  <ul>
    <li>طلب الاطلاع على بياناته الشخصية</li>
    <li>طلب تعديل أو تحديث البيانات</li>
    <li>طلب حذف البيانات وفق الأنظمة المعمول بها</li>
    <li>سحب الموافقة على استخدام البيانات عند توافر ذلك</li>
    <li>التواصل معنا بشأن أي استفسارات متعلقة بالخصوصية</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>08- التواصل</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<ul class="legal-contact">
    <li>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="13" stroke="currentColor"/><path d="M9 11.5h10v6H9v-6z" stroke="currentColor" stroke-linejoin="round"/><path d="M9 12l5 3.2L19 12" stroke="currentColor" stroke-linecap="round"/></svg>
      <a href="mailto:Legal@Code-Tech.Sa">Legal@Code-Tech.Sa</a>
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

const PRIVACY_HTML_EN = `
<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>Introduction</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>At CodeTech, we are committed to protecting the privacy of our clients and website visitors, and we handle collected information securely and transparently in accordance with the regulations in force in the Kingdom of Saudi Arabia.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>01- Overview</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<div class="row g-0">
    <div class="col-12 col-md-6"><h3>This privacy policy aims to clarify</h3>
      <ul>
        <li>The types of data we collect</li>
        <li>How we use and protect this data</li>
        <li>User rights related to personal information</li>
      </ul></div>
    <div class="col-12 col-md-6"><h3>This policy applies to</h3>
      <ul>
        <li>Website visitors</li>
        <li>Current and potential clients</li>
        <li>Users of digital services provided by CodeTech</li>
      </ul></div>
  </div>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>02- Data we collect</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>We may collect the following data:</p>
  <ul>
    <li>Full name</li>
    <li>Email address</li>
    <li>Mobile number</li>
    <li>Company or entity name</li>
    <li>Project details and requirements</li>
    <li>Files and documents provided by the user</li>
    <li>Website usage data such as visited pages</li>
    <li>Cookies to improve the user experience</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>03- How do we use your data?</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>We use your data to:</p>
  <ul>
    <li>Respond to inquiries and requests</li>
    <li>Provide requested services and deliver projects</li>
    <li>Improve the user experience and develop the website</li>
    <li>Communicate with the client about services and updates</li>
    <li>Improve the quality of solutions and services</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>04- Data sharing</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>We do not sell or share user data for commercial purposes. Data may be shared only when needed with:</p>
  <ul>
    <li>Trusted technical service providers</li>
    <li>Government entities when there is a legal obligation</li>
    <li>Technical partners involved in delivering the service</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>05- Data protection</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>We apply strict security measures to protect data from:</p>
  <ul>
    <li>Unauthorized access</li>
    <li>Loss or unauthorized modification</li>
    <li>Unlawful use</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>06- Cookies</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>We use cookies to:</p>
  <ul>
    <li>Improve site speed and performance</li>
    <li>Remember user preferences</li>
    <li>Analyze site usage to improve services</li>
  </ul>
  <p>Users can manage or disable cookies through their browser settings, which may affect some site functions.</p>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>07- User rights</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<p>The user has the right to:</p>
  <ul>
    <li>Request access to their personal data</li>
    <li>Request modification or update of data</li>
    <li>Request deletion of data in accordance with applicable regulations</li>
    <li>Withdraw consent to data use where available</li>
    <li>Contact us regarding any privacy-related inquiries</li>
  </ul>
  </div>
  <div class="col-md-3 d-none d-md-block"></div>
</div>

<div class="row legal-block g-0">
  <div class="col-12 col-md-1"><h2>08- Contact</h2></div>
  <div class="col-12 col-md-6 legal-copy">
<ul class="legal-contact">
    <li>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="13" stroke="currentColor"/><path d="M9 11.5h10v6H9v-6z" stroke="currentColor" stroke-linejoin="round"/><path d="M9 12l5 3.2L19 12" stroke="currentColor" stroke-linecap="round"/></svg>
      <a href="mailto:Legal@Code-Tech.Sa">Legal@Code-Tech.Sa</a>
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

/** Temporary mock matching the privacy endpoint. Swap for the API response later. */
export const PRIVACY_DOCUMENT: Record<AppLanguage, LegalDocument> = {
  ar: { contentHtml: PRIVACY_HTML_AR },
  en: { contentHtml: PRIVACY_HTML_EN },
};
