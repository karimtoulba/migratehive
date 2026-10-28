import { ServiceContent } from './types';

export const zohoMigration: ServiceContent = {
  slug: 'zoho-migration',
  icon: 'Layers',
  parentSlug: 'cloud-email-migration',
  pricing: { amount: 99, perEmail: 10 },
  relatedSlugs: ['google-workspace-migration', 'microsoft-365-migration', 'imap-email-migration', 'cloud-email-migration'],
  en: {
    name: 'Zoho Migration',
    shortName: 'Zoho',
    tagline: 'Zoho Mail migrations into or out of Zoho\'s business suite, with contacts, calendars, and integration continuity preserved.',
    seoTitle: 'Zoho Mail Migration Services – Seamless Switch',
    seoDescription: 'Zoho Mail migration services — move into or out of Zoho with full mailbox, contact, and calendar continuity, plus CRM and Desk integration handled correctly.',
    eyebrow: 'ZOHO MIGRATION',
    headline: 'Move to (or from) Zoho',
    headlineAccent: 'without disconnecting your workflow.',
    subheadline: 'Mailboxes, contacts, calendars, and the integrations tying Zoho Mail to your CRM, Desk, and Books — migrated together, correctly connected.',
    heroStats: [
      { value: '500+', label: 'Mailboxes Migrated' },
      { value: '0', label: 'Messages Lost' },
      { value: '30-Day', label: 'Support Included' },
    ],
    painPoints: [
      {
        title: 'You\'re consolidating tools and want the cost savings of Zoho',
        description: 'Moving to Zoho Mail often comes with a move to Zoho\'s wider business suite — but the migration itself still needs to be handled with the same rigor as any other platform.',
      },
      {
        title: 'Zoho expertise is harder to find than Google or Microsoft help',
        description: 'Zoho powers a large and growing number of businesses, but fewer IT teams and freelancers have hands-on migration experience with it compared to the bigger platforms.',
      },
      {
        title: 'You\'re worried about losing data tied to Zoho\'s wider suite',
        description: 'If your email is connected to Zoho CRM, Desk, or Books, a careless migration can quietly break those integrations along with your inbox.',
      },
      {
        title: 'Domain verification and DNS setup feels unfamiliar',
        description: "Zoho's domain verification and MX record process has its own specific steps — get one wrong and mail delivery to your new mailboxes stalls.",
      },
      {
        title: 'You need this done without breaking the budget',
        description: 'Many teams choose Zoho specifically for cost efficiency — the migration itself shouldn\'t undercut those savings with an expensive, drawn-out project.',
      },
      {
        title: 'You might be migrating away from Zoho, not to it',
        description: 'Outgrowing Zoho or consolidating onto a different platform requires the same careful data extraction and continuity planning in reverse.',
      },
    ],
    whatWeMigrate: [
      'Zoho Mail messages and folder structures',
      'Contacts, including those linked to Zoho CRM records',
      'Calendar events and scheduled meetings',
      'Shared mailboxes and organization-wide groups',
      'Email aliases and domain aliases',
      'MX records and Zoho domain verification setup',
      'Integration continuity with Zoho CRM, Desk, and Books',
      'Integration continuity with connected third-party tools',
    ],
    features: [
      {
        icon: 'Layers',
        title: 'Full Zoho Suite Awareness',
        description: 'We map dependencies with Zoho CRM, Desk, and Books before migrating, so your connected workflows keep functioning after the move.',
      },
      {
        icon: 'Zap',
        title: 'Cost-Efficient Migration Path',
        description: 'Built for teams consolidating tools to save money — the migration itself is scoped and priced to match that goal.',
      },
      {
        icon: 'RefreshCw',
        title: 'Two-Way Platform Expertise',
        description: 'We handle migrations into Zoho from Google Workspace, Microsoft 365, or IMAP — and migrations out of Zoho with the same care.',
      },
      {
        icon: 'KeyRound',
        title: 'Domain Verification & Alias Setup',
        description: 'Zoho\'s domain verification and MX configuration is handled correctly the first time, avoiding delivery delays for your new mailboxes.',
      },
      {
        icon: 'Database',
        title: 'Zero Data Loss Sync',
        description: 'Mail, contacts, and calendar data are checksummed against the source before cutover to confirm nothing is missing.',
      },
      {
        icon: 'Users',
        title: 'Bulk Mailbox Provisioning',
        description: 'Whether migrating a handful of mailboxes or a full organization, every user is set up and migrated as one coordinated project.',
      },
      {
        icon: 'LifeBuoy',
        title: '30-Day Support',
        description: 'We remain available for 30 days after cutover to handle any questions from your team or admin.',
      },
    ],
    process: [
      {
        title: 'Discovery & Zoho Environment Mapping',
        description: 'We identify every mailbox, group, and connected Zoho or third-party tool that depends on your email environment.',
      },
      {
        title: 'Pre-Migration Backup',
        description: 'A full backup of source mail data is taken before any provisioning or migration begins.',
      },
      {
        title: 'Mailbox Provisioning & Domain Verification',
        description: 'Zoho Mail accounts are provisioned and your domain is verified through Zoho\'s required ownership steps.',
      },
      {
        title: 'Mail, Contact & Calendar Sync',
        description: 'Data is migrated with an initial full sync followed by incremental passes to capture new mail up to the moment of cutover.',
      },
      {
        title: 'MX/DNS Cutover',
        description: 'MX records are switched to route mail through Zoho at a scheduled, low-impact time.',
      },
      {
        title: 'Integration Validation',
        description: 'Connections to Zoho CRM, Desk, Books, or third-party tools are tested to confirm they still function correctly post-migration.',
      },
      {
        title: 'Post-Migration Support',
        description: 'We stay available for 30 days to resolve any access, sync, or integration questions your team runs into.',
      },
    ],
    comparison: [
      {
        aspect: 'Platform-specific expertise',
        withoutUs: "Generic migration guidance that misses Zoho's quirks",
        withUs: "Dedicated Zoho experience across mail and its suite",
      },
      {
        aspect: 'Integration continuity',
        withoutUs: 'CRM, Desk, and Books connections can break silently',
        withUs: 'Validated as part of the migration process',
      },
      {
        aspect: 'Cost of the move',
        withoutUs: 'Drawn-out project undercuts the savings of switching',
        withUs: 'Scoped efficiently to match a cost-conscious move',
      },
      {
        aspect: 'Deliverability setup',
        withoutUs: 'Incorrect domain verification delays mail flow',
        withUs: 'Zoho\'s verification steps handled correctly upfront',
      },
    ],
    testimonials: [
      {
        quote: 'We moved our whole team to Zoho Mail to cut costs, and our CRM sync kept working without us touching a single setting.',
        name: 'Operations Manager',
        role: 'Small Business Services Company',
      },
      {
        quote: 'Every other migration company we called had never actually worked with Zoho before. These folks clearly had.',
        name: 'Founder',
        role: 'Consulting Practice',
      },
      {
        quote: 'Domain verification was the part I dreaded most based on what I\'d read online. It was handled without a single hiccup.',
        name: 'Administrator',
        role: 'Regional Retail Chain',
      },
      {
        quote: 'We switched to Zoho specifically to cut costs, and the migration itself was priced in a way that actually respected that goal.',
        name: 'Managing Partner',
        role: 'Accounting Practice',
      },
      {
        quote: 'Our Zoho Desk tickets stayed linked to the right contacts after the move. That was the one thing I was sure would break.',
        name: 'Customer Support Lead',
        role: 'SaaS Startup',
      },
    ],
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
      {
        question: 'Is Zoho Mail suitable for our business size?',
        answer: "Zoho Mail scales from small teams to larger organizations. If you're unsure whether it's the right fit for your specific needs, we're happy to talk through your requirements during your free assessment.",
      },
    ],
    ctaHeadline: 'Ready to move to Zoho without disrupting your workflow?',
    ctaSubtext: 'Get a free assessment covering your mailboxes, integrations, and full migration timeline.',
  },
  ar: {
    name: 'نقل Zoho',
    shortName: 'Zoho',
    tagline: 'نقل البريد الإلكتروني عبر Zoho Mail، دخولًا إلى حزمة أعمال Zoho أو خروجًا منها، مع الحفاظ على جهات الاتصال والتقويمات واستمرارية التكامل.',
    seoTitle: 'خدمات نقل Zoho Mail – تبديل سلس بدون تعقيد',
    seoDescription: 'خدمات نقل Zoho Mail — انتقل إلى Zoho أو منه مع استمرارية كاملة لصناديق البريد وجهات الاتصال والتقويم، إلى جانب التعامل الصحيح مع تكامل CRM وDesk.',
    eyebrow: 'نقل ZOHO',
    headline: 'انتقل إلى Zoho (أو منه)',
    headlineAccent: 'دون قطع سير عملك.',
    subheadline: 'صناديق البريد وجهات الاتصال والتقويمات، وكذلك عمليات التكامل التي تربط Zoho Mail بأنظمة CRM وDesk وBooks الخاصة بك — تُرحَّل معًا وتُربط بشكل صحيح.',
    heroStats: [
      { value: '+500', label: 'صندوق بريد تم نقله' },
      { value: '0', label: 'رسالة مفقودة' },
      { value: '30 يومًا', label: 'دعم فني متضمن' },
    ],
    painPoints: [
      {
        title: 'تسعى لتوحيد أدواتك والاستفادة من وفورات تكلفة Zoho',
        description: 'غالبًا ما يأتي الانتقال إلى Zoho Mail مصحوبًا بانتقال إلى حزمة أعمال Zoho الأوسع — لكن النقل نفسه لا يزال يحتاج إلى نفس الدقة التي تُطبَّق مع أي منصة أخرى.',
      },
      {
        title: 'الخبرة في Zoho أصعب إيجادًا من المساعدة المتعلقة بـ Google أو Microsoft',
        description: 'تُشغّل Zoho عددًا كبيرًا ومتناميًا من الشركات، لكن عدد فرق تقنية المعلومات والمستقلين الذين يمتلكون خبرة عملية في النقل إليها أقل مقارنة بالمنصات الأكبر.',
      },
      {
        title: 'تخشى فقدان البيانات المرتبطة بحزمة Zoho الأوسع',
        description: 'إذا كان بريدك الإلكتروني مرتبطًا بـ Zoho CRM أو Desk أو Books، فإن نقلًا غير دقيق قد يُعطّل هذه التكاملات بصمت إلى جانب صندوق بريدك.',
      },
      {
        title: 'التحقق من النطاق وإعداد DNS يبدوان غير مألوفين',
        description: 'تتبع عملية التحقق من النطاق وسجلات MX في Zoho خطوات محددة خاصة بها — وأي خطأ فيها يوقف تسليم البريد إلى صناديقك الجديدة.',
      },
      {
        title: 'تحتاج إلى إنجاز هذا دون تجاوز الموازنة',
        description: 'تختار الكثير من الفرق Zoho خصيصًا لكفاءته من حيث التكلفة — ولا ينبغي أن يُقوّض النقل نفسه هذه الوفورات بمشروع مكلف وطويل الأمد.',
      },
      {
        title: 'قد تكون في طريقك للخروج من Zoho، وليس إليه',
        description: 'يتطلب تجاوز حدود Zoho أو التوحيد على منصة مختلفة نفس الدقة في استخراج البيانات والتخطيط لاستمراريتها، لكن في الاتجاه المعكوس.',
      },
    ],
    whatWeMigrate: [
      'رسائل Zoho Mail وهياكل المجلدات',
      'جهات الاتصال، بما فيها المرتبطة بسجلات Zoho CRM',
      'فعاليات التقويم والاجتماعات المجدولة',
      'صناديق البريد المشتركة والمجموعات على مستوى المؤسسة',
      'الأسماء البديلة للبريد الإلكتروني والنطاق',
      'سجلات MX وإعداد التحقق من نطاق Zoho',
      'استمرارية التكامل مع Zoho CRM وDesk وBooks',
      'استمرارية التكامل مع الأدوات الخارجية المرتبطة',
    ],
    features: [
      {
        icon: 'Layers',
        title: 'إدراك كامل لحزمة Zoho',
        description: 'نحدد الارتباطات مع Zoho CRM وDesk وBooks قبل النقل، حتى تستمر سير عملك المتصلة في العمل بعد الانتقال.',
      },
      {
        icon: 'Zap',
        title: 'مسار نقل فعّال من حيث التكلفة',
        description: 'مصمم للفرق التي توحّد أدواتها لتوفير المال — يُحدَّد نطاق النقل نفسه وتسعيره بما يتوافق مع هذا الهدف.',
      },
      {
        icon: 'RefreshCw',
        title: 'خبرة ثنائية الاتجاه بين المنصات',
        description: 'نتولى النقل إلى Zoho من Google Workspace أو Microsoft 365 أو IMAP — وكذلك النقل من Zoho بنفس العناية.',
      },
      {
        icon: 'KeyRound',
        title: 'التحقق من النطاق وإعداد الأسماء البديلة',
        description: 'يتم التعامل مع التحقق من النطاق وتهيئة سجلات MX في Zoho بشكل صحيح من المرة الأولى، لتجنب تأخير تسليم البريد لصناديقك الجديدة.',
      },
      {
        icon: 'Database',
        title: 'مزامنة بلا فقدان للبيانات',
        description: 'يتم التحقق من بيانات البريد وجهات الاتصال والتقويم مقابل المصدر قبل التحويل للتأكد من عدم فقدان أي شيء.',
      },
      {
        icon: 'Users',
        title: 'تجهيز جماعي لصناديق البريد',
        description: 'سواء كنت تُنقل عددًا قليلًا من صناديق البريد أو مؤسسة كاملة، يتم تجهيز ونقل كل مستخدم ضمن مشروع واحد منسق.',
      },
      {
        icon: 'LifeBuoy',
        title: 'دعم فني لمدة 30 يومًا',
        description: 'نبقى متاحين لمدة 30 يومًا بعد التحويل للرد على أي أسئلة من فريقك أو المسؤول الإداري.',
      },
    ],
    process: [
      {
        title: 'الاكتشاف وتحديد بيئة Zoho',
        description: 'نحدد كل صندوق بريد ومجموعة وأداة متصلة من Zoho أو من جهات خارجية تعتمد على بيئة بريدك الإلكتروني.',
      },
      {
        title: 'النسخ الاحتياطي قبل النقل',
        description: 'يتم أخذ نسخة احتياطية كاملة من بيانات البريد المصدر قبل بدء أي تجهيز أو نقل.',
      },
      {
        title: 'تجهيز صناديق البريد والتحقق من النطاق',
        description: 'يتم تجهيز حسابات Zoho Mail والتحقق من ملكية نطاقك عبر الخطوات التي تتطلبها Zoho.',
      },
      {
        title: 'مزامنة البريد وجهات الاتصال والتقويم',
        description: 'يتم نقل البيانات بمزامنة كاملة أولية تليها عمليات مزامنة تدريجية لالتقاط البريد الجديد حتى لحظة التحويل.',
      },
      {
        title: 'تحويل MX/DNS',
        description: 'يتم تبديل سجلات MX لتوجيه البريد عبر Zoho في وقت مجدول ومنخفض التأثير.',
      },
      {
        title: 'التحقق من التكامل',
        description: 'يتم اختبار الاتصالات مع Zoho CRM وDesk وBooks أو الأدوات الخارجية للتأكد من استمرار عملها بشكل صحيح بعد النقل.',
      },
      {
        title: 'الدعم بعد النقل',
        description: 'نبقى متاحين لمدة 30 يومًا لحل أي مشكلات تتعلق بالوصول أو المزامنة أو التكامل يواجهها فريقك.',
      },
    ],
    comparison: [
      {
        aspect: 'الخبرة الخاصة بالمنصة',
        withoutUs: 'إرشادات نقل عامة تتجاهل خصوصيات Zoho',
        withUs: 'خبرة متخصصة في Zoho عبر البريد وحزمته الكاملة',
      },
      {
        aspect: 'استمرارية التكامل',
        withoutUs: 'قد تنقطع اتصالات CRM وDesk وBooks بصمت',
        withUs: 'يتم التحقق منها كجزء من عملية النقل',
      },
      {
        aspect: 'تكلفة الانتقال',
        withoutUs: 'مشروع طويل الأمد يُقوّض وفورات التبديل',
        withUs: 'يُحدَّد نطاقه بكفاءة ليتناسب مع انتقال يراعي التكلفة',
      },
      {
        aspect: 'إعداد تسليم البريد',
        withoutUs: 'تحقق غير صحيح من النطاق يؤخر تدفق البريد',
        withUs: 'يتم التعامل بشكل صحيح مع خطوات التحقق في Zoho منذ البداية',
      },
    ],
    testimonials: [
      {
        quote: 'نقلنا فريقنا بالكامل إلى Zoho Mail لتقليل التكاليف، واستمرت مزامنة CRM في العمل دون أن نلمس إعدادًا واحدًا.',
        name: 'مدير العمليات',
        role: 'شركة خدمات صغيرة',
      },
      {
        quote: 'كل شركات النقل الأخرى التي اتصلنا بها لم تعمل فعليًا مع Zoho من قبل. وكان واضحًا أن هذا الفريق قد فعل.',
        name: 'المؤسس',
        role: 'شركة استشارات',
      },
      {
        quote: 'كان التحقق من النطاق هو الجزء الذي قلقت منه أكثر بناءً على ما قرأته على الإنترنت. وقد تم التعامل معه دون أي عقبة واحدة.',
        name: 'المسؤول الإداري',
        role: 'سلسلة متاجر تجزئة إقليمية',
      },
      {
        quote: 'انتقلنا إلى Zoho خصيصًا لخفض التكاليف، وكان تسعير النقل نفسه متوافقًا بالفعل مع هذا الهدف.',
        name: 'الشريك الإداري',
        role: 'مكتب محاسبة',
      },
      {
        quote: 'ظلت تذاكر Zoho Desk مرتبطة بجهات الاتصال الصحيحة بعد الانتقال. كان هذا هو الأمر الوحيد الذي كنت متأكدًا من أنه سيتعطل.',
        name: 'رئيس دعم العملاء',
        role: 'شركة ناشئة في مجال SaaS',
      },
    ],
    faqs: [
      {
        question: 'هل يمكنكم النقل إلى Zoho Mail من Google Workspace أو Microsoft 365؟',
        answer: 'نعم. النقل إلى Zoho Mail من أي منصة رئيسية، بما في ذلك Google Workspace وMicrosoft 365 أو أي خادم IMAP قياسي، مدعوم بالكامل.',
      },
      {
        question: 'هل تدعمون النقل من Zoho إلى منصة أخرى؟',
        answer: 'نعم. نتولى عمليات النقل من Zoho بنفس الدقة في استخراج البيانات والتخطيط للاستمرارية التي نطبّقها على النقل إليه.',
      },
      {
        question: 'ماذا يحدث لتكاملات Zoho CRM أو Desk أو Books خلال الانتقال؟',
        answer: 'نحدد هذه التكاملات خلال مرحلة الاكتشاف ونتحقق من استمرار عملها بشكل صحيح بعد اكتمال نقل البريد.',
      },
      {
        question: 'كيف تعمل عملية التحقق من النطاق في Zoho؟',
        answer: 'تتطلب Zoho إثبات ملكية النطاق من خلال سجل DNS من نوع TXT أو طريقة مماثلة قبل إمكانية توجيه البريد إلى صناديق البريد الجديدة. نتولى هذه العملية كجزء معتاد من النقل.',
      },
      {
        question: 'هل يناسب Zoho Mail حجم أعمالنا؟',
        answer: 'يتوسع Zoho Mail من الفرق الصغيرة إلى المؤسسات الكبيرة. إذا كنت غير متأكد من ملاءمته لاحتياجاتك المحددة، يسعدنا مناقشة متطلباتك خلال تقييمك المجاني.',
      },
    ],
    ctaHeadline: 'هل أنت مستعد للانتقال إلى Zoho دون تعطيل سير عملك؟',
    ctaSubtext: 'احصل على تقييم مجاني يشمل صناديق بريدك وتكاملاتك والجدول الزمني الكامل للنقل.',
  },
};
