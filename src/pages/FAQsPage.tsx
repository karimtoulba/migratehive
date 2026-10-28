import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useSEO } from '@/hooks/useSEO';
import { faqPageJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import { useLanguage } from '@/context/LanguageContext';

const COPY = {
  en: {
    title: 'Email Migration FAQs – Common Questions Answered',
    description:
      'Answers to common questions about business email migration — Google Workspace, Microsoft 365, Zoho, and IMAP. Process, pricing, security, and support.',
    eyebrow: 'FAQ',
    headline: 'Every question we get,',
    headlineAccent: 'answered honestly.',
    sub: 'Organized by topic so you can find what you need quickly. Still have a question? Reach out directly.',
    notFound: "Didn't find what you were looking for?",
    getAssessment: 'Get a Free Assessment',
    contactUs: 'Contact Us',
    categories: [
      {
        id: 'general',
        label: 'General',
        faqs: [
          {
            question: 'What does MigrateHive actually do?',
            answer: 'We are a specialist business email migration company. We move mailboxes, contacts, calendars, and shared resources between email platforms — handling everything from the technical sync to the MX/DNS cutover, with a focus on zero message loss and minimal downtime.',
          },
          {
            question: 'How is MigrateHive different from a generalist IT contractor?',
            answer: 'Email migration is a narrow, high-stakes discipline with its own failure modes — MX propagation timing, deliverability configuration (SPF/DKIM/DMARC), folder mapping, rollback planning. A generalist IT contractor might do this once or twice a year; it is the entire focus of our work, every day.',
          },
          {
            question: 'Which email platforms do you support?',
            answer: 'Google Workspace, Microsoft 365, Zoho Mail, and any standard IMAP-based mail server — including migrations between any two of these platforms in either direction.',
          },
          {
            question: 'Do you work with businesses of any size?',
            answer: 'Yes. Our process scales from a handful of mailboxes for a small team to full company-wide migrations with hundreds of mailboxes.',
          },
          {
            question: 'Are you available for one-off projects, or only ongoing contracts?',
            answer: 'Most engagements are project-based — a single migration with a defined start and end. Many clients choose to continue with ongoing support afterward, but there is no requirement to do so.',
          },
        ],
      },
      {
        id: 'process-timelines',
        label: 'Process & Timelines',
        faqs: [
          {
            question: 'How long does a typical email migration take?',
            answer: 'Most individual mailboxes sync within hours. A full team migration is typically planned and completed within a scheduled window of a few days, with mailbox count being the biggest factor in total timeline. After your free assessment, we provide an exact timeline.',
          },
          {
            question: 'What information do you need from me to get started?',
            answer: 'Admin access credentials to your current mail environment (scoped where possible), an approximate mailbox count, and your target platform and timeline. We gather the rest during our discovery and domain-verification phase.',
          },
          {
            question: 'Will my team lose access to email during the migration?',
            answer: 'No. Your team keeps using their existing mailboxes normally while the sync runs in the background. Access only changes at the scheduled MX cutover, which is quick and coordinated, often over a weekend.',
          },
          {
            question: 'What happens if you discover a problem partway through?',
            answer: 'We flag it immediately and explain the options — we do not make unilateral decisions about your mail environment. If it changes scope or timeline, you approve that before we proceed.',
          },
          {
            question: 'Do I need to be technical to work with you?',
            answer: 'No. We explain your migration plan in plain language and only ask for decisions that genuinely require your input, like your preferred cutover window.',
          },
        ],
      },
      {
        id: 'pricing',
        label: 'Pricing',
        faqs: [
          {
            question: 'How much does an email migration cost?',
            answer: 'Our email migrations start at a flat base fee plus a small per-mailbox rate that varies by platform — see the pricing section on each platform\'s page for exact numbers. You receive a clear, fixed quote after your free assessment.',
          },
          {
            question: 'Is pricing a flat fee or based on the number of mailboxes?',
            answer: 'Both — there is a base migration fee per platform, plus a per-mailbox rate for larger teams. A 10-person team and a 100-person team both get the same rigorous process, scaled fairly by mailbox count.',
          },
          {
            question: 'Is the free assessment really free?',
            answer: 'Yes, with no obligation to proceed afterward. You get a clear picture of what your migration involves either way.',
          },
          {
            question: 'Do you charge extra if the migration takes longer than expected?',
            answer: 'Projects are scoped upfront based on our discovery audit. If something increases the scope significantly, we flag it and agree on any change before doing additional work — no surprise invoices.',
          },
          {
            question: 'Do you offer payment plans or milestone billing?',
            answer: 'For larger projects, milestone-based billing can be arranged. Raise this during your assessment and we will structure it around your project size.',
          },
        ],
      },
      {
        id: 'google-workspace',
        label: 'Google Workspace',
        faqs: [
          {
            question: 'Can you migrate Google Drive and Shared Drives along with email?',
            answer: 'Yes. Drive files and Shared Drives are a core part of our Google Workspace migration, migrated with folder structure, ownership, and sharing permissions preserved.',
          },
          {
            question: 'Do you handle domain-to-domain Workspace migrations, like after an acquisition?',
            answer: 'Yes, this is one of our specialties. Domain-to-domain migrations require careful planning around user mapping, licensing, and data ownership, and we handle the full process end to end.',
          },
          {
            question: 'What happens to our Google Groups and shared mailboxes?',
            answer: 'Groups, mailing lists, and shared/delegated mailboxes are inventoried during discovery and recreated on the destination domain with matching membership and permissions.',
          },
          {
            question: 'How do you prevent email deliverability issues after moving MX records?',
            answer: 'We configure SPF, DKIM, and DMARC records correctly as part of the migration, and verify deliverability before considering the cutover complete.',
          },
          {
            question: 'Can you migrate FROM Microsoft 365 or another provider TO Google Workspace?',
            answer: 'Yes. Migrating from Exchange, Microsoft 365, Zoho, or any IMAP-based provider into Google Workspace is fully within scope.',
          },
        ],
      },
      {
        id: 'microsoft-365',
        label: 'Microsoft 365',
        faqs: [
          {
            question: 'Do you handle tenant-to-tenant Microsoft 365 migrations for mergers or acquisitions?',
            answer: 'Yes, this is one of our core specialties within Microsoft 365 migration. It involves distinct planning around user identity, licensing, and data ownership that a standard mailbox migration doesn\'t require.',
          },
          {
            question: 'Can you migrate OneDrive and SharePoint along with mailboxes?',
            answer: 'Yes. OneDrive files and SharePoint document libraries are migrated as a core part of this service, with folder structure and permissions preserved.',
          },
          {
            question: 'What about Microsoft Teams chat history?',
            answer: 'Teams channels, files, and team structures are migrated as part of the project. We confirm exact chat history migration scope for your specific tenant setup during the assessment.',
          },
          {
            question: 'Do you support hybrid Exchange environments?',
            answer: 'Yes. Hybrid setups with mail flow split between on-premises servers and Exchange Online require careful sequencing, which our process is built to handle.',
          },
          {
            question: 'Can you migrate FROM Google Workspace TO Microsoft 365?',
            answer: 'Yes. Migrating from Google Workspace, Zoho, or any IMAP-based provider into Microsoft 365 is fully within scope of this service.',
          },
        ],
      },
      {
        id: 'zoho',
        label: 'Zoho',
        faqs: [
          {
            question: 'Can you migrate to Zoho Mail from Google Workspace or Microsoft 365?',
            answer: 'Yes. Migrating into Zoho Mail from any major platform, including Google Workspace, Microsoft 365, or a standard IMAP server, is fully supported.',
          },
          {
            question: 'Do you support migrating away from Zoho to another platform?',
            answer: 'Yes. We handle migrations out of Zoho with the same careful data extraction and continuity planning as migrations into it.',
          },
          {
            question: 'What happens to our Zoho CRM, Desk, or Books integrations during the move?',
            answer: 'We map these integrations during discovery and validate that they continue working correctly once the mail migration is complete.',
          },
          {
            question: "How does Zoho's domain verification process work?",
            answer: 'Zoho requires proof of domain ownership through a DNS TXT record or similar method before mail can be routed to new mailboxes. We handle this verification process as a standard part of the migration.',
          },
        ],
      },
      {
        id: 'imap-legacy',
        label: 'IMAP & Legacy Email',
        faqs: [
          {
            question: 'What counts as an "IMAP migration" versus a Google Workspace, Microsoft 365, or Zoho migration?',
            answer: 'If your destination is Google Workspace, Microsoft 365, or Zoho Mail specifically, those dedicated services include platform-specific steps like admin console setup and suite-wide data. Our IMAP migration service covers any source or destination mail server that communicates over the standard IMAP protocol — including legacy or custom systems.',
          },
          {
            question: 'Can you migrate from an old cPanel or on-premise mail server?',
            answer: 'Yes. This is one of the most common scenarios for this service — cPanel-based email, on-premise mail servers, and smaller regional hosting providers are all supported through direct IMAP access.',
          },
          {
            question: 'Do you support POP3 sources too?',
            answer: 'IMAP is strongly preferred because it preserves folder structure and message state. If your source system only offers POP3 access, mention this during your assessment and we\'ll confirm the best approach.',
          },
          {
            question: 'Can contacts and calendars be migrated via IMAP as well?',
            answer: 'Contacts and calendars are migrated via CardDAV and CalDAV where the source server supports these protocols. We confirm exactly what\'s available for your specific mail server during discovery.',
          },
          {
            question: 'How many mailboxes can be migrated at once?',
            answer: 'There\'s no hard limit — we\'ve run projects from a handful of mailboxes to full organization-wide migrations, all handled as one coordinated project.',
          },
        ],
      },
      {
        id: 'security-data',
        label: 'Security & Data',
        faqs: [
          {
            question: 'How do you keep our data secure during a migration?',
            answer: 'All transfers run over encrypted connections with access restricted to the engineers on your project, and we maintain audit trails throughout. Credentials are scoped to the migration and never retained longer than necessary.',
          },
          {
            question: 'Do you sign NDAs or work under our security policies?',
            answer: 'Yes. We are glad to work under your organization\'s NDA, data handling requirements, or security review process — raise this during your assessment.',
          },
          {
            question: 'What happens to our data and credentials after the migration is complete?',
            answer: 'Access credentials used for the migration are revoked or discarded once the project is confirmed complete and stable. We do not retain standing access to your mail environment afterward.',
          },
          {
            question: 'Do you offer a backup or rollback if something goes wrong?',
            answer: 'Yes. A full backup of your source mailboxes is taken before any changes begin, and every migration ships with a tested rollback plan written before we need it.',
          },
        ],
      },
      {
        id: 'support',
        label: 'Support',
        faqs: [
          {
            question: 'What support is included after the migration?',
            answer: '30 days of post-migration support is included with every project — monitoring, deliverability checks, and direct access to your migration team for anything that surfaces.',
          },
          {
            question: 'What if something breaks after the 30-day support window ends?',
            answer: 'Many clients arrange ongoing support or a maintenance agreement after their included 30 days. Ask about this during your assessment if you would like it planned in advance.',
          },
          {
            question: 'How do I reach support if I have an urgent issue?',
            answer: 'You get direct contact information for your migration team during onboarding, not a generic ticket queue — the same engineers who performed your migration are who you reach.',
          },
        ],
      },
    ],
  },
  ar: {
    title: 'الأسئلة الشائعة عن نقل البريد الإلكتروني',
    description:
      'إجابات على الأسئلة الشائعة حول نقل البريد الإلكتروني للأعمال — Google Workspace و Microsoft 365 و Zoho و IMAP. العملية والتسعير والأمان والدعم.',
    eyebrow: 'الأسئلة الشائعة',
    headline: 'كل سؤال نتلقاه،',
    headlineAccent: 'نجيب عليه بصدق.',
    sub: 'منظمة حسب الموضوع لتجد ما تحتاجه بسرعة. لا تزال لديك سؤال؟ تواصل معنا مباشرة.',
    notFound: 'لم تجد ما كنت تبحث عنه؟',
    getAssessment: 'احصل على تقييم مجاني',
    contactUs: 'تواصل معنا',
    categories: [
      {
        id: 'general',
        label: 'عام',
        faqs: [
          {
            question: 'ما الذي تقوم به MigrateHive بالضبط؟',
            answer: 'نحن شركة متخصصة في نقل البريد الإلكتروني للأعمال. ننقل صناديق البريد وجهات الاتصال والتقويمات والموارد المشتركة بين منصات البريد الإلكتروني المختلفة — ونتولى كل شيء من المزامنة التقنية إلى تبديل سجلات MX/DNS، مع التركيز على عدم فقدان أي رسالة وتقليل وقت التعطل إلى أدنى حد.',
          },
          {
            question: 'كيف تختلف MigrateHive عن متعهد تقنية معلومات عام؟',
            answer: 'نقل البريد الإلكتروني تخصص دقيق وعالي الحساسية له أنماط فشله الخاصة — توقيت انتشار سجلات MX، وضبط قابلية التسليم (SPF/DKIM/DMARC)، وتخطيط المجلدات، والتخطيط للتراجع عند الحاجة. قد يقوم متعهد تقنية معلومات عام بهذا مرة أو مرتين في السنة؛ أما بالنسبة لنا، فهذا هو محور عملنا بالكامل، كل يوم.',
          },
          {
            question: 'ما منصات البريد الإلكتروني التي تدعمونها؟',
            answer: 'Google Workspace، و Microsoft 365، و Zoho Mail، وأي خادم بريد قياسي يعتمد على IMAP — بما في ذلك عمليات النقل بين أي منصتين من هذه المنصات وفي كلا الاتجاهين.',
          },
          {
            question: 'هل تتعاملون مع شركات من أي حجم؟',
            answer: 'نعم. تتكيف عمليتنا من عدد قليل من صناديق البريد لفريق صغير إلى عمليات نقل كاملة على مستوى الشركة تشمل مئات الصناديق.',
          },
          {
            question: 'هل أنتم متاحون لمشاريع لمرة واحدة، أم فقط للعقود المستمرة؟',
            answer: 'معظم تعاملاتنا تكون قائمة على مشروع محدد — عملية نقل واحدة ذات بداية ونهاية واضحتين. يختار كثير من العملاء الاستمرار في الحصول على دعم مستمر بعد ذلك، لكن لا يوجد أي التزام بذلك.',
          },
        ],
      },
      {
        id: 'process-timelines',
        label: 'العملية والجدول الزمني',
        faqs: [
          {
            question: 'كم يستغرق نقل البريد الإلكتروني النموذجي من الوقت؟',
            answer: 'تتم مزامنة معظم صناديق البريد الفردية في غضون ساعات. أما نقل فريق كامل، فيُخطَّط له وينفَّذ عادةً خلال نافذة زمنية مجدولة من بضعة أيام، وعدد صناديق البريد هو العامل الأكبر في تحديد الجدول الزمني الإجمالي. بعد تقييمك المجاني، نزوّدك بجدول زمني دقيق.',
          },
          {
            question: 'ما المعلومات التي تحتاجونها مني للبدء؟',
            answer: 'بيانات دخول إدارية لبيئة بريدك الحالية (بصلاحيات محدودة حيثما أمكن)، وعدد تقريبي لصناديق البريد، والمنصة المستهدفة والجدول الزمني المطلوب. نجمع باقي التفاصيل خلال مرحلة الاستكشاف والتحقق من ملكية النطاق.',
          },
          {
            question: 'هل سيفقد فريقي الوصول إلى البريد الإلكتروني خلال النقل؟',
            answer: 'لا. يستمر فريقك في استخدام صناديق بريدهم الحالية بشكل طبيعي بينما تجري المزامنة في الخلفية. لا يتغير الوصول إلا عند تبديل سجلات MX المجدول، وهو سريع ومنسَّق، وغالبًا ما يتم خلال عطلة نهاية الأسبوع.',
          },
          {
            question: 'ماذا يحدث إذا اكتشفتم مشكلة في منتصف العملية؟',
            answer: 'نبلّغك بها فورًا ونشرح لك الخيارات المتاحة — فنحن لا نتخذ قرارات منفردة بشأن بيئة بريدك. وإذا كانت المشكلة ستغيّر نطاق العمل أو الجدول الزمني، فإننا نحصل على موافقتك قبل المتابعة.',
          },
          {
            question: 'هل أحتاج إلى خبرة تقنية للتعامل معكم؟',
            answer: 'لا. نشرح لك خطة النقل بلغة واضحة ومباشرة، ولا نطلب منك قرارات إلا في الأمور التي تتطلب رأيك فعليًا، مثل الوقت المفضل لتبديل البريد.',
          },
        ],
      },
      {
        id: 'pricing',
        label: 'التسعير',
        faqs: [
          {
            question: 'كم تكلفة نقل البريد الإلكتروني؟',
            answer: 'تبدأ عمليات نقل البريد الإلكتروني لدينا برسم أساسي ثابت بالإضافة إلى رسم بسيط لكل صندوق بريد يختلف حسب المنصة — راجع قسم التسعير في صفحة كل منصة للحصول على الأرقام الدقيقة. وستحصل على عرض سعر واضح وثابت بعد تقييمك المجاني.',
          },
          {
            question: 'هل التسعير رسم ثابت أم يعتمد على عدد صناديق البريد؟',
            answer: 'كلاهما — هناك رسم أساسي للنقل حسب المنصة، بالإضافة إلى رسم لكل صندوق بريد بالنسبة للفرق الأكبر. يحصل فريق من 10 أشخاص وفريق من 100 شخص على نفس العملية الدقيقة، مع تسعير عادل يتناسب مع عدد صناديق البريد.',
          },
          {
            question: 'هل التقييم المجاني مجاني حقًا؟',
            answer: 'نعم، دون أي التزام بالمتابعة بعد ذلك. ستحصل على صورة واضحة لما يتضمنه نقلك في كل الأحوال.',
          },
          {
            question: 'هل تتقاضون رسومًا إضافية إذا استغرق النقل وقتًا أطول من المتوقع؟',
            answer: 'يتم تحديد نطاق المشاريع مسبقًا بناءً على تدقيق الاستكشاف الذي نجريه. وإذا أدى أي أمر إلى توسيع النطاق بشكل كبير، فإننا ننبّهك ونتفق على أي تغيير قبل القيام بأي عمل إضافي — دون أي فواتير مفاجئة.',
          },
          {
            question: 'هل تقدمون خطط دفع أو فوترة على مراحل؟',
            answer: 'بالنسبة للمشاريع الأكبر، يمكن ترتيب فوترة على مراحل. اطرح هذا الأمر خلال تقييمك وسنصمم الهيكل المناسب حسب حجم مشروعك.',
          },
        ],
      },
      {
        id: 'google-workspace',
        label: 'Google Workspace',
        faqs: [
          {
            question: 'هل يمكنكم نقل Google Drive والمحركات المشتركة (Shared Drives) مع البريد الإلكتروني؟',
            answer: 'نعم. ملفات Drive والمحركات المشتركة جزء أساسي من عملية نقل Google Workspace التي نقوم بها، ويتم نقلها مع الحفاظ على بنية المجلدات والملكية وصلاحيات المشاركة.',
          },
          {
            question: 'هل تتولون عمليات نقل Workspace من نطاق إلى نطاق، كما يحدث بعد عملية استحواذ؟',
            answer: 'نعم، هذا أحد مجالات تخصصنا. تتطلب عمليات النقل من نطاق إلى نطاق تخطيطًا دقيقًا لمطابقة المستخدمين والترخيص وملكية البيانات، ونحن نتولى العملية الكاملة من البداية إلى النهاية.',
          },
          {
            question: 'ماذا يحدث لمجموعات Google (Google Groups) وصناديق البريد المشتركة لدينا؟',
            answer: 'يتم حصر المجموعات والقوائم البريدية وصناديق البريد المشتركة أو المفوَّضة خلال مرحلة الاستكشاف، وإعادة إنشائها على النطاق المستهدف بنفس العضويات والصلاحيات.',
          },
          {
            question: 'كيف تمنعون مشاكل تسليم البريد الإلكتروني بعد نقل سجلات MX؟',
            answer: 'نقوم بضبط سجلات SPF و DKIM و DMARC بشكل صحيح كجزء من عملية النقل، ونتحقق من قابلية التسليم قبل اعتبار عملية التبديل مكتملة.',
          },
          {
            question: 'هل يمكنكم النقل من Microsoft 365 أو مزود آخر إلى Google Workspace؟',
            answer: 'نعم. النقل من Exchange أو Microsoft 365 أو Zoho أو أي مزود يعتمد على IMAP إلى Google Workspace يقع بالكامل ضمن نطاق خدماتنا.',
          },
        ],
      },
      {
        id: 'microsoft-365',
        label: 'Microsoft 365',
        faqs: [
          {
            question: 'هل تتولون عمليات نقل Microsoft 365 من مستأجر (Tenant) إلى آخر لعمليات الدمج أو الاستحواذ؟',
            answer: 'نعم، هذا أحد مجالات تخصصنا الأساسية في نقل Microsoft 365. يتطلب هذا تخطيطًا مختلفًا يتعلق بهوية المستخدمين والترخيص وملكية البيانات، وهو ما لا يتطلبه نقل صناديق البريد العادي.',
          },
          {
            question: 'هل يمكنكم نقل OneDrive و SharePoint مع صناديق البريد؟',
            answer: 'نعم. يتم نقل ملفات OneDrive ومكتبات مستندات SharePoint كجزء أساسي من هذه الخدمة، مع الحفاظ على بنية المجلدات والصلاحيات.',
          },
          {
            question: 'ماذا عن سجل محادثات Microsoft Teams؟',
            answer: 'يتم نقل قنوات Teams والملفات وبنية الفرق كجزء من المشروع. نؤكد النطاق الدقيق لنقل سجل المحادثات الخاص بإعداد مستأجرك (Tenant) خلال مرحلة التقييم.',
          },
          {
            question: 'هل تدعمون بيئات Exchange الهجينة؟',
            answer: 'نعم. تتطلب الإعدادات الهجينة التي يتوزع فيها تدفق البريد بين خوادم محلية و Exchange Online تسلسلاً دقيقًا للخطوات، وهو ما صُممت عمليتنا للتعامل معه.',
          },
          {
            question: 'هل يمكنكم النقل من Google Workspace إلى Microsoft 365؟',
            answer: 'نعم. النقل من Google Workspace أو Zoho أو أي مزود يعتمد على IMAP إلى Microsoft 365 يقع بالكامل ضمن نطاق هذه الخدمة.',
          },
        ],
      },
      {
        id: 'zoho',
        label: 'Zoho',
        faqs: [
          {
            question: 'هل يمكنكم النقل إلى Zoho Mail من Google Workspace أو Microsoft 365؟',
            answer: 'نعم. النقل إلى Zoho Mail من أي منصة رئيسية، بما في ذلك Google Workspace أو Microsoft 365 أو خادم IMAP قياسي، مدعوم بالكامل.',
          },
          {
            question: 'هل تدعمون النقل من Zoho إلى منصة أخرى؟',
            answer: 'نعم. نتولى عمليات النقل من Zoho بنفس الدقة في استخراج البيانات والتخطيط لاستمرارية العمل التي نطبقها على عمليات النقل إليه.',
          },
          {
            question: 'ماذا يحدث لتكاملات Zoho CRM أو Desk أو Books لدينا خلال عملية النقل؟',
            answer: 'نقوم بتحديد هذه التكاملات خلال مرحلة الاستكشاف، ونتحقق من استمرار عملها بشكل صحيح بعد اكتمال نقل البريد.',
          },
          {
            question: 'كيف تعمل عملية التحقق من ملكية النطاق في Zoho؟',
            answer: 'تتطلب Zoho إثبات ملكية النطاق من خلال سجل DNS من نوع TXT أو طريقة مماثلة قبل إمكانية توجيه البريد إلى صناديق البريد الجديدة. نتولى عملية التحقق هذه كجزء معتاد من النقل.',
          },
        ],
      },
      {
        id: 'imap-legacy',
        label: 'IMAP والبريد القديم',
        faqs: [
          {
            question: 'ما الذي يُعتبر "نقل IMAP" في مقابل نقل Google Workspace أو Microsoft 365 أو Zoho؟',
            answer: 'إذا كانت وجهتك هي Google Workspace أو Microsoft 365 أو Zoho Mail على وجه التحديد، فإن هذه الخدمات المخصصة تشمل خطوات خاصة بالمنصة مثل إعداد لوحة تحكم المسؤول وبيانات الحزمة بالكامل. أما خدمة نقل IMAP لدينا، فتغطي أي خادم بريد مصدر أو وجهة يتواصل عبر بروتوكول IMAP القياسي — بما في ذلك الأنظمة القديمة أو المخصصة.',
          },
          {
            question: 'هل يمكنكم النقل من خادم بريد قديم يعتمد على cPanel أو خادم محلي؟',
            answer: 'نعم. هذا أحد أكثر السيناريوهات شيوعًا لهذه الخدمة — فالبريد الإلكتروني المعتمد على cPanel، والخوادم المحلية، ومزودو الاستضافة الإقليميون الأصغر، جميعها مدعومة من خلال الوصول المباشر عبر IMAP.',
          },
          {
            question: 'هل تدعمون أيضًا المصادر التي تستخدم POP3؟',
            answer: 'يُفضَّل استخدام IMAP بشكل كبير لأنه يحافظ على بنية المجلدات وحالة الرسائل. وإذا كان نظامك المصدر يوفر فقط وصول POP3، فاذكر ذلك خلال تقييمك وسنؤكد لك أفضل نهج للتعامل معه.',
          },
          {
            question: 'هل يمكن نقل جهات الاتصال والتقويمات عبر IMAP أيضًا؟',
            answer: 'يتم نقل جهات الاتصال والتقويمات عبر بروتوكولي CardDAV و CalDAV عندما يدعم الخادم المصدر هذه البروتوكولات. نؤكد بدقة ما هو متاح لخادم بريدك المحدد خلال مرحلة الاستكشاف.',
          },
          {
            question: 'ما عدد صناديق البريد التي يمكن نقلها في المرة الواحدة؟',
            answer: 'لا يوجد حد صارم — فقد نفّذنا مشاريع تتراوح من عدد قليل من صناديق البريد إلى عمليات نقل كاملة على مستوى المؤسسة، وجميعها تمت كمشروع واحد منسَّق.',
          },
        ],
      },
      {
        id: 'security-data',
        label: 'الأمان والبيانات',
        faqs: [
          {
            question: 'كيف تحافظون على أمان بياناتنا خلال عملية النقل؟',
            answer: 'تتم جميع عمليات النقل عبر اتصالات مشفّرة مع تقييد الوصول للمهندسين العاملين على مشروعك فقط، ونحتفظ بسجلات تدقيق كاملة طوال العملية. وتكون بيانات الدخول محددة النطاق لعملية النقل ولا يتم الاحتفاظ بها أبدًا لفترة أطول من اللازم.',
          },
          {
            question: 'هل توقّعون اتفاقيات عدم الإفشاء (NDA) أو تعملون وفق سياسات الأمان الخاصة بنا؟',
            answer: 'نعم. يسعدنا العمل بموجب اتفاقية عدم الإفشاء الخاصة بمؤسستك، أو متطلبات التعامل مع البيانات، أو عملية مراجعة الأمان — اطرح هذا الأمر خلال تقييمك.',
          },
          {
            question: 'ماذا يحدث لبياناتنا وبيانات الدخول الخاصة بنا بعد اكتمال النقل؟',
            answer: 'يتم إلغاء أو إتلاف بيانات الدخول المستخدمة في النقل بعد التأكد من اكتمال المشروع واستقراره. ولا نحتفظ بأي وصول دائم لبيئة بريدك بعد ذلك.',
          },
          {
            question: 'هل توفرون نسخة احتياطية أو إمكانية التراجع في حال حدوث خطأ ما؟',
            answer: 'نعم. تؤخذ نسخة احتياطية كاملة من صناديق بريدك المصدر قبل بدء أي تغييرات، وتأتي كل عملية نقل مع خطة تراجع مجرَّبة تُكتب قبل أن نحتاج إليها.',
          },
        ],
      },
      {
        id: 'support',
        label: 'الدعم',
        faqs: [
          {
            question: 'ما الدعم المشمول بعد النقل؟',
            answer: 'يشمل كل مشروع 30 يومًا من الدعم بعد النقل — المراقبة، وفحوصات قابلية التسليم، والوصول المباشر إلى فريق نقلك لأي أمر يظهر.',
          },
          {
            question: 'ماذا لو تعطل شيء بعد انتهاء فترة الدعم البالغة 30 يومًا؟',
            answer: 'يرتّب كثير من العملاء دعمًا مستمرًا أو اتفاقية صيانة بعد فترة الـ 30 يومًا المشمولة. اسأل عن هذا خلال تقييمك إذا كنت تريد التخطيط له مسبقًا.',
          },
          {
            question: 'كيف أتواصل مع الدعم إذا كانت لدي مشكلة عاجلة؟',
            answer: 'تحصل على معلومات تواصل مباشرة مع فريق نقلك خلال مرحلة الإعداد، وليس عبر قائمة تذاكر عامة — فالمهندسون الذين نفذوا نقلك هم من تتواصل معهم مباشرة.',
          },
        ],
      },
    ],
  },
};

export default function FAQsPage() {
  const { locale, withLocale } = useLanguage();
  const t = COPY[locale];
  const ALL_FAQS = t.categories.flatMap((cat) => cat.faqs);

  useSEO({
    title: t.title,
    description: t.description,
    path: '/faqs',
    jsonLd: [
      faqPageJsonLd(ALL_FAQS),
      breadcrumbJsonLd([
        { name: locale === 'ar' ? 'الرئيسية' : 'Home', path: withLocale('/') },
        { name: locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQs', path: withLocale('/faqs') },
      ]),
    ],
  });

  return (
    <div>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-500/10 blur-[120px] rounded-full" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <Breadcrumbs
            className="mb-6 flex justify-center"
            items={[{ label: locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQs' }]}
          />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-4">{t.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              {t.headline}
              <br />
              <span className="text-gradient-accent">{t.headlineAccent}</span>
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed">
              {t.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="relative py-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-wrap gap-2.5 justify-center">
            {t.categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 text-sm text-navy-300 hover:text-white bg-navy-900/40 hover:bg-navy-800/60 border border-white/5 hover:border-accent-500/30 rounded-full transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categorized FAQs */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16">
        {t.categories.map((cat, i) => (
          <section key={cat.id} id={cat.id} className={`relative py-14 ${i > 0 ? 'border-t border-white/5' : ''} scroll-mt-24`}>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-8"
            >
              {cat.label}
            </motion.h2>
            <FaqAccordion faqs={cat.faqs} defaultOpenIndex={null} />
          </section>
        ))}
      </div>

      {/* CTA to contact */}
      <section className="relative py-16 md:py-20 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-navy-300 mb-5">{t.notFound}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to={withLocale('/contact#assessment')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-black font-semibold rounded-xl transition-all hover:shadow-[0_0_30px_-6px_rgba(34,211,238,0.5)]"
            >
              {t.getAssessment}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
            <Link
              to={withLocale('/contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-800/60 hover:bg-navy-700/60 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all"
            >
              {t.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
