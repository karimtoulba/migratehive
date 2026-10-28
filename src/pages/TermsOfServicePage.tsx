import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { breadcrumbJsonLd } from '@/lib/seo';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

const LAST_UPDATED = 'October 8, 2026';

const COPY = {
  en: {
    seoTitle: 'Terms of Service – Migration Service Agreement',
    seoDescription:
      'The terms that govern your use of the MigrateHive website and engagement of our business email migration services.',
    eyebrow: 'LEGAL',
    title: 'Terms of Service',
    lastUpdatedLabel: 'Last updated:',
  },
  ar: {
    seoTitle: 'شروط الخدمة – اتفاقية خدمات النقل',
    seoDescription:
      'الشروط التي تحكم استخدامك لموقع MigrateHive الإلكتروني وتعاقدك مع خدمات نقل البريد الإلكتروني للأعمال التي نقدمها.',
    eyebrow: 'قانوني',
    title: 'شروط الخدمة',
    lastUpdatedLabel: 'آخر تحديث:',
  },
} as const;

const SECTIONS_EN: { heading: string; body: React.ReactNode }[] = [
  {
    heading: '1. Acceptance of Terms',
    body: (
      <p>
        These Terms of Service ("Terms") govern your use of the MigrateHive website and your engagement of
        MigrateHive ("MigrateHive," "we," "us," or "our") for business email migration services. By using our
        website, submitting a free assessment request, or engaging our services, you agree to be bound by these
        Terms. If you do not agree, please do not use our website or services.
      </p>
    ),
  },
  {
    heading: '2. Description of Services',
    body: (
      <p>
        MigrateHive provides business email migration services, including migrations to and from Google
        Workspace, Microsoft 365, Zoho Mail, and IMAP-based mail servers. Services may include mailbox, contact,
        and calendar migration, domain and MX/DNS cutover coordination, and related support, as described on our
        website or in your specific project quote.
      </p>
    ),
  },
  {
    heading: '3. Eligibility',
    body: (
      <p>
        You must be at least 18 years old and authorized to act on behalf of the business or organization for
        which you are requesting services. By submitting an assessment request or engaging our services, you
        represent that you meet these requirements and that any information you provide is accurate.
      </p>
    ),
  },
  {
    heading: '4. Free Assessment',
    body: (
      <p>
        Our free assessment is provided at no cost and creates no obligation to proceed with a paid engagement.
        Information submitted through the assessment form is used to evaluate your migration needs and, if
        applicable, to prepare a project scope and quote.
      </p>
    ),
  },
  {
    heading: '5. Engagement & Scope of Work',
    body: (
      <p>
        Following your assessment, we will provide a written scope of work, timeline, and price specific to your
        project before any paid work begins. Work proceeds only once you have approved that scope. If the actual
        scope of a project materially increases once work has begun, we will notify you and agree on any
        additional cost or timeline change before proceeding with the additional work.
      </p>
    ),
  },
  {
    heading: '6. Pricing & Payment',
    body: (
      <p>
        Pricing for individual platforms is published on our website as a starting reference and reflects typical
        project scope; your final price is confirmed in your written quote following the free assessment.
        Payment terms, including invoicing schedule and accepted payment methods, will be specified in your
        project quote or invoice. Fees are quoted and payable in US dollars unless otherwise agreed in writing.
      </p>
    ),
  },
  {
    heading: '7. Client Responsibilities',
    body: (
      <>
        <p>To allow us to deliver your migration safely and on schedule, you agree to:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li>Provide accurate information about your current and destination email environments</li>
          <li>Provide timely access and cooperation needed to perform the migration, including any required account access or administrator approvals</li>
          <li>Respond to requests for information or sign-off in a reasonably timely manner</li>
          <li>Maintain your own backups of any systems or data outside the scope of the engaged migration</li>
        </ul>
      </>
    ),
  },
  {
    heading: '8. Access to Accounts & Credentials',
    body: (
      <p>
        Where a migration requires access to your email accounts, administrator consoles, or API credentials, you
        authorize MigrateHive to use that access solely to perform the agreed migration work. Access is scoped to
        what the migration requires, and credentials are discarded once the project is confirmed complete and
        stable. We do not retain standing access to your systems beyond the engagement. See our Privacy Policy
        for further detail on how this data is handled.
      </p>
    ),
  },
  {
    heading: '9. Data Integrity & Backups',
    body: (
      <p>
        Every migration includes a pre-migration backup of source mailboxes and a tested rollback plan, as
        described in our process. While we take extensive precautions to prevent data loss, migrating data
        between third-party platforms carries inherent technical risk outside our control, including outages,
        rate limits, or policy changes by the source or destination provider. We are not liable for data loss or
        service interruption caused by the acts, omissions, or platform changes of third-party providers.
      </p>
    ),
  },
  {
    heading: '10. Warranties & Disclaimers',
    body: (
      <p>
        We will perform migration services with reasonable skill and care, consistent with the process described
        on our website. Except as expressly stated in your project quote, our services are provided without
        warranties of any kind, express or implied, including any implied warranty of merchantability or fitness
        for a particular purpose. We do not control, and make no warranty regarding, the uptime, features, or
        policies of third-party platforms (such as Google Workspace, Microsoft 365, or Zoho) involved in your
        migration.
      </p>
    ),
  },
  {
    heading: '11. Limitation of Liability',
    body: (
      <p>
        To the fullest extent permitted by law, MigrateHive's total liability arising out of or relating to a
        migration engagement will not exceed the total fees paid by you for that engagement. MigrateHive will not
        be liable for indirect, incidental, special, consequential, or punitive damages, including loss of
        profits, revenue, or data, even if advised of the possibility of such damages.
      </p>
    ),
  },
  {
    heading: '12. Cancellation & Refunds',
    body: (
      <p>
        You may cancel a requested engagement at any time before paid work begins at no charge. Once work has
        begun, fees for work already performed are non-refundable, and any applicable refund for unperformed work
        will be addressed in good faith based on the specifics of your project quote. Specific cancellation terms
        for your project will be set out in your written quote or agreement.
      </p>
    ),
  },
  {
    heading: '13. Confidentiality',
    body: (
      <p>
        We treat information about your business, infrastructure, and migration as confidential, and we are glad
        to work under a mutual non-disclosure agreement or your organization's own confidentiality requirements
        on request. We will not disclose your confidential information to third parties except as necessary to
        perform the engaged services or as required by law.
      </p>
    ),
  },
  {
    heading: '14. Intellectual Property',
    body: (
      <p>
        Your data, content, and mailbox information remain your property at all times. Any scripts, tools, or
        documentation we develop generally for our own migration process remain our property. Nothing in these
        Terms transfers ownership of our pre-existing tools, methodologies, or know-how to you.
      </p>
    ),
  },
  {
    heading: '15. Termination',
    body: (
      <p>
        Either party may terminate an active engagement for material breach that remains uncured after reasonable
        written notice. Upon termination, you remain responsible for fees owed for work performed up to the
        termination date, and we will cease work and, where applicable, provide a summary of migration status at
        the time of termination.
      </p>
    ),
  },
  {
    heading: '16. Governing Law',
    body: (
      <p>
        These Terms are governed by the laws applicable in the jurisdiction where MigrateHive is registered to do
        business, without regard to conflict of law principles, except where mandatory local consumer protection
        law provides otherwise.
      </p>
    ),
  },
  {
    heading: '17. Changes to These Terms',
    body: (
      <p>
        We may update these Terms from time to time. Material changes will be reflected by updating the "Last
        updated" date below. Continued use of our website or services after changes take effect constitutes
        acceptance of the revised Terms.
      </p>
    ),
  },
  {
    heading: '18. Contact Us',
    body: (
      <p>
        If you have questions about these Terms, contact us at{' '}
        <a href="mailto:hello@migratehive.com" className="text-accent-400 hover:text-accent-300 transition-colors">
          hello@migratehive.com
        </a>.
      </p>
    ),
  },
];

const SECTIONS_AR: { heading: string; body: React.ReactNode }[] = [
  {
    heading: '1. قبول الشروط',
    body: (
      <p>
        تحكم شروط الخدمة هذه ("الشروط") استخدامك لموقع MigrateHive الإلكتروني وتعاقدك مع MigrateHive ("MigrateHive"
        أو "نحن" أو "لنا") للحصول على خدمات نقل البريد الإلكتروني للأعمال. وباستخدامك لموقعنا الإلكتروني، أو
        تقديمك لطلب تقييم مجاني، أو تعاقدك مع خدماتنا، فإنك توافق على الالتزام بهذه الشروط. وإذا كنت لا توافق على
        ذلك، يرجى عدم استخدام موقعنا الإلكتروني أو خدماتنا.
      </p>
    ),
  },
  {
    heading: '2. وصف الخدمات',
    body: (
      <p>
        تقدم MigrateHive خدمات نقل البريد الإلكتروني للأعمال، بما في ذلك النقل من وإلى Google Workspace
        وMicrosoft 365 وZoho Mail وخوادم البريد المستندة إلى IMAP. وقد تشمل الخدمات نقل صناديق البريد وجهات
        الاتصال والتقويمات، وتنسيق تحويل النطاق وسجلات MX/DNS، والدعم ذي الصلة، على النحو المبيّن في موقعنا
        الإلكتروني أو في عرض السعر الخاص بمشروعك.
      </p>
    ),
  },
  {
    heading: '3. الأهلية',
    body: (
      <p>
        يجب أن يكون عمرك 18 عامًا على الأقل، وأن تكون مخولًا بالتصرف نيابةً عن الشركة أو المؤسسة التي تطلب الخدمات
        لصالحها. وبتقديمك لطلب تقييم أو تعاقدك مع خدماتنا، فإنك تُقرّ بأنك تستوفي هذه الشروط وأن أي معلومات تقدمها
        دقيقة.
      </p>
    ),
  },
  {
    heading: '4. التقييم المجاني',
    body: (
      <p>
        يُقدَّم تقييمنا المجاني دون أي تكلفة ولا يُنشئ أي التزام بالمضي قدمًا في تعاقد مدفوع. وتُستخدم المعلومات
        المقدَّمة عبر نموذج التقييم لتقييم احتياجات نقلك، وعند الاقتضاء، لإعداد نطاق المشروع وعرض السعر.
      </p>
    ),
  },
  {
    heading: '5. التعاقد ونطاق العمل',
    body: (
      <p>
        بعد إجراء تقييمك، سنقدم لك نطاق عمل خطي وجدولًا زمنيًا وسعرًا خاصًا بمشروعك قبل بدء أي عمل مدفوع. ولا يبدأ
        العمل إلا بعد موافقتك على ذلك النطاق. وإذا ازداد نطاق المشروع الفعلي بشكل جوهري بعد بدء العمل، فسنخبرك
        بذلك ونتفق على أي تكلفة إضافية أو تغيير في الجدول الزمني قبل المضي في تنفيذ العمل الإضافي.
      </p>
    ),
  },
  {
    heading: '6. التسعير والدفع',
    body: (
      <p>
        تُنشر أسعار كل منصة على موقعنا الإلكتروني كمرجع أولي يعكس نطاق المشروع المعتاد؛ ويتم تأكيد سعرك النهائي في
        عرض السعر الخطي الذي يُقدَّم بعد التقييم المجاني. وستُحدَّد شروط الدفع، بما في ذلك جدول إصدار الفواتير
        وطرق الدفع المقبولة، في عرض السعر أو الفاتورة الخاصة بمشروعك. وتُحدَّد الرسوم وتُدفع بالدولار الأمريكي، ما
        لم يُتفق على خلاف ذلك كتابةً.
      </p>
    ),
  },
  {
    heading: '7. مسؤوليات العميل',
    body: (
      <>
        <p>لتمكيننا من تنفيذ عملية نقلك بأمان وفي الوقت المحدد، فإنك توافق على:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li>تقديم معلومات دقيقة عن بيئتي البريد الإلكتروني الحالية والمقصودة</li>
          <li>توفير الوصول والتعاون اللازمين في الوقت المناسب لتنفيذ عملية النقل، بما في ذلك أي وصول مطلوب للحسابات أو موافقات المسؤولين</li>
          <li>الرد على طلبات المعلومات أو الموافقات في غضون فترة زمنية معقولة</li>
          <li>الاحتفاظ بنسخك الاحتياطية الخاصة لأي أنظمة أو بيانات تقع خارج نطاق عملية النقل المتعاقَد عليها</li>
        </ul>
      </>
    ),
  },
  {
    heading: '8. الوصول إلى الحسابات وبيانات الاعتماد',
    body: (
      <p>
        في الحالات التي تتطلب فيها عملية النقل الوصول إلى حسابات بريدك الإلكتروني، أو لوحات تحكم المسؤولين، أو
        بيانات اعتماد واجهات البرمجة (API)، فإنك تخوّل MigrateHive استخدام ذلك الوصول حصرًا لتنفيذ أعمال النقل
        المتفق عليها. ويكون نطاق الوصول مقيّدًا بما تتطلبه عملية النقل، ويتم التخلص من بيانات الاعتماد بعد تأكيد
        اكتمال المشروع واستقراره. ولا نحتفظ بوصول دائم إلى أنظمتك بعد انتهاء التعاقد. يُرجى الرجوع إلى سياسة
        الخصوصية الخاصة بنا لمزيد من التفاصيل حول كيفية التعامل مع هذه البيانات.
      </p>
    ),
  },
  {
    heading: '9. سلامة البيانات والنسخ الاحتياطية',
    body: (
      <p>
        تشمل كل عملية نقل نسخة احتياطية لصناديق البريد المصدر قبل النقل وخطة استرجاع مُختبرة، على النحو المبيّن
        في منهجية عملنا. وبينما نتخذ احتياطات واسعة لمنع فقدان البيانات، فإن نقل البيانات بين منصات تابعة لجهات
        خارجية ينطوي على مخاطر تقنية متأصلة خارجة عن سيطرتنا، تشمل حالات التعطل، أو حدود معدل الاستخدام، أو
        تغييرات السياسات من جانب مزوّد المنصة المصدر أو الوجهة. ولا نكون مسؤولين عن فقدان البيانات أو انقطاع
        الخدمة الناتج عن أفعال أو تقصير أو تغييرات في منصات مزوّدين تابعين لجهات خارجية.
      </p>
    ),
  },
  {
    heading: '10. الضمانات وإنكار المسؤولية',
    body: (
      <p>
        سننفذ خدمات النقل بمهارة وعناية معقولتين، بما يتسق مع منهجية العمل المبيّنة في موقعنا الإلكتروني. وفيما
        عدا ما يُنص عليه صريحًا في عرض السعر الخاص بمشروعك، تُقدَّم خدماتنا دون أي ضمانات من أي نوع، صريحة أو
        ضمنية، بما في ذلك أي ضمان ضمني للقابلية للتسويق أو الملاءمة لغرض معين. ولا نتحكم في مدى توافر أو خصائص أو
        سياسات المنصات التابعة لجهات خارجية (مثل Google Workspace أو Microsoft 365 أو Zoho) المشاركة في عملية
        نقلك، ولا نقدّم أي ضمان بشأنها.
      </p>
    ),
  },
  {
    heading: '11. تحديد المسؤولية',
    body: (
      <p>
        إلى أقصى حد يسمح به القانون، لن تتجاوز المسؤولية الإجمالية لـ MigrateHive الناشئة عن أو المتعلقة بأي
        تعاقد نقل إجمالي الرسوم التي دفعتها عن ذلك التعاقد. ولن تكون MigrateHive مسؤولة عن أي أضرار غير مباشرة
        أو عارضة أو خاصة أو تبعية أو تعويضية جزائية، بما في ذلك خسارة الأرباح أو الإيرادات أو البيانات، حتى في
        حال إخطارها بإمكانية وقوع تلك الأضرار.
      </p>
    ),
  },
  {
    heading: '12. الإلغاء واسترداد الأموال',
    body: (
      <p>
        يجوز لك إلغاء التعاقد المطلوب في أي وقت قبل بدء العمل المدفوع دون أي رسوم. وبعد بدء العمل، تكون الرسوم
        المدفوعة عن العمل المنفَّذ فعليًا غير قابلة للاسترداد، وسيتم التعامل مع أي استرداد ينطبق على العمل غير
        المنفَّذ بحسن نية وفقًا لتفاصيل عرض السعر الخاص بمشروعك. وستُحدَّد شروط الإلغاء الخاصة بمشروعك في عرض
        السعر أو الاتفاقية الخطية.
      </p>
    ),
  },
  {
    heading: '13. السرية',
    body: (
      <p>
        نتعامل مع المعلومات المتعلقة بشركتك وبنيتك التقنية وعملية نقلك بسرية تامة، ويسعدنا العمل بموجب اتفاقية
        عدم إفشاء متبادلة أو بموجب متطلبات السرية الخاصة بمؤسستك عند الطلب. ولن نكشف معلوماتك السرية لأي جهات
        خارجية إلا بالقدر اللازم لتنفيذ الخدمات المتعاقَد عليها أو وفقًا لما يقتضيه القانون.
      </p>
    ),
  },
  {
    heading: '14. الملكية الفكرية',
    body: (
      <p>
        تبقى بياناتك ومحتواك ومعلومات صناديق بريدك ملكًا لك في جميع الأوقات. وتبقى أي نصوص برمجية أو أدوات أو
        وثائق نطوّرها بشكل عام لعملية النقل الخاصة بنا ملكًا لنا. ولا يوجد في هذه الشروط ما ينقل إليك ملكية
        أدواتنا أو منهجياتنا أو خبراتنا الفنية القائمة مسبقًا.
      </p>
    ),
  },
  {
    heading: '15. إنهاء التعاقد',
    body: (
      <p>
        يجوز لأي من الطرفين إنهاء تعاقد نشط في حال وقوع إخلال جوهري لا يتم تصحيحه بعد إشعار خطي معقول. وعند
        الإنهاء، تبقى مسؤولًا عن الرسوم المستحقة عن العمل المنفَّذ حتى تاريخ الإنهاء، وسنوقف العمل، ونقدّم عند
        الاقتضاء ملخصًا لحالة النقل في وقت الإنهاء.
      </p>
    ),
  },
  {
    heading: '16. القانون الحاكم',
    body: (
      <p>
        تخضع هذه الشروط للقوانين المعمول بها في الولاية القضائية التي تمارس فيها MigrateHive نشاطها التجاري
        المسجَّل، دون اعتبار لمبادئ تنازع القوانين، إلا في الحالات التي تنص فيها قوانين حماية المستهلك المحلية
        الإلزامية على خلاف ذلك.
      </p>
    ),
  },
  {
    heading: '17. التغييرات على هذه الشروط',
    body: (
      <p>
        يجوز لنا تحديث هذه الشروط من وقت لآخر. وستنعكس التغييرات الجوهرية من خلال تحديث تاريخ "آخر تحديث" أدناه.
        ويُعدّ استمرارك في استخدام موقعنا الإلكتروني أو خدماتنا بعد نفاذ هذه التغييرات قبولًا بالشروط المُعدَّلة.
      </p>
    ),
  },
  {
    heading: '18. اتصل بنا',
    body: (
      <p>
        إذا كانت لديك أي أسئلة بشأن هذه الشروط، يرجى التواصل معنا على{' '}
        <a href="mailto:hello@migratehive.com" className="text-accent-400 hover:text-accent-300 transition-colors">
          hello@migratehive.com
        </a>.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  const { locale, withLocale } = useLanguage();
  const copy = COPY[locale];
  const sections = locale === 'ar' ? SECTIONS_AR : SECTIONS_EN;

  useSEO({
    title: copy.seoTitle,
    description: copy.seoDescription,
    path: '/terms-of-service',
    jsonLd: breadcrumbJsonLd([
      { name: locale === 'ar' ? 'الرئيسية' : 'Home', path: withLocale('/') },
      { name: copy.title, path: withLocale('/terms-of-service') },
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
