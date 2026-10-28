import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { breadcrumbJsonLd } from '@/lib/seo';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

const LAST_UPDATED = 'October 8, 2026';

const SECTIONS_EN: { heading: string; body: React.ReactNode }[] = [
  {
    heading: '1. Introduction',
    body: (
      <>
        <p>
          MigrateHive ("MigrateHive," "we," "us," or "our") provides business email migration services for
          platforms including Google Workspace, Microsoft 365, Zoho, and IMAP-based mail servers. This Privacy
          Policy explains what information we collect, how we use it, and the choices you have, whether you're
          browsing our website or engaging us for a migration project.
        </p>
        <p className="mt-4">
          By using our website or services, you agree to the practices described in this policy. If you do not
          agree, please do not use our website or engage our services.
        </p>
      </>
    ),
  },
  {
    heading: '2. Information You Provide to Us',
    body: (
      <>
        <p>We collect information you voluntarily submit through our free assessment form or by emailing us directly, including:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li>Your name and business email address</li>
          <li>Your company domain and current email provider</li>
          <li>Your intended destination platform and approximate mailbox count</li>
          <li>Any additional details you choose to share in your message</li>
        </ul>
        <p className="mt-4">
          We use this information solely to respond to your inquiry, prepare a migration assessment, and, if you
          choose to proceed, to scope and deliver the migration project.
        </p>
      </>
    ),
  },
  {
    heading: '3. Information Collected During a Migration Engagement',
    body: (
      <>
        <p>
          If you engage MigrateHive for a migration project, performing that migration typically requires
          temporary, limited access to email accounts, administrator consoles, or API credentials for the
          platforms involved. This is among the most sensitive data we handle, and we treat it accordingly:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li>Access credentials are collected only with your explicit authorization, scoped to what the migration requires.</li>
          <li>Credentials and access tokens are used exclusively to perform the agreed migration work.</li>
          <li>Access is revoked and credentials are discarded once the project is confirmed complete and stable — we do not retain standing access to your systems.</li>
          <li>Mailbox content (emails, contacts, calendar events) passes through our migration process only as necessary to transfer it from source to destination; we do not read, review, or retain your mailbox content beyond the duration of the migration.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '4. Information Collected Automatically',
    body: (
      <>
        <p>
          Our website stores a single, non-identifying preference — your light/dark theme choice — in your
          browser's local storage. This value never leaves your device and is not transmitted to us. We do not
          currently use tracking cookies, analytics scripts, or advertising pixels on this website.
        </p>
      </>
    ),
  },
  {
    heading: '5. How We Use Your Information',
    body: (
      <ul className="space-y-2 list-disc list-inside">
        <li>To respond to assessment requests and general inquiries</li>
        <li>To scope, quote, and deliver migration projects you engage us for</li>
        <li>To communicate with you about the status of an active project</li>
        <li>To maintain records required for accounting, support, and legal compliance</li>
        <li>To improve our services and the clarity of our website content</li>
      </ul>
    ),
  },
  {
    heading: '6. Third-Party Service Providers',
    body: (
      <>
        <p>
          We use FormSubmit (formsubmit.co) to process and deliver submissions from our website's assessment
          form to our inbox. When you submit the form, the information you entered is transmitted to FormSubmit's
          servers and forwarded to us by email. FormSubmit acts as a data processor on our behalf and maintains
          its own privacy practices, available at their website.
        </p>
        <p className="mt-4">
          We do not sell, rent, or trade your personal information to third parties for marketing purposes.
        </p>
      </>
    ),
  },
  {
    heading: '7. Data Security',
    body: (
      <p>
        We take reasonable technical and organizational measures to protect the information you share with us,
        including encrypted transfer channels during active migrations, access restricted to the team members
        working on your project, and prompt revocation of any temporary credentials once a project concludes.
        No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    heading: '8. Data Retention',
    body: (
      <p>
        We retain assessment and contact form submissions, along with project records, for as long as reasonably
        necessary to respond to your inquiry, deliver an engaged project, and meet our accounting and legal
        obligations. Migration access credentials are discarded at project completion as described in Section 3.
        You may request earlier deletion of your information at any time — see Section 9.
      </p>
    ),
  },
  {
    heading: '9. Your Rights',
    body: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information, subject to our legal and accounting obligations</li>
          <li>Object to or restrict certain processing of your information</li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, email us at{' '}
          <a href="mailto:hello@migratehive.com" className="text-accent-400 hover:text-accent-300 transition-colors">
            hello@migratehive.com
          </a>. We will respond within a reasonable timeframe.
        </p>
      </>
    ),
  },
  {
    heading: '10. Children’s Privacy',
    body: (
      <p>
        Our website and services are intended for business use and are not directed at individuals under the age
        of 16. We do not knowingly collect personal information from children. If you believe a child has
        provided us with personal information, please contact us and we will delete it.
      </p>
    ),
  },
  {
    heading: '11. International Data Transfers',
    body: (
      <p>
        We may process and store information using service providers located in different countries than your
        own. Where this occurs, we take reasonable steps to ensure your information continues to receive a
        comparable standard of protection to that described in this policy.
      </p>
    ),
  },
  {
    heading: '12. Changes to This Policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and
        regulatory reasons. We will update the "Last updated" date below when we do. Material changes will be
        reflected prominently on this page.
      </p>
    ),
  },
  {
    heading: '13. Contact Us',
    body: (
      <p>
        If you have questions about this Privacy Policy or how we handle your information, contact us at{' '}
        <a href="mailto:hello@migratehive.com" className="text-accent-400 hover:text-accent-300 transition-colors">
          hello@migratehive.com
        </a>.
      </p>
    ),
  },
];

const SECTIONS_AR: { heading: string; body: React.ReactNode }[] = [
  {
    heading: '1. مقدمة',
    body: (
      <>
        <p>
          تقدّم شركة MigrateHive ("MigrateHive" أو "نحن" أو "لنا") خدمات نقل البريد الإلكتروني للشركات، وذلك
          لمنصات تشمل Google Workspace وMicrosoft 365 وZoho وخوادم البريد المعتمدة على بروتوكول IMAP. تشرح سياسة
          الخصوصية هذه المعلومات التي نجمعها، وكيفية استخدامنا لها، والخيارات المتاحة لك، سواء كنت تتصفح موقعنا
          الإلكتروني أو تستعين بنا لتنفيذ مشروع نقل.
        </p>
        <p className="mt-4">
          باستخدامك موقعنا الإلكتروني أو خدماتنا، فإنك توافق على الممارسات المبيّنة في هذه السياسة. وإذا كنت لا
          توافق عليها، يُرجى عدم استخدام موقعنا الإلكتروني أو الاستعانة بخدماتنا.
        </p>
      </>
    ),
  },
  {
    heading: '2. المعلومات التي تقدّمها لنا',
    body: (
      <>
        <p>نجمع المعلومات التي تقدّمها طوعًا من خلال نموذج التقييم المجاني على موقعنا، أو عبر التواصل معنا مباشرة بالبريد الإلكتروني، بما في ذلك:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li>اسمك وعنوان بريدك الإلكتروني للعمل</li>
          <li>نطاق (domain) شركتك ومزوّد البريد الإلكتروني الذي تستخدمه حاليًا</li>
          <li>المنصة الوجهة التي تنوي الانتقال إليها، والعدد التقريبي لصناديق البريد</li>
          <li>أي تفاصيل إضافية تختار مشاركتها في رسالتك</li>
        </ul>
        <p className="mt-4">
          نستخدم هذه المعلومات فقط للرد على استفسارك، وإعداد تقييم للنقل، وفي حال اختيارك المضيّ قدمًا، لتحديد
          نطاق مشروع النقل وتنفيذه.
        </p>
      </>
    ),
  },
  {
    heading: '3. المعلومات التي تُجمع خلال تنفيذ مشروع النقل',
    body: (
      <>
        <p>
          في حال استعنت بـ MigrateHive لتنفيذ مشروع نقل، فإن تنفيذ عملية النقل يتطلب عادةً صلاحية وصول مؤقتة
          ومحدودة إلى حسابات البريد الإلكتروني، أو لوحات تحكم المسؤول (administrator consoles)، أو بيانات اعتماد
          واجهات برمجة التطبيقات (API) الخاصة بالمنصات المعنية. تُعدّ هذه من أكثر البيانات التي نتعامل معها
          حساسية، ونتعامل معها وفقًا لذلك:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li>لا تُجمع بيانات اعتماد الوصول إلا بتصريح صريح منك، وبما يقتصر على ما يتطلبه النقل فعليًا.</li>
          <li>تُستخدم بيانات الاعتماد ورموز الوصول (access tokens) بشكل مقصور حصرًا على تنفيذ أعمال النقل المتفق عليها.</li>
          <li>يُلغى الوصول ويتم إلغاء بيانات الاعتماد فور التأكد من اكتمال المشروع واستقراره — ولا نحتفظ بأي صلاحية وصول دائمة إلى أنظمتك.</li>
          <li>لا يمرّ محتوى صندوق البريد (رسائل البريد الإلكتروني وجهات الاتصال وأحداث التقويم) عبر عملية النقل إلا بالقدر اللازم لنقله من المصدر إلى الوجهة؛ ولا نقوم بقراءة محتوى صندوق بريدك أو مراجعته أو الاحتفاظ به بعد انتهاء مدة النقل.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '4. المعلومات التي تُجمع تلقائيًا',
    body: (
      <>
        <p>
          يخزّن موقعنا الإلكتروني تفضيلًا واحدًا غير تعريفي فقط — وهو اختيارك للمظهر الفاتح أو الداكن (light/dark) —
          في مساحة التخزين المحلي (local storage) لمتصفحك. لا تغادر هذه القيمة جهازك مطلقًا ولا تُنقل إلينا. لا
          نستخدم حاليًا ملفات تعريف تتبّع (tracking cookies)، أو نصوص تحليلات (analytics scripts)، أو وحدات بكسل
          إعلانية (advertising pixels) على هذا الموقع.
        </p>
      </>
    ),
  },
  {
    heading: '5. كيف نستخدم معلوماتك',
    body: (
      <ul className="space-y-2 list-disc list-inside">
        <li>للرد على طلبات التقييم والاستفسارات العامة</li>
        <li>لتحديد نطاق مشاريع النقل التي تستعين بنا لتنفيذها، وتقديم عروض الأسعار، وتنفيذها</li>
        <li>للتواصل معك بشأن حالة المشروع الجاري</li>
        <li>للاحتفاظ بالسجلات اللازمة لأغراض المحاسبة والدعم والامتثال القانوني</li>
        <li>لتحسين خدماتنا ووضوح محتوى موقعنا الإلكتروني</li>
      </ul>
    ),
  },
  {
    heading: '6. مزوّدو الخدمات من الجهات الخارجية',
    body: (
      <>
        <p>
          نستخدم خدمة FormSubmit (formsubmit.co) لمعالجة النماذج المُرسلة من خلال نموذج التقييم على موقعنا
          الإلكتروني وتوجيهها إلى بريدنا الإلكتروني. وعند إرسالك النموذج، تُنقل المعلومات التي أدخلتها إلى خوادم
          FormSubmit ثم تُحوَّل إلينا عبر البريد الإلكتروني. تعمل FormSubmit كمعالج بيانات (data processor) بالنيابة
          عنّا، ولديها ممارسات خصوصية خاصة بها متاحة على موقعها الإلكتروني.
        </p>
        <p className="mt-4">
          لا نقوم ببيع معلوماتك الشخصية أو تأجيرها أو مقايضتها لأي جهات خارجية لأغراض تسويقية.
        </p>
      </>
    ),
  },
  {
    heading: '7. أمن البيانات',
    body: (
      <p>
        نتخذ تدابير تقنية وتنظيمية معقولة لحماية المعلومات التي تشاركها معنا، بما في ذلك استخدام قنوات نقل مشفّرة
        خلال عمليات النقل الجارية، وقَصر صلاحية الوصول على أعضاء الفريق العاملين على مشروعك، والإلغاء الفوري لأي
        بيانات اعتماد مؤقتة بعد انتهاء المشروع. ومع ذلك، لا توجد وسيلة نقل أو تخزين مضمونة الأمان بشكل كامل، ولا
        يمكننا ضمان أمان مطلق.
      </p>
    ),
  },
  {
    heading: '8. الاحتفاظ بالبيانات',
    body: (
      <p>
        نحتفظ بنماذج التقييم ونماذج التواصل المُرسلة، إلى جانب سجلات المشاريع، للمدة اللازمة بشكل معقول للرد على
        استفسارك، وتنفيذ المشروع المتفق عليه، والوفاء بالتزاماتنا المحاسبية والقانونية. ويتم إلغاء بيانات اعتماد
        الوصول الخاصة بالنقل عند اكتمال المشروع، كما هو موضّح في البند 3. ويمكنك طلب حذف معلوماتك في وقت أبكر في
        أي وقت — انظر البند 9.
      </p>
    ),
  },
  {
    heading: '9. حقوقك',
    body: (
      <>
        <p>قد يكون لك، تبعًا لمكان إقامتك، الحق في:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li>طلب الوصول إلى المعلومات الشخصية التي نحتفظ بها عنك</li>
          <li>طلب تصحيح المعلومات غير الدقيقة</li>
          <li>طلب حذف معلوماتك، بما لا يتعارض مع التزاماتنا القانونية والمحاسبية</li>
          <li>الاعتراض على بعض عمليات معالجة معلوماتك أو تقييدها</li>
        </ul>
        <p className="mt-4">
          لممارسة أي من هذه الحقوق، يُرجى التواصل معنا عبر البريد الإلكتروني على{' '}
          <a href="mailto:hello@migratehive.com" className="text-accent-400 hover:text-accent-300 transition-colors">
            hello@migratehive.com
          </a>. وسنرد عليك خلال مهلة زمنية معقولة.
        </p>
      </>
    ),
  },
  {
    heading: '10. خصوصية الأطفال',
    body: (
      <p>
        موقعنا الإلكتروني وخدماتنا مُخصّصة للاستخدام في سياق الأعمال، وهي غير موجّهة للأفراد الذين تقل أعمارهم عن 16
        عامًا. لا نقوم عن علم بجمع معلومات شخصية من الأطفال. وإذا كان لديك ما يدعو للاعتقاد بأن طفلًا قد زوّدنا
        بمعلومات شخصية، يُرجى التواصل معنا وسنقوم بحذفها.
      </p>
    ),
  },
  {
    heading: '11. نقل البيانات على المستوى الدولي',
    body: (
      <p>
        قد نقوم بمعالجة المعلومات وتخزينها باستخدام مزوّدي خدمات موجودين في بلدان مختلفة عن بلدك. وفي هذه الحالات،
        نتخذ خطوات معقولة لضمان استمرار حصول معلوماتك على مستوى حماية مماثل لما هو موضّح في هذه السياسة.
      </p>
    ),
  },
  {
    heading: '12. التغييرات على هذه السياسة',
    body: (
      <p>
        قد نحدّث سياسة الخصوصية هذه من وقت لآخر لتعكس تغييرات في ممارساتنا أو لأسباب قانونية وتنظيمية. وعند قيامنا
        بذلك، سنقوم بتحديث تاريخ "آخر تحديث" أدناه. وستُعرض التغييرات الجوهرية بشكل واضح على هذه الصفحة.
      </p>
    ),
  },
  {
    heading: '13. اتصل بنا',
    body: (
      <p>
        إذا كانت لديك أي أسئلة بشأن سياسة الخصوصية هذه أو بشأن كيفية تعاملنا مع معلوماتك، يُرجى التواصل معنا على{' '}
        <a href="mailto:hello@migratehive.com" className="text-accent-400 hover:text-accent-300 transition-colors">
          hello@migratehive.com
        </a>.
      </p>
    ),
  },
];

const COPY = {
  en: {
    seoTitle: 'Privacy Policy – How We Protect Your Data',
    seoDescription:
      'How MigrateHive collects, uses, and protects your information, including during business email migration projects.',
    eyebrow: 'LEGAL',
    title: 'Privacy Policy',
    lastUpdatedLabel: 'Last updated:',
    sections: SECTIONS_EN,
  },
  ar: {
    seoTitle: 'سياسة الخصوصية – كيف نحمي بياناتك',
    seoDescription:
      'كيف تجمع MigrateHive معلوماتك وتستخدمها وتحميها، بما في ذلك خلال مشاريع نقل البريد الإلكتروني للشركات.',
    eyebrow: 'قانوني',
    title: 'سياسة الخصوصية',
    lastUpdatedLabel: 'آخر تحديث:',
    sections: SECTIONS_AR,
  },
};

export default function PrivacyPolicyPage() {
  const { locale, withLocale } = useLanguage();
  const copy = COPY[locale];
  const sections = locale === 'ar' ? SECTIONS_AR : SECTIONS_EN;

  useSEO({
    title: copy.seoTitle,
    description: copy.seoDescription,
    path: '/privacy-policy',
    jsonLd: breadcrumbJsonLd([
      { name: locale === 'ar' ? 'الرئيسية' : 'Home', path: withLocale('/') },
      { name: copy.title, path: withLocale('/privacy-policy') },
    ]),
  });

  return (
    <div>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-500/10 blur-[120px] rounded-full" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <Breadcrumbs className="mb-6 flex justify-center" items={[{ label: copy.title }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-4">{copy.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              {copy.title}
            </h1>
            <p className="mt-4 text-sm text-navy-400">
              {copy.lastUpdatedLabel} {LAST_UPDATED}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16 space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.04 }}
            >
              <h2 className="font-display text-xl md:text-2xl font-semibold text-white mb-4">{section.heading}</h2>
              <div className="text-sm md:text-base text-navy-300 leading-relaxed">{section.body}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
