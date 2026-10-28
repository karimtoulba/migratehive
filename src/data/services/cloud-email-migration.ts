import { ServiceContent } from './types';

export const cloudEmailMigration: ServiceContent = {
  slug: 'cloud-email-migration',
  icon: 'Mail',
  pricing: { amount: 99 },
  relatedSlugs: ['google-workspace-migration', 'microsoft-365-migration', 'zoho-migration', 'imap-email-migration'],
  en: {
    name: 'Cloud Email Migration',
    shortName: 'Cloud Email',
    navLabel: 'Email Migration',
    tagline: 'Google Workspace, Microsoft 365, Zoho, and IMAP email migrations with mailbox integrity and zero message loss.',
    seoTitle: 'Cloud Email Migration Services – Zero Data Loss',
    seoDescription: 'Professional cloud email migration services for Google Workspace, Microsoft 365, Zoho Mail, and any IMAP provider — zero message loss, full mailbox and calendar continuity.',
    eyebrow: 'CLOUD EMAIL MIGRATION',
    headline: 'Move your business email',
    headlineAccent: 'without losing a single message.',
    subheadline: 'Every mailbox, contact, calendar event, and shared inbox — synced to your new platform with zero downtime for the people who depend on it every day.',
    heroStats: [
      { value: '500+', label: 'Mailboxes Migrated' },
      { value: '0', label: 'Messages Lost' },
      { value: '30-Day', label: 'Support Included' },
    ],
    painPoints: [
      {
        title: 'Email is the one system your whole company can\'t function without',
        description: 'Unlike a website, email downtime affects every single employee, every client conversation, and every calendar invite — all at once. There is no low-traffic window for email.',
      },
      {
        title: 'You\'re worried about losing years of message history',
        description: 'Contracts, approvals, and conversations buried in old emails often carry real business and legal weight. Losing that history during a migration is not an option.',
      },
      {
        title: 'Multiple mailboxes need to move together, on schedule',
        description: 'A team-wide email migration means dozens or hundreds of mailboxes moving in a coordinated window — one person\'s mailbox falling behind creates confusion for everyone.',
      },
      {
        title: 'Shared mailboxes, groups, and calendars complicate the move',
        description: 'Distribution lists, shared inboxes, and resource calendars (like meeting rooms) all have dependencies that a simple one-to-one mailbox migration doesn\'t account for.',
      },
      {
        title: 'DNS and MX record changes are unforgiving',
        description: 'Get an MX record wrong for even a few minutes and incoming mail can bounce back to senders — a mistake customers and partners will notice immediately.',
      },
      {
        title: 'Your team can\'t afford downtime or a confusing transition',
        description: 'Employees need to keep working through the move. A migration that requires everyone to stop and manually reconfigure their email client is a migration that will cause chaos.',
      },
    ],
    whatWeMigrate: [
      'All mailboxes and folder structures, fully intact',
      'Emails with metadata preserved — read/unread status, flags, and timestamps',
      'Contacts and address books',
      'Calendars, events, and meeting invitations',
      'Shared mailboxes, resource calendars, and distribution lists',
      'Email signatures, filters, and forwarding rules',
      'Spam, junk, and archive folders',
      'MX, SPF, DKIM, and DMARC records for the new platform',
      'Domain verification and ownership records',
    ],
    features: [
      {
        icon: 'Mail',
        title: 'Zero Message Loss',
        description: 'Every mailbox is synced and checksummed against the source before cutover, so nothing — not one email — goes missing in the move.',
      },
      {
        icon: 'RefreshCw',
        title: 'Deduplication & Folder Mapping',
        description: 'Folder structures are mapped precisely to your destination platform\'s conventions, with automatic deduplication so nothing arrives twice.',
      },
      {
        icon: 'Network',
        title: 'MX/DNS Cutover Precision',
        description: 'DNS and mail-routing records are staged in advance and switched at the exact moment your new platform is fully synced and verified.',
      },
      {
        icon: 'Lock',
        title: 'Encrypted, Admin-Level Security',
        description: 'Migrations run through secure, scoped admin access rather than individual passwords, with all data encrypted in transit.',
      },
      {
        icon: 'Users',
        title: 'Multi-User Bulk Migration',
        description: 'Whether you have 5 mailboxes or 500, every user is migrated in a single coordinated project, not one at a time.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Calendar & Contacts Included',
        description: 'Meetings, invites, and address books move with your mail, so nobody double-books or loses a contact after the switch.',
      },
      {
        icon: 'LifeBuoy',
        title: '30-Day Support',
        description: 'We stay available to your team for 30 days after go-live to answer questions and resolve anything that comes up.',
      },
    ],
    process: [
      {
        title: 'Discovery & Domain Verification',
        description: 'We confirm your domain ownership on the destination platform and map every mailbox, group, and shared resource that needs to move.',
      },
      {
        title: 'Pre-Migration Backup & Mapping',
        description: 'A full backup of your existing mail environment is taken, and folder structures are mapped to your new platform\'s conventions.',
      },
      {
        title: 'Mailbox Provisioning',
        description: 'User accounts, shared mailboxes, and groups are created and configured on the destination platform ahead of the data transfer.',
      },
      {
        title: 'Data Migration',
        description: 'Mail, contacts, and calendars are synced from source to destination, with an initial full pass followed by incremental syncs to catch new mail.',
      },
      {
        title: 'MX/DNS Cutover',
        description: 'Mail routing is switched to the new platform at a scheduled time, with the final incremental sync running immediately before and after.',
      },
      {
        title: 'Validation & User Handover',
        description: 'We verify mailbox completeness for every user and hand over clear, simple instructions for anything your team needs to do on their end.',
      },
      {
        title: 'Post-Migration Support',
        description: 'We remain available for 30 days to resolve access issues, sync questions, or anything else that comes up as your team settles in.',
      },
    ],
    comparison: [
      {
        aspect: 'Message loss risk',
        withoutUs: 'Manual exports and imports risk silent data loss',
        withUs: 'Checksummed sync verifies every mailbox is complete',
      },
      {
        aspect: 'Admin time required',
        withoutUs: 'Days of IT staff time spent per mailbox',
        withUs: 'Bulk migration handled as one coordinated project',
      },
      {
        aspect: 'Downtime for users',
        withoutUs: 'Staff locked out or confused during the transition',
        withUs: 'Users keep working, with a clean handover afterward',
      },
      {
        aspect: 'Folder & structure integrity',
        withoutUs: 'Folders flattened or duplicated during transfer',
        withUs: 'Structure mapped and deduplicated automatically',
      },
    ],
    testimonials: [
      {
        quote: 'We migrated 60 mailboxes over a single weekend and every employee opened Monday morning to their full inbox, exactly where they left it.',
        name: 'IT Director',
        role: 'Professional Services Firm',
      },
      {
        quote: 'Our shared mailboxes and meeting room calendars were the part I assumed would break. They didn\'t.',
        name: 'Operations Lead',
        role: 'Healthcare Administration Group',
      },
      {
        quote: 'No bounced emails, no missed meetings, no angry calls from clients. That was the whole goal.',
        name: 'Office Manager',
        role: 'Legal Services Firm',
      },
      {
        quote: 'We had three different mail platforms across two acquired companies. They consolidated everything onto one without a single support ticket about missing mail.',
        name: 'Head of IT',
        role: 'Multi-Site Manufacturing Company',
      },
      {
        quote: 'The DNS cutover was the moment I was most nervous about. It happened exactly on schedule and nobody even noticed.',
        name: 'Systems Administrator',
        role: 'Nonprofit Organization',
      },
    ],
    faqs: [
      {
        question: 'Which email platforms do you support?',
        answer: 'We specialize in Google Workspace, Microsoft 365, Zoho Mail, and migrations to or from any standard IMAP mail server — including moving between any two of these platforms.',
      },
      {
        question: 'How long does email migration take per mailbox?',
        answer: 'Most individual mailboxes sync within hours, though total project time depends on mailbox size and count. A typical team-wide migration is planned and completed within a scheduled window of a few days, with the final cutover often happening over a weekend to minimize disruption.',
      },
      {
        question: 'Will employees lose access to email during the move?',
        answer: 'No. Your team continues using their existing mailboxes normally while the sync runs in the background. Access only changes at the scheduled cutover, which is quick and coordinated.',
      },
      {
        question: 'Can you migrate shared mailboxes and distribution lists?',
        answer: 'Yes. Shared mailboxes, resource calendars, and distribution lists are inventoried during discovery and migrated alongside individual user mailboxes.',
      },
      {
        question: 'Is our email content secure during the transfer?',
        answer: 'Yes. Migrations run through secure, scoped administrative access rather than collecting individual user passwords, and all data is encrypted in transit.',
      },
    ],
    ctaHeadline: 'Ready to move your email without the risk?',
    ctaSubtext: 'Tell us which platform you\'re moving to and from. We\'ll map your full migration plan in a free assessment.',
  },
  ar: {
    name: 'نقل البريد الإلكتروني السحابي',
    shortName: 'البريد السحابي',
    navLabel: 'نقل البريد الإلكتروني',
    tagline: 'نقل البريد الإلكتروني إلى Google Workspace وMicrosoft 365 وZoho وIMAP، مع الحفاظ الكامل على سلامة صناديق البريد وصفر فقدان للرسائل.',
    seoTitle: 'خدمات نقل البريد الإلكتروني السحابي – بدون فقدان بيانات',
    seoDescription: 'خدمات احترافية لنقل البريد الإلكتروني السحابي إلى Google Workspace وMicrosoft 365 وZoho Mail وأي مزود يدعم IMAP — بدون فقدان أي رسالة، مع استمرارية كاملة لصناديق البريد والتقويم.',
    eyebrow: 'نقل البريد الإلكتروني السحابي',
    headline: 'انقل بريدك الإلكتروني للأعمال',
    headlineAccent: 'دون أن تفقد رسالة واحدة.',
    subheadline: 'كل صندوق بريد وجهة اتصال وموعد تقويم وبريد مشترك — تتم مزامنته مع منصتك الجديدة دون أي توقف لمن يعتمدون عليه يوميًا.',
    heroStats: [
      { value: '+500', label: 'صندوق بريد تم نقله' },
      { value: '0', label: 'رسالة مفقودة' },
      { value: '30 يومًا', label: 'دعم فني متضمن' },
    ],
    painPoints: [
      {
        title: 'البريد الإلكتروني هو النظام الوحيد الذي لا يمكن لشركتك العمل بدونه',
        description: 'على عكس الموقع الإلكتروني، يؤثر توقف البريد الإلكتروني على كل موظف وكل محادثة مع العميل وكل دعوة اجتماع — في آنٍ واحد. لا توجد نافذة زمنية منخفضة الاستخدام للبريد الإلكتروني.',
      },
      {
        title: 'تخشى فقدان سنوات من سجل الرسائل',
        description: 'غالبًا ما تحمل العقود والموافقات والمحادثات المدفونة في رسائل قديمة قيمة تجارية وقانونية حقيقية. فقدان هذا السجل أثناء النقل ليس خيارًا واردًا.',
      },
      {
        title: 'يجب نقل صناديق بريد متعددة معًا وفق جدول زمني محدد',
        description: 'يعني نقل البريد على مستوى الفريق نقل عشرات أو مئات صناديق البريد ضمن نافذة زمنية منسقة — تأخر صندوق بريد شخص واحد يسبب ارتباكًا للجميع.',
      },
      {
        title: 'صناديق البريد المشتركة والمجموعات والتقويمات تزيد الأمر تعقيدًا',
        description: 'القوائم البريدية وصناديق البريد المشتركة وتقويمات الموارد (مثل قاعات الاجتماعات) لها ارتباطات لا يأخذها بعين الاعتبار نقل بسيط لصندوق بريد واحد.',
      },
      {
        title: 'تغييرات سجلات DNS وMX لا تسامح الأخطاء',
        description: 'خطأ في سجل MX ولو لدقائق معدودة قد يؤدي إلى ارتداد الرسائل الواردة إلى مرسليها — خطأ سيلاحظه العملاء والشركاء فورًا.',
      },
      {
        title: 'لا يمكن لفريقك تحمّل التوقف أو انتقال مربك',
        description: 'يحتاج الموظفون إلى مواصلة العمل أثناء الانتقال. النقل الذي يتطلب من الجميع التوقف وإعادة ضبط بريدهم الإلكتروني يدويًا هو نقل سيسبب فوضى.',
      },
    ],
    whatWeMigrate: [
      'جميع صناديق البريد وهياكل المجلدات، سليمة بالكامل',
      'الرسائل مع الحفاظ على بياناتها الوصفية — حالة القراءة، والعلامات، والطوابع الزمنية',
      'جهات الاتصال ودفاتر العناوين',
      'التقويمات والفعاليات ودعوات الاجتماعات',
      'صناديق البريد المشتركة وتقويمات الموارد والقوائم البريدية',
      'تواقيع البريد الإلكتروني وقواعد التصفية والتحويل',
      'مجلدات البريد العشوائي والمهملات والأرشيف',
      'سجلات MX وSPF وDKIM وDMARC للمنصة الجديدة',
      'سجلات التحقق من النطاق والملكية',
    ],
    features: [
      {
        icon: 'Mail',
        title: 'صفر فقدان للرسائل',
        description: 'تتم مزامنة كل صندوق بريد والتحقق منه مقابل المصدر قبل التحويل، حتى لا تُفقد أي رسالة واحدة أثناء النقل.',
      },
      {
        icon: 'RefreshCw',
        title: 'إزالة التكرار وتخطيط المجلدات',
        description: 'يتم تخطيط هياكل المجلدات بدقة لتتوافق مع تنسيقات المنصة الوجهة، مع إزالة تلقائية للتكرار حتى لا يصل شيء مرتين.',
      },
      {
        icon: 'Network',
        title: 'دقة في تحويل MX/DNS',
        description: 'يتم تجهيز سجلات DNS وتوجيه البريد مسبقًا وتبديلها في اللحظة التي تكتمل فيها مزامنة منصتك الجديدة والتحقق منها بالكامل.',
      },
      {
        icon: 'Lock',
        title: 'أمان مشفّر على مستوى الإدارة',
        description: 'تتم عمليات النقل عبر صلاحيات إدارية محددة النطاق بدلاً من كلمات مرور فردية، مع تشفير جميع البيانات أثناء النقل.',
      },
      {
        icon: 'Users',
        title: 'نقل جماعي متعدد المستخدمين',
        description: 'سواء كان لديك 5 صناديق بريد أو 500، يتم نقل كل مستخدم ضمن مشروع واحد منسق، وليس واحدًا تلو الآخر.',
      },
      {
        icon: 'CalendarCheck',
        title: 'التقويم وجهات الاتصال متضمنة',
        description: 'تنتقل الاجتماعات والدعوات ودفاتر العناوين مع بريدك، حتى لا يحجز أحد موعدين في وقت واحد أو يفقد جهة اتصال بعد التحويل.',
      },
      {
        icon: 'LifeBuoy',
        title: 'دعم فني لمدة 30 يومًا',
        description: 'نبقى متاحين لفريقك لمدة 30 يومًا بعد الانطلاق للإجابة عن الأسئلة وحل أي مشكلة تطرأ.',
      },
    ],
    process: [
      {
        title: 'الاكتشاف والتحقق من النطاق',
        description: 'نتحقق من ملكية نطاقك على المنصة الوجهة ونخطط لكل صندوق بريد ومجموعة ومورد مشترك يحتاج إلى الانتقال.',
      },
      {
        title: 'النسخ الاحتياطي المسبق والتخطيط',
        description: 'يتم أخذ نسخة احتياطية كاملة من بيئة بريدك الحالية، ويتم تخطيط هياكل المجلدات لتتوافق مع تنسيقات منصتك الجديدة.',
      },
      {
        title: 'تجهيز صناديق البريد',
        description: 'يتم إنشاء وتهيئة حسابات المستخدمين وصناديق البريد المشتركة والمجموعات على المنصة الوجهة قبل نقل البيانات.',
      },
      {
        title: 'نقل البيانات',
        description: 'تتم مزامنة البريد وجهات الاتصال والتقويمات من المصدر إلى الوجهة، بعملية كاملة أولية تليها مزامنات تدريجية لالتقاط البريد الجديد.',
      },
      {
        title: 'تحويل MX/DNS',
        description: 'يتم تحويل توجيه البريد إلى المنصة الجديدة في وقت مجدول، مع تشغيل المزامنة التدريجية النهائية مباشرة قبل التحويل وبعده.',
      },
      {
        title: 'التحقق وتسليم المستخدم',
        description: 'نتحقق من اكتمال صندوق البريد لكل مستخدم ونسلّم تعليمات واضحة وبسيطة لأي إجراء يحتاجه فريقك من جانبه.',
      },
      {
        title: 'الدعم بعد النقل',
        description: 'نبقى متاحين لمدة 30 يومًا لحل مشكلات الوصول أو أسئلة المزامنة أو أي أمر آخر يطرأ أثناء استقرار فريقك.',
      },
    ],
    comparison: [
      {
        aspect: 'مخاطر فقدان الرسائل',
        withoutUs: 'التصدير والاستيراد اليدوي يعرّض البيانات لفقدان صامت',
        withUs: 'مزامنة موثقة بالتحقق تضمن اكتمال كل صندوق بريد',
      },
      {
        aspect: 'الوقت الإداري المطلوب',
        withoutUs: 'أيام من وقت موظفي تقنية المعلومات لكل صندوق بريد',
        withUs: 'نقل جماعي يُدار كمشروع واحد منسق',
      },
      {
        aspect: 'توقف المستخدمين',
        withoutUs: 'تعطل الموظفين أو ارتباكهم أثناء الانتقال',
        withUs: 'يواصل المستخدمون العمل، مع تسليم واضح لاحقًا',
      },
      {
        aspect: 'سلامة بنية المجلدات',
        withoutUs: 'تسطيح المجلدات أو تكرارها أثناء النقل',
        withUs: 'تخطيط البنية وإزالة التكرار تلقائيًا',
      },
    ],
    testimonials: [
      {
        quote: 'نقلنا 60 صندوق بريد خلال عطلة نهاية أسبوع واحدة، وفتح كل موظف صباح الاثنين على صندوق بريده الكامل تمامًا كما تركه.',
        name: 'مدير تقنية المعلومات',
        role: 'شركة خدمات مهنية',
      },
      {
        quote: 'صناديق البريد المشتركة وتقويمات قاعات الاجتماعات كانت الجزء الذي توقعت أن يتعطل. لم يحدث ذلك.',
        name: 'مسؤول العمليات',
        role: 'مجموعة إدارة رعاية صحية',
      },
      {
        quote: 'لا رسائل مرتدة، ولا اجتماعات فائتة، ولا مكالمات غاضبة من العملاء. كان هذا هو الهدف بالكامل.',
        name: 'مدير المكتب',
        role: 'شركة خدمات قانونية',
      },
      {
        quote: 'كان لدينا ثلاث منصات بريد مختلفة عبر شركتين مستحوذ عليهما. وحّدوا كل شيء في منصة واحدة دون أي تذكرة دعم واحدة بخصوص بريد مفقود.',
        name: 'رئيس تقنية المعلومات',
        role: 'شركة تصنيع متعددة المواقع',
      },
      {
        quote: 'كانت لحظة تحويل DNS هي ما كنت أكثر توترًا بشأنه. حدثت تمامًا في الموعد المحدد ولم يلاحظها أحد.',
        name: 'مسؤول أنظمة',
        role: 'منظمة غير ربحية',
      },
    ],
    faqs: [
      {
        question: 'ما هي منصات البريد الإلكتروني التي تدعمونها؟',
        answer: 'نحن متخصصون في Google Workspace وMicrosoft 365 وZoho Mail، والنقل من وإلى أي خادم بريد يدعم IMAP — بما في ذلك الانتقال بين أي منصتين من هذه المنصات.',
      },
      {
        question: 'كم من الوقت يستغرق نقل البريد الإلكتروني لكل صندوق بريد؟',
        answer: 'تتم مزامنة معظم صناديق البريد الفردية خلال ساعات، رغم أن الوقت الإجمالي للمشروع يعتمد على حجم وعدد صناديق البريد. يتم عادة التخطيط لنقل على مستوى الفريق وإنجازه ضمن نافذة زمنية مجدولة من بضعة أيام، مع حدوث التحويل النهائي غالبًا خلال عطلة نهاية الأسبوع لتقليل التعطيل.',
      },
      {
        question: 'هل سيفقد الموظفون الوصول إلى بريدهم الإلكتروني أثناء الانتقال؟',
        answer: 'لا. يواصل فريقك استخدام صناديق بريده الحالية بشكل طبيعي أثناء تشغيل المزامنة في الخلفية. يتغير الوصول فقط عند التحويل المجدول، والذي يكون سريعًا ومنسقًا.',
      },
      {
        question: 'هل يمكنكم نقل صناديق البريد المشتركة والقوائم البريدية؟',
        answer: 'نعم. يتم حصر صناديق البريد المشتركة وتقويمات الموارد والقوائم البريدية أثناء مرحلة الاكتشاف ونقلها جنبًا إلى جنب مع صناديق بريد المستخدمين الفرديين.',
      },
      {
        question: 'هل محتوى بريدنا الإلكتروني آمن أثناء النقل؟',
        answer: 'نعم. تتم عمليات النقل عبر صلاحيات إدارية آمنة ومحددة النطاق بدلاً من جمع كلمات مرور المستخدمين الفرديين، وجميع البيانات مشفّرة أثناء النقل.',
      },
    ],
    ctaHeadline: 'هل أنت مستعد لنقل بريدك الإلكتروني دون مخاطرة؟',
    ctaSubtext: 'أخبرنا بالمنصة التي تنتقل منها وإليها. سنضع خطة النقل الكاملة لك ضمن تقييم مجاني.',
  },
};
