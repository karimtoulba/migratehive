import { ServiceContent } from './types';

export const microsoft365Migration: ServiceContent = {
  slug: 'microsoft-365-migration',
  icon: 'Building2',
  parentSlug: 'cloud-email-migration',
  pricing: { amount: 99, perEmail: 15 },
  relatedSlugs: ['google-workspace-migration', 'zoho-migration', 'imap-email-migration', 'cloud-email-migration'],
  en: {
    name: 'Microsoft 365 Migration',
    shortName: 'Microsoft 365',
    tagline: 'Exchange Online, OneDrive, SharePoint, and Teams migrated into or between Microsoft 365 tenants with full data integrity.',
    seoTitle: 'Microsoft 365 Migration – Tenant-to-Tenant Experts',
    seoDescription: 'Microsoft 365 migration services — Exchange Online, OneDrive, SharePoint, and Teams data migrated with tenant-to-tenant expertise and zero mailbox loss.',
    eyebrow: 'MICROSOFT 365 MIGRATION',
    headline: 'Move to Microsoft 365',
    headlineAccent: 'without the tenant-migration headaches.',
    subheadline: 'Exchange Online mailboxes, OneDrive files, SharePoint sites, and Teams data — migrated with the tenant-to-tenant expertise mergers and rebrands actually require.',
    heroStats: [
      { value: '500+', label: 'Mailboxes Migrated' },
      { value: '0', label: 'Files or Emails Lost' },
      { value: '30-Day', label: 'Support Included' },
    ],
    painPoints: [
      {
        title: 'Tenant-to-tenant migrations are a different challenge entirely',
        description: 'Mergers, acquisitions, and divestitures often require moving an entire Microsoft 365 tenant to another — a fundamentally more complex project than a standard email switch.',
      },
      {
        title: 'You\'re moving from on-prem Exchange or a hybrid setup',
        description: 'Hybrid Exchange configurations, with mail flow split between on-premises servers and the cloud, require careful sequencing to migrate without mail flow disruption.',
      },
      {
        title: 'OneDrive and SharePoint data is tied to your mailboxes',
        description: 'Files, document libraries, and team sites don\'t move automatically with email — they need their own dedicated migration plan to avoid stranded data.',
      },
      {
        title: 'Teams chat history and channels add another layer',
        description: 'Microsoft Teams stores conversations, files, and channel structures separately from mail, and migrating them correctly requires specific expertise.',
      },
      {
        title: 'Licensing and seat assignment gets confusing fast',
        description: 'Understanding which license tier each user needs, and managing costs during an overlap period between tenants, is easy to get wrong without a clear plan.',
      },
      {
        title: 'Compliance and retention policies need to carry over',
        description: 'If your organization relies on retention policies, legal holds, or compliance configurations, losing them during a migration can create real regulatory exposure.',
      },
    ],
    whatWeMigrate: [
      'Exchange Online mailboxes — mail, calendar, contacts, and tasks',
      'OneDrive for Business files and folder structures',
      'SharePoint sites and document libraries',
      'Microsoft Teams channels, files, and team structure',
      'Shared and resource mailboxes',
      'Distribution lists and mail-enabled security groups',
      'Azure AD / Entra ID user accounts and provisioning',
      'Retention policies and compliance configurations',
      'MX records, domain verification, and DNS configuration',
    ],
    features: [
      {
        icon: 'Building2',
        title: 'Full Microsoft 365 Suite Coverage',
        description: 'Exchange, OneDrive, SharePoint, and Teams are all migrated together, not treated as separate disconnected projects.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Tenant-to-Tenant Expertise',
        description: 'Mergers, acquisitions, and rebrands require moving an entire tenant correctly — user identities, licensing, and data ownership included.',
      },
      {
        icon: 'KeyRound',
        title: 'Azure AD / Entra ID Provisioning',
        description: 'User identities and security groups are provisioned correctly in the destination tenant, preserving access control from day one.',
      },
      {
        icon: 'RefreshCw',
        title: 'Hybrid Exchange Cutover Support',
        description: 'Organizations running hybrid Exchange environments get a migration plan that respects existing mail flow rules and sequencing requirements.',
      },
      {
        icon: 'Database',
        title: 'Compliance & Retention Continuity',
        description: 'Retention policies and compliance configurations are documented and recreated in the new tenant, not left behind.',
      },
      {
        icon: 'Users',
        title: 'License & Seat Management',
        description: 'We help plan license assignment across the transition so you\'re not paying for unnecessary duplicate seats during the overlap period.',
      },
      {
        icon: 'LifeBuoy',
        title: '30-Day Support',
        description: 'Direct access to your migration team for a full month after go-live, for admin questions and anything that needs adjusting.',
      },
    ],
    process: [
      {
        title: 'Tenant & Environment Discovery',
        description: 'We map your current tenant configuration, mailbox count, OneDrive/SharePoint data volume, and any hybrid Exchange setup.',
      },
      {
        title: 'Pre-Migration Backup & License Planning',
        description: 'Source data is backed up and a license assignment plan is built to manage costs and access during the transition period.',
      },
      {
        title: 'Target Tenant & User Provisioning',
        description: 'User accounts, security groups, and licenses are provisioned in Azure AD / Entra ID on the destination tenant.',
      },
      {
        title: 'Mailbox, OneDrive & SharePoint Migration',
        description: 'Mail, files, and document libraries are migrated with an initial full sync followed by incremental passes to capture ongoing changes.',
      },
      {
        title: 'Teams & Groups Reconfiguration',
        description: 'Teams channels, distribution lists, and mail-enabled groups are rebuilt on the destination tenant to match your existing structure.',
      },
      {
        title: 'DNS/MX Cutover',
        description: 'Domain verification is completed and mail routing is switched to the new tenant at a scheduled, low-impact time.',
      },
      {
        title: 'Post-Migration Validation & Support',
        description: 'We verify mailbox and file completeness for every user, then remain available for 30 days after go-live.',
      },
    ],
    comparison: [
      {
        aspect: 'Tenant-to-tenant complexity',
        withoutUs: 'Underestimated until identity and licensing issues surface',
        withUs: 'Planned as its own project with dedicated expertise',
      },
      {
        aspect: 'OneDrive & SharePoint continuity',
        withoutUs: 'Files stranded or ownership broken after the move',
        withUs: 'Migrated alongside mail with structure preserved',
      },
      {
        aspect: 'Compliance policy carryover',
        withoutUs: 'Retention and legal hold settings often forgotten',
        withUs: 'Documented and recreated in the destination tenant',
      },
      {
        aspect: 'Licensing management',
        withoutUs: 'Duplicate seats paid for during a messy overlap',
        withUs: 'Clear license plan across the transition period',
      },
      {
        aspect: 'Downtime for staff',
        withoutUs: 'Extended access issues during identity migration',
        withUs: 'Sequenced cutover minimizes disruption per user',
      },
    ],
    testimonials: [
      {
        quote: 'We merged two tenants after an acquisition and kept every mailbox, every SharePoint site, and every Teams channel our staff actually used.',
        name: 'IT Director',
        role: 'Manufacturing Group',
      },
      {
        quote: 'Our hybrid Exchange setup made me nervous going into this, but mail flow never dropped once during the whole migration.',
        name: 'Systems Administrator',
        role: 'Financial Services Firm',
      },
      {
        quote: 'They planned our licensing so we weren\'t double-paying for seats during the transition. That alone paid for a chunk of the project.',
        name: 'Finance Director',
        role: 'Professional Services Company',
      },
      {
        quote: 'Our SharePoint sites had years of permission tangles nobody wanted to touch. They untangled it during the migration instead of just copying the mess over.',
        name: 'IT Manager',
        role: 'Insurance Brokerage',
      },
      {
        quote: 'We had a legal hold active on several mailboxes and I was sure something would get missed. Everything carried over intact and documented.',
        name: 'Compliance Officer',
        role: 'Financial Services Firm',
      },
    ],
    faqs: [
      {
        question: 'Do you handle tenant-to-tenant Microsoft 365 migrations for mergers or acquisitions?',
        answer: "Yes, this is one of our core specialties within Microsoft 365 migration. It involves distinct planning around user identity, licensing, and data ownership that a standard mailbox migration doesn't require.",
      },
      {
        question: 'Can you migrate OneDrive and SharePoint along with mailboxes?',
        answer: 'Yes. OneDrive files and SharePoint document libraries are migrated as a core part of this service, with folder structure and permissions preserved.',
      },
      {
        question: 'What about Microsoft Teams chat history?',
        answer: 'Teams channels, files, and team structures are migrated as part of the project. We will confirm exact chat history migration scope for your specific tenant setup during the assessment, since this depends on your current Microsoft licensing and configuration.',
      },
      {
        question: 'Do you support hybrid Exchange environments?',
        answer: 'Yes. Hybrid setups with mail flow split between on-premises servers and Exchange Online require careful sequencing, which our process is built to handle.',
      },
      {
        question: 'How is licensing handled during the transition?',
        answer: 'We help you plan license assignment across the migration window so you understand exactly what you need and avoid paying for unnecessary duplicate seats.',
      },
      {
        question: 'Can you migrate FROM Google Workspace TO Microsoft 365?',
        answer: 'Yes. Migrating from Google Workspace, Zoho, or any IMAP-based provider into Microsoft 365 is fully within scope of this service.',
      },
    ],
    ctaHeadline: 'Ready to move to Microsoft 365 without the tenant-migration risk?',
    ctaSubtext: 'Get a free assessment covering your mailboxes, OneDrive, SharePoint, and licensing plan.',
  },
  ar: {
    name: 'نقل Microsoft 365',
    shortName: 'Microsoft 365',
    tagline: 'نقل Exchange Online وOneDrive وSharePoint وTeams إلى مستأجر Microsoft 365 جديد أو بين مستأجرين، مع الحفاظ الكامل على سلامة البيانات.',
    seoTitle: 'نقل Microsoft 365 – خبراء النقل بين المستأجرين',
    seoDescription: 'خدمات نقل Microsoft 365 — نقل بيانات Exchange Online وOneDrive وSharePoint وTeams بخبرة متخصصة في النقل بين المستأجرين (tenant-to-tenant) ودون فقدان أي صندوق بريد.',
    eyebrow: 'نقل Microsoft 365',
    headline: 'انتقل إلى Microsoft 365',
    headlineAccent: 'دون متاعب نقل المستأجرين.',
    subheadline: 'صناديق بريد Exchange Online، وملفات OneDrive، ومواقع SharePoint، وبيانات Teams — تُرحَّل بالخبرة المتخصصة في النقل بين المستأجرين التي تتطلبها عمليات الدمج وإعادة التسمية التجارية فعليًا.',
    heroStats: [
      { value: '+500', label: 'صندوق بريد تم نقله' },
      { value: '0', label: 'ملف أو رسالة مفقودة' },
      { value: '30 يومًا', label: 'دعم فني متضمن' },
    ],
    painPoints: [
      {
        title: 'النقل بين المستأجرين تحدٍّ مختلف تمامًا',
        description: 'غالبًا ما تتطلب عمليات الدمج والاستحواذ والتصفية نقل مستأجر Microsoft 365 بالكامل إلى مستأجر آخر — وهو مشروع أكثر تعقيدًا جذريًا من تبديل بريد إلكتروني عادي.',
      },
      {
        title: 'تنتقل من Exchange محلي أو بيئة هجينة',
        description: 'تتطلب تهيئات Exchange الهجينة، التي يتوزع فيها تدفق البريد بين خوادم محلية والسحابة، ترتيبًا دقيقًا للخطوات لإجراء النقل دون تعطيل تدفق البريد.',
      },
      {
        title: 'بيانات OneDrive وSharePoint مرتبطة بصناديق بريدك',
        description: 'لا تنتقل الملفات ومكتبات المستندات ومواقع الفريق تلقائيًا مع البريد الإلكتروني — فهي تحتاج إلى خطة نقل مخصصة خاصة بها لتجنب تعليق البيانات دون نقل.',
      },
      {
        title: 'سجل محادثات وقنوات Teams يضيف طبقة أخرى من التعقيد',
        description: 'يخزّن Microsoft Teams المحادثات والملفات وهياكل القنوات بشكل منفصل عن البريد، ونقلها بشكل صحيح يتطلب خبرة متخصصة.',
      },
      {
        title: 'إدارة الترخيص وتوزيع المقاعد تصبح معقدة بسرعة',
        description: 'تحديد فئة الترخيص التي يحتاجها كل مستخدم، وإدارة التكاليف خلال فترة التداخل بين المستأجرين، أمر يسهل الوقوع في أخطائه بدون خطة واضحة.',
      },
      {
        title: 'يجب نقل سياسات الامتثال والاحتفاظ بالبيانات دون فقدان',
        description: 'إذا كانت مؤسستك تعتمد على سياسات الاحتفاظ بالبيانات، أو الحجز القانوني، أو إعدادات الامتثال، فإن فقدانها أثناء النقل يمكن أن يعرّضها لمخاطر تنظيمية حقيقية.',
      },
    ],
    whatWeMigrate: [
      'صناديق بريد Exchange Online — البريد والتقويم وجهات الاتصال والمهام',
      'ملفات OneDrive for Business وهياكل المجلدات',
      'مواقع SharePoint ومكتبات المستندات',
      'قنوات Microsoft Teams وملفاته وبنية الفريق',
      'صناديق البريد المشتركة وصناديق الموارد',
      'القوائم البريدية ومجموعات الأمان المفعّلة للبريد',
      'حسابات المستخدمين وتزويدها في Azure AD / Entra ID',
      'سياسات الاحتفاظ بالبيانات وإعدادات الامتثال',
      'سجلات MX، والتحقق من النطاق، وتهيئة DNS',
    ],
    features: [
      {
        icon: 'Building2',
        title: 'تغطية كاملة لحزمة Microsoft 365',
        description: 'يتم نقل Exchange وOneDrive وSharePoint وTeams معًا، دون معالجتها كمشاريع منفصلة غير مرتبطة.',
      },
      {
        icon: 'ShieldCheck',
        title: 'خبرة متخصصة في النقل بين المستأجرين',
        description: 'تتطلب عمليات الدمج والاستحواذ وإعادة التسمية التجارية نقل المستأجر بالكامل بالشكل الصحيح — بما يشمل هويات المستخدمين والترخيص وملكية البيانات.',
      },
      {
        icon: 'KeyRound',
        title: 'تزويد Azure AD / Entra ID',
        description: 'يتم تزويد هويات المستخدمين ومجموعات الأمان بشكل صحيح في المستأجر الوجهة، مع الحفاظ على التحكم في الوصول منذ اليوم الأول.',
      },
      {
        icon: 'RefreshCw',
        title: 'دعم التحويل لبيئات Exchange الهجينة',
        description: 'تحصل المؤسسات التي تعمل ببيئات Exchange الهجينة على خطة نقل تحترم قواعد تدفق البريد الحالية ومتطلبات ترتيب الخطوات.',
      },
      {
        icon: 'Database',
        title: 'استمرارية الامتثال والاحتفاظ بالبيانات',
        description: 'يتم توثيق سياسات الاحتفاظ بالبيانات وإعدادات الامتثال وإعادة إنشائها في المستأجر الجديد، دون التخلي عنها.',
      },
      {
        icon: 'Users',
        title: 'إدارة الترخيص والمقاعد',
        description: 'نساعدك في تخطيط توزيع الترخيص خلال فترة الانتقال حتى لا تدفع تكلفة مقاعد مكررة لا حاجة لها خلال فترة التداخل.',
      },
      {
        icon: 'LifeBuoy',
        title: 'دعم فني لمدة 30 يومًا',
        description: 'تواصل مباشر مع فريق النقل لمدة شهر كامل بعد الانطلاق، للإجابة عن الأسئلة الإدارية وتعديل أي أمر يحتاج إلى ذلك.',
      },
    ],
    process: [
      {
        title: 'اكتشاف المستأجر والبيئة',
        description: 'نرسم خريطة كاملة لتهيئة مستأجرك الحالي، وعدد صناديق البريد، وحجم بيانات OneDrive/SharePoint، وأي إعداد هجين لـ Exchange.',
      },
      {
        title: 'النسخ الاحتياطي المسبق وتخطيط الترخيص',
        description: 'يتم أخذ نسخة احتياطية من بيانات المصدر، وبناء خطة لتوزيع الترخيص لإدارة التكاليف والوصول خلال فترة الانتقال.',
      },
      {
        title: 'تزويد المستأجر الوجهة والمستخدمين',
        description: 'يتم تزويد حسابات المستخدمين ومجموعات الأمان والترخيص في Azure AD / Entra ID على المستأجر الوجهة.',
      },
      {
        title: 'نقل صناديق البريد وOneDrive وSharePoint',
        description: 'يتم نقل البريد والملفات ومكتبات المستندات بعملية مزامنة كاملة أولية تليها عمليات تدريجية لالتقاط التغييرات المستمرة.',
      },
      {
        title: 'إعادة تهيئة Teams والمجموعات',
        description: 'يتم إعادة بناء قنوات Teams والقوائم البريدية والمجموعات المفعّلة للبريد على المستأجر الوجهة لمطابقة بنيتك الحالية.',
      },
      {
        title: 'تحويل DNS/MX',
        description: 'يتم إتمام التحقق من النطاق وتحويل توجيه البريد إلى المستأجر الجديد في وقت مجدول ومنخفض التأثير.',
      },
      {
        title: 'التحقق والدعم بعد النقل',
        description: 'نتحقق من اكتمال صندوق البريد والملفات لكل مستخدم، ثم نبقى متاحين لمدة 30 يومًا بعد الانطلاق.',
      },
    ],
    comparison: [
      {
        aspect: 'تعقيد النقل بين المستأجرين',
        withoutUs: 'يُستهان به إلى أن تظهر مشكلات الهوية والترخيص',
        withUs: 'يُخطَّط له كمشروع مستقل بخبرة متخصصة',
      },
      {
        aspect: 'استمرارية OneDrive وSharePoint',
        withoutUs: 'ملفات معلّقة أو ملكية مكسورة بعد الانتقال',
        withUs: 'تُرحَّل مع البريد مع الحفاظ على البنية',
      },
      {
        aspect: 'نقل سياسات الامتثال',
        withoutUs: 'إعدادات الاحتفاظ بالبيانات والحجز القانوني غالبًا ما تُنسى',
        withUs: 'موثّقة ومُعاد إنشاؤها في المستأجر الوجهة',
      },
      {
        aspect: 'إدارة الترخيص',
        withoutUs: 'دفع تكلفة مقاعد مكررة خلال فترة تداخل غير منظمة',
        withUs: 'خطة ترخيص واضحة طوال فترة الانتقال',
      },
      {
        aspect: 'توقف الموظفين',
        withoutUs: 'مشكلات وصول مطوّلة أثناء نقل الهوية',
        withUs: 'تحويل مرتّب يقلل التعطيل لكل مستخدم',
      },
    ],
    testimonials: [
      {
        quote: 'دمجنا مستأجرين بعد عملية استحواذ، وحافظنا على كل صندوق بريد وكل موقع SharePoint وكل قناة Teams كان موظفونا يستخدمونها فعليًا.',
        name: 'مدير تقنية المعلومات',
        role: 'مجموعة صناعية',
      },
      {
        quote: 'كان إعداد Exchange الهجين لدينا مصدر توتر لي قبل البدء، لكن تدفق البريد لم ينقطع ولو لمرة واحدة طوال النقل.',
        name: 'مسؤول أنظمة',
        role: 'شركة خدمات مالية',
      },
      {
        quote: 'خططوا لترخيصنا حتى لا نضطر لدفع تكلفة مزدوجة للمقاعد خلال فترة الانتقال. هذا وحده غطّى جزءًا كبيرًا من تكلفة المشروع.',
        name: 'مدير مالي',
        role: 'شركة خدمات مهنية',
      },
      {
        quote: 'كانت مواقع SharePoint لدينا تحمل سنوات من تشابك الصلاحيات التي لم يرغب أحد في التعامل معها. قاموا بفك هذا التشابك أثناء النقل بدلاً من نقل الفوضى كما هي.',
        name: 'مدير تقنية معلومات',
        role: 'وكالة تأمين',
      },
      {
        quote: 'كان لدينا حجز قانوني نشط على عدة صناديق بريد وكنت متأكدًا من أن شيئًا ما سيُفقد. انتقل كل شيء سليمًا وموثقًا بالكامل.',
        name: 'مسؤول الامتثال',
        role: 'شركة خدمات مالية',
      },
    ],
    faqs: [
      {
        question: 'هل تتعاملون مع نقل Microsoft 365 بين المستأجرين لعمليات الدمج أو الاستحواذ؟',
        answer: 'نعم، هذا أحد تخصصاتنا الأساسية في مجال نقل Microsoft 365. يتضمن ذلك تخطيطًا منفصلاً حول هوية المستخدم والترخيص وملكية البيانات، وهو أمر لا يتطلبه نقل صندوق بريد عادي.',
      },
      {
        question: 'هل يمكنكم نقل OneDrive وSharePoint إلى جانب صناديق البريد؟',
        answer: 'نعم. تُعد ملفات OneDrive ومكتبات مستندات SharePoint جزءًا أساسيًا من هذه الخدمة، مع الحفاظ على بنية المجلدات والصلاحيات.',
      },
      {
        question: 'ماذا عن سجل محادثات Microsoft Teams؟',
        answer: 'يتم نقل قنوات Teams وملفاته وبنية الفريق كجزء من المشروع. سنحدد النطاق الدقيق لنقل سجل المحادثات الخاص بإعداد مستأجرك خلال التقييم، لأن ذلك يعتمد على ترخيص وتهيئة Microsoft الحالية لديك.',
      },
      {
        question: 'هل تدعمون بيئات Exchange الهجينة؟',
        answer: 'نعم. تتطلب الإعدادات الهجينة التي يتوزع فيها تدفق البريد بين الخوادم المحلية وExchange Online ترتيبًا دقيقًا للخطوات، وهو ما صُممت عمليتنا للتعامل معه.',
      },
      {
        question: 'كيف تتم إدارة الترخيص خلال فترة الانتقال؟',
        answer: 'نساعدك في تخطيط توزيع الترخيص طوال نافذة النقل حتى تفهم بالضبط ما تحتاجه وتتجنب دفع تكلفة مقاعد مكررة لا حاجة لها.',
      },
      {
        question: 'هل يمكنكم النقل من Google Workspace إلى Microsoft 365؟',
        answer: 'نعم. يقع النقل من Google Workspace أو Zoho أو أي مزود يعتمد على IMAP إلى Microsoft 365 ضمن نطاق هذه الخدمة بالكامل.',
      },
    ],
    ctaHeadline: 'هل أنت مستعد للانتقال إلى Microsoft 365 دون مخاطر نقل المستأجرين؟',
    ctaSubtext: 'احصل على تقييم مجاني يغطي صناديق بريدك وOneDrive وSharePoint وخطة الترخيص.',
  },
};
