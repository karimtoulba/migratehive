import { ServiceContent } from './types';

export const googleWorkspaceMigration: ServiceContent = {
  slug: 'google-workspace-migration',
  icon: 'LayoutGrid',
  parentSlug: 'cloud-email-migration',
  pricing: { amount: 99, perEmail: 15 },
  relatedSlugs: ['microsoft-365-migration', 'zoho-migration', 'imap-email-migration', 'cloud-email-migration'],
  en: {
    name: 'Google Workspace Migration',
    shortName: 'Google Workspace',
    tagline: 'Gmail, Drive, Calendar, and Contacts migrated into or between Google Workspace domains with zero data loss.',
    seoTitle: 'Google Workspace Migration Services – Expert Setup',
    seoDescription: 'Google Workspace migration services — Gmail, Drive, Shared Drives, Calendar, and Contacts moved into or between Workspace domains with full admin console setup.',
    eyebrow: 'GOOGLE WORKSPACE MIGRATION',
    headline: 'Move into Google Workspace',
    headlineAccent: 'with everything intact.',
    subheadline: 'Gmail, Drive, Shared Drives, Calendar, Contacts, and Groups — migrated and configured correctly from the admin console down to the individual mailbox.',
    heroStats: [
      { value: '500+', label: 'Mailboxes Migrated' },
      { value: '0', label: 'Files or Emails Lost' },
      { value: '30-Day', label: 'Support Included' },
    ],
    painPoints: [
      {
        title: 'You\'re not just moving email — you\'re moving an entire suite',
        description: 'Gmail is only part of Google Workspace. Drive files, Shared Drives, Calendar, Contacts, and Groups all need to move together, correctly linked, or your team loses access to critical files.',
      },
      {
        title: 'Domain-to-domain migrations are their own challenge',
        description: 'Mergers, acquisitions, and rebrands often mean moving an entire Workspace domain to another — a fundamentally different and more complex project than a simple platform switch.',
      },
      {
        title: 'You\'re moving away from Exchange, M365, or another provider',
        description: 'Coming from a different platform means mapping unfamiliar data structures into Google\'s format correctly, without losing message threading, folder logic, or calendar recurrence rules.',
      },
      {
        title: 'Organizational units and groups are easy to set up wrong',
        description: 'Google Workspace\'s permission model is powerful but unforgiving — misconfigured OUs and Groups can leave the wrong people with access to the wrong data.',
      },
      {
        title: 'License and seat management gets confusing mid-transition',
        description: 'Figuring out who needs a license when, and avoiding paying for duplicate seats during the overlap period, adds an extra layer of complexity most teams don\'t plan for.',
      },
      {
        title: 'The admin console is unfamiliar territory',
        description: "If your team has never configured Workspace's admin console before, getting security policies, 2-step verification, and routing rules right the first time is genuinely difficult.",
      },
    ],
    whatWeMigrate: [
      'Gmail messages, threads, and labels',
      'Google Contacts and shared address books',
      'Google Calendar — events, invitations, and resource bookings',
      'Google Drive files and folder structures, with ownership correctly reassigned',
      'Shared Drives, including membership and permission levels',
      'Google Groups and mailing lists',
      'Shared mailboxes and delegated inbox access',
      'Organizational Unit (OU) structure and user provisioning',
      'MX records and domain verification (TXT, SPF, DKIM, DMARC)',
    ],
    features: [
      {
        icon: 'LayoutGrid',
        title: 'Full Workspace Suite Migration',
        description: 'Not just Gmail — Drive, Shared Drives, Calendar, Contacts, and Groups are all migrated together as one coordinated project.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Admin Console Configuration',
        description: 'Organizational Units, Groups, and security policies are set up correctly from day one, not left as an afterthought once mail is flowing.',
      },
      {
        icon: 'RefreshCw',
        title: 'Approved Migration Tooling',
        description: "We migrate using Google's own approved migration APIs and enterprise-grade sync methods, not fragile manual exports.",
      },
      {
        icon: 'KeyRound',
        title: 'SPF/DKIM/DMARC Setup',
        description: 'Deliverability-critical DNS records are configured correctly so your outgoing mail doesn\'t land in spam after the switch.',
      },
      {
        icon: 'Users',
        title: 'Bulk User Provisioning',
        description: 'Whether you\'re onboarding 10 people or 500, user accounts, OUs, and licenses are provisioned in bulk, not one at a time.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Calendar Continuity',
        description: 'Recurring meetings, invites, and resource bookings carry over correctly, so no one gets double-booked or drops off a meeting during cutover.',
      },
      {
        icon: 'LifeBuoy',
        title: '30-Day Support',
        description: 'We stay available for a full month after go-live for admin questions, access issues, or anything your team runs into.',
      },
    ],
    process: [
      {
        title: 'Domain & Admin Discovery',
        description: 'We review your current environment, domain setup, and organizational structure to plan the target Workspace configuration.',
      },
      {
        title: 'Pre-Migration Backup',
        description: 'A complete backup of source mailboxes, Drive files, and calendars is taken before any provisioning or migration work begins.',
      },
      {
        title: 'Target Workspace Provisioning',
        description: 'Users, Organizational Units, Groups, and licenses are set up in your destination Workspace domain ahead of the data transfer.',
      },
      {
        title: 'Mail, Drive, Calendar & Contacts Sync',
        description: "Every data type is migrated using Google's approved migration tooling, with an initial full sync followed by incremental catch-up passes.",
      },
      {
        title: 'DNS/MX Verification & Cutover',
        description: 'Domain ownership is verified, MX records are switched, and SPF/DKIM/DMARC are configured for correct mail deliverability.',
      },
      {
        title: 'User Acceptance Testing',
        description: 'A sample of users confirms mail, files, and calendar data are complete and correctly accessible before the full team transitions.',
      },
      {
        title: 'Post-Migration Support & Training',
        description: 'We provide simple guidance for end users and remain available to your admin team for 30 days after go-live.',
      },
    ],
    comparison: [
      {
        aspect: 'Drive & Shared Drive migration',
        withoutUs: 'Often overlooked entirely, leaving files stranded',
        withUs: 'Migrated with ownership and permissions preserved',
      },
      {
        aspect: 'Admin console setup',
        withoutUs: 'Default settings left in place, security gaps possible',
        withUs: 'OUs, Groups, and policies configured deliberately',
      },
      {
        aspect: 'Email deliverability',
        withoutUs: 'Missing SPF/DKIM/DMARC sends mail to spam',
        withUs: 'DNS records configured correctly before cutover',
      },
      {
        aspect: 'Calendar continuity',
        withoutUs: 'Recurring events and invites can be lost or duplicated',
        withUs: 'Verified intact through user acceptance testing',
      },
      {
        aspect: 'User training',
        withoutUs: 'Staff left to figure out the new environment alone',
        withUs: 'Clear handover guidance included for every user',
      },
    ],
    testimonials: [
      {
        quote: 'We merged two Workspace domains after an acquisition and I expected chaos. Every Shared Drive and every calendar came across correctly.',
        name: 'IT Manager',
        role: 'Technology Consulting Firm',
      },
      {
        quote: 'Our email started landing in spam right after we set up Workspace ourselves the first time. They fixed the DNS configuration as part of the migration and it never happened again.',
        name: 'Marketing Director',
        role: 'E-Commerce Retailer',
      },
      {
        quote: 'The org unit and group structure they set up matched exactly how our departments actually work. That level of care was not what I expected.',
        name: 'Operations Manager',
        role: 'Nonprofit Organization',
      },
      {
        quote: 'We moved 200+ mailboxes from Exchange into Workspace and the Shared Drives permissions came across exactly as they were. Nobody lost access to a single file.',
        name: 'Director of IT',
        role: 'Architecture Firm',
      },
      {
        quote: 'Licensing during the overlap period was the thing I was dreading. They mapped it out clearly and we never paid for a duplicate seat.',
        name: 'Finance & Operations Lead',
        role: 'Software Company',
      },
    ],
    faqs: [
      {
        question: 'Can you migrate Google Drive and Shared Drives along with email?',
        answer: 'Yes. Drive files and Shared Drives are a core part of this service, migrated with folder structure, ownership, and sharing permissions preserved.',
      },
      {
        question: 'Do you handle domain-to-domain Workspace migrations, like after an acquisition?',
        answer: "Yes, this is one of our specialties. Domain-to-domain migrations require careful planning around user mapping, licensing, and data ownership, and we handle the full process end to end.",
      },
      {
        question: 'What happens to our Google Groups and shared mailboxes?',
        answer: 'Groups, mailing lists, and shared/delegated mailboxes are inventoried during discovery and recreated on the destination domain with matching membership and permissions.',
      },
      {
        question: 'Will users need to change their login or reconnect apps?',
        answer: "Where possible, we minimize disruption to how users sign in. Any changes that are unavoidable — such as a new domain — are communicated clearly with simple instructions ahead of time.",
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
    ctaHeadline: 'Ready to move onto Google Workspace the right way?',
    ctaSubtext: 'Get a free assessment covering your mail, Drive, and Calendar migration plan — no commitment required.',
  },
  ar: {
    name: 'نقل Google Workspace',
    shortName: 'Google Workspace',
    tagline: 'يتم نقل Gmail وDrive والتقويم وجهات الاتصال إلى أو بين نطاقات Google Workspace دون أي فقدان للبيانات.',
    seoTitle: 'خدمات نقل Google Workspace – إعداد يقوم به خبراء',
    seoDescription: 'خدمات نقل Google Workspace — نقل Gmail وDrive ومحركات الأقراص المشتركة والتقويم وجهات الاتصال إلى أو بين نطاقات Workspace مع إعداد كامل لوحدة تحكم المسؤول.',
    eyebrow: 'نقل Google Workspace',
    headline: 'انتقل إلى Google Workspace',
    headlineAccent: 'مع الحفاظ على كل شيء سليمًا.',
    subheadline: 'يتم نقل Gmail وDrive ومحركات الأقراص المشتركة والتقويم وجهات الاتصال والمجموعات، وتهيئتها بشكل صحيح من لوحة تحكم المسؤول وحتى صندوق البريد الفردي.',
    heroStats: [
      { value: '+500', label: 'صندوق بريد تم نقله' },
      { value: '0', label: 'ملف أو رسالة مفقودة' },
      { value: '30 يومًا', label: 'دعم فني متضمن' },
    ],
    painPoints: [
      {
        title: 'أنت لا تنقل البريد الإلكتروني فقط — بل تنقل مجموعة كاملة من التطبيقات',
        description: 'Gmail هو مجرد جزء واحد من Google Workspace. ملفات Drive ومحركات الأقراص المشتركة والتقويم وجهات الاتصال والمجموعات، كل هذا يحتاج إلى الانتقال معًا ومرتبطًا بشكل صحيح، وإلا فقد فريقك الوصول إلى ملفات أساسية.',
      },
      {
        title: 'النقل من نطاق إلى نطاق له تحدياته الخاصة',
        description: 'عمليات الاندماج والاستحواذ وتغيير العلامة التجارية تعني غالبًا نقل نطاق Workspace كامل إلى نطاق آخر — وهو مشروع مختلف جوهريًا وأكثر تعقيدًا من تبديل منصة بسيط.',
      },
      {
        title: 'أنت تنتقل من Exchange أو M365 أو مزود آخر',
        description: 'القدوم من منصة مختلفة يعني تخطيط هياكل بيانات غير مألوفة ضمن تنسيق Google بشكل صحيح، دون فقدان تسلسل الرسائل أو منطق المجلدات أو قواعد تكرار التقويم.',
      },
      {
        title: 'الوحدات التنظيمية والمجموعات يسهل إعدادها بشكل خاطئ',
        description: 'نموذج الصلاحيات في Google Workspace قوي لكنه لا يسامح الأخطاء — الوحدات التنظيمية والمجموعات المُهيأة بشكل خاطئ قد تترك الأشخاص الخطأ بصلاحية الوصول إلى البيانات الخطأ.',
      },
      {
        title: 'إدارة الترخيص والمقاعد تصبح مربكة في أثناء الانتقال',
        description: 'معرفة من يحتاج إلى ترخيص ومتى، وتجنّب الدفع مقابل مقاعد مكررة خلال فترة التداخل، يضيف طبقة إضافية من التعقيد لا تخطط لها معظم الفرق.',
      },
      {
        title: 'لوحة تحكم المسؤول منطقة غير مألوفة',
        description: 'إذا لم يسبق لفريقك تهيئة لوحة تحكم Workspace من قبل، فإن ضبط سياسات الأمان والتحقق بخطوتين وقواعد التوجيه بشكل صحيح من المرة الأولى أمر صعب بالفعل.',
      },
    ],
    whatWeMigrate: [
      'رسائل Gmail والمحادثات والتصنيفات',
      'جهات اتصال Google ودفاتر العناوين المشتركة',
      'تقويم Google — الفعاليات والدعوات وحجوزات الموارد',
      'ملفات Google Drive وهياكل المجلدات، مع إعادة تعيين الملكية بشكل صحيح',
      'محركات الأقراص المشتركة، بما في ذلك العضوية ومستويات الصلاحيات',
      'مجموعات Google والقوائم البريدية',
      'صناديق البريد المشتركة والوصول المفوّض إلى صناديق البريد',
      'هيكل الوحدات التنظيمية (OU) وتزويد المستخدمين',
      'سجلات MX والتحقق من النطاق (TXT وSPF وDKIM وDMARC)',
    ],
    features: [
      {
        icon: 'LayoutGrid',
        title: 'نقل كامل لمجموعة Workspace',
        description: 'ليس Gmail فقط — بل يتم نقل Drive ومحركات الأقراص المشتركة والتقويم وجهات الاتصال والمجموعات معًا كمشروع واحد منسق.',
      },
      {
        icon: 'ShieldCheck',
        title: 'تهيئة لوحة تحكم المسؤول',
        description: 'يتم إعداد الوحدات التنظيمية والمجموعات وسياسات الأمان بشكل صحيح منذ اليوم الأول، لا أن تُترك كفكرة لاحقة بعد بدء تدفق البريد.',
      },
      {
        icon: 'RefreshCw',
        title: 'أدوات نقل معتمدة',
        description: 'نقوم بالنقل باستخدام واجهات برمجة النقل المعتمدة من Google وأساليب المزامنة بمستوى المؤسسات، وليس عمليات تصدير يدوية هشة.',
      },
      {
        icon: 'KeyRound',
        title: 'إعداد SPF/DKIM/DMARC',
        description: 'يتم تهيئة سجلات DNS الحيوية لقابلية التسليم بشكل صحيح حتى لا تصل رسائلك الصادرة إلى البريد العشوائي بعد التحويل.',
      },
      {
        icon: 'Users',
        title: 'تزويد جماعي للمستخدمين',
        description: 'سواء كنت تُدخل 10 أشخاص أو 500، يتم تزويد حسابات المستخدمين والوحدات التنظيمية والتراخيص دفعة واحدة، وليس واحدًا تلو الآخر.',
      },
      {
        icon: 'CalendarCheck',
        title: 'استمرارية التقويم',
        description: 'تنتقل الاجتماعات المتكررة والدعوات وحجوزات الموارد بشكل صحيح، حتى لا يحجز أحد موعدين في وقت واحد أو يفوّت اجتماعًا أثناء التحويل.',
      },
      {
        icon: 'LifeBuoy',
        title: 'دعم فني لمدة 30 يومًا',
        description: 'نبقى متاحين لشهر كامل بعد الانطلاق للإجابة عن أسئلة الإدارة أو مشكلات الوصول أو أي أمر يواجهه فريقك.',
      },
    ],
    process: [
      {
        title: 'اكتشاف النطاق والإدارة',
        description: 'نراجع بيئتك الحالية وإعداد النطاق والهيكل التنظيمي لتخطيط تهيئة Workspace المستهدفة.',
      },
      {
        title: 'النسخ الاحتياطي المسبق',
        description: 'يتم أخذ نسخة احتياطية كاملة من صناديق البريد المصدر وملفات Drive والتقويمات قبل بدء أي عمل تزويد أو نقل.',
      },
      {
        title: 'تزويد Workspace الهدف',
        description: 'يتم إعداد المستخدمين والوحدات التنظيمية والمجموعات والتراخيص في نطاق Workspace الوجهة قبل نقل البيانات.',
      },
      {
        title: 'مزامنة البريد وDrive والتقويم وجهات الاتصال',
        description: 'يتم نقل كل نوع من البيانات باستخدام أدوات النقل المعتمدة من Google، بعملية مزامنة كاملة أولية تليها عمليات مزامنة تدريجية للمتابعة.',
      },
      {
        title: 'التحقق من DNS/MX والتحويل',
        description: 'يتم التحقق من ملكية النطاق، وتحويل سجلات MX، وتهيئة SPF/DKIM/DMARC لضمان قابلية تسليم صحيحة للبريد.',
      },
      {
        title: 'اختبار قبول المستخدم',
        description: 'تؤكد مجموعة من المستخدمين أن بيانات البريد والملفات والتقويم كاملة ويمكن الوصول إليها بشكل صحيح قبل انتقال الفريق بالكامل.',
      },
      {
        title: 'الدعم والتدريب بعد النقل',
        description: 'نقدم إرشادات بسيطة للمستخدمين النهائيين ونبقى متاحين لفريق الإدارة لديك لمدة 30 يومًا بعد الانطلاق.',
      },
    ],
    comparison: [
      {
        aspect: 'نقل Drive ومحركات الأقراص المشتركة',
        withoutUs: 'غالبًا ما يتم تجاهله بالكامل، مما يترك الملفات معزولة',
        withUs: 'يتم النقل مع الحفاظ على الملكية والصلاحيات',
      },
      {
        aspect: 'إعداد لوحة تحكم المسؤول',
        withoutUs: 'تُترك الإعدادات الافتراضية كما هي، مع احتمال وجود ثغرات أمنية',
        withUs: 'يتم تهيئة الوحدات التنظيمية والمجموعات والسياسات بعناية',
      },
      {
        aspect: 'قابلية تسليم البريد الإلكتروني',
        withoutUs: 'غياب SPF/DKIM/DMARC يرسل البريد إلى الرسائل غير المرغوب فيها',
        withUs: 'يتم تهيئة سجلات DNS بشكل صحيح قبل التحويل',
      },
      {
        aspect: 'استمرارية التقويم',
        withoutUs: 'يمكن أن تُفقد الفعاليات والدعوات المتكررة أو تتكرر',
        withUs: 'يتم التحقق من سلامتها من خلال اختبار قبول المستخدم',
      },
      {
        aspect: 'تدريب المستخدمين',
        withoutUs: 'يُترك الموظفون لاكتشاف البيئة الجديدة بمفردهم',
        withUs: 'إرشادات تسليم واضحة مُدرجة لكل مستخدم',
      },
    ],
    testimonials: [
      {
        quote: 'دمجنا نطاقي Workspace بعد عملية استحواذ، وكنت أتوقع فوضى. كل محرك أقراص مشترك وكل تقويم انتقل بشكل صحيح.',
        name: 'مدير تقنية المعلومات',
        role: 'شركة استشارات تقنية',
      },
      {
        quote: 'بدأت رسائلنا تصل إلى البريد العشوائي بعد أن أعددنا Workspace بأنفسنا في المرة الأولى. أصلحوا تهيئة DNS كجزء من النقل ولم يحدث ذلك مرة أخرى.',
        name: 'مديرة التسويق',
        role: 'متجر تجارة إلكترونية',
      },
      {
        quote: 'هيكل الوحدات التنظيمية والمجموعات الذي أعدوه طابق تمامًا طريقة عمل أقسامنا فعليًا. هذا مستوى من العناية لم أكن أتوقعه.',
        name: 'مدير العمليات',
        role: 'منظمة غير ربحية',
      },
      {
        quote: 'نقلنا أكثر من 200 صندوق بريد من Exchange إلى Workspace، وانتقلت صلاحيات محركات الأقراص المشتركة تمامًا كما كانت. لم يفقد أحد الوصول إلى ملف واحد.',
        name: 'مدير تقنية المعلومات',
        role: 'شركة هندسة معمارية',
      },
      {
        quote: 'كان الترخيص خلال فترة التداخل هو الأمر الذي كنت أخشاه. وضعوا خطة واضحة له ولم ندفع مقابل مقعد مكرر أبدًا.',
        name: 'مسؤولة المالية والعمليات',
        role: 'شركة برمجيات',
      },
    ],
    faqs: [
      {
        question: 'هل يمكنكم نقل Google Drive ومحركات الأقراص المشتركة إلى جانب البريد الإلكتروني؟',
        answer: 'نعم. ملفات Drive ومحركات الأقراص المشتركة جزء أساسي من هذه الخدمة، ويتم نقلها مع الحفاظ على هيكل المجلدات والملكية وصلاحيات المشاركة.',
      },
      {
        question: 'هل تتعاملون مع عمليات نقل Workspace من نطاق إلى نطاق، كما يحدث بعد الاستحواذ؟',
        answer: 'نعم، هذا أحد مجالات تخصصنا. تتطلب عمليات النقل من نطاق إلى نطاق تخطيطًا دقيقًا لربط المستخدمين والترخيص وملكية البيانات، ونحن نتولى العملية الكاملة من البداية إلى النهاية.',
      },
      {
        question: 'ما الذي يحدث لمجموعات Google وصناديق البريد المشتركة لدينا؟',
        answer: 'يتم حصر المجموعات والقوائم البريدية وصناديق البريد المشتركة أو المفوّضة أثناء مرحلة الاكتشاف، وإعادة إنشائها على النطاق الوجهة بعضوية وصلاحيات مطابقة.',
      },
      {
        question: 'هل سيحتاج المستخدمون إلى تغيير تسجيل الدخول أو إعادة ربط التطبيقات؟',
        answer: 'حيثما أمكن، نقلل التأثير على طريقة تسجيل دخول المستخدمين. أي تغييرات لا يمكن تجنبها — مثل نطاق جديد — يتم توضيحها بشكل واضح مع تعليمات بسيطة مسبقًا.',
      },
      {
        question: 'كيف تمنعون مشكلات تسليم البريد الإلكتروني بعد نقل سجلات MX؟',
        answer: 'نقوم بتهيئة سجلات SPF وDKIM وDMARC بشكل صحيح كجزء من النقل، ونتحقق من قابلية التسليم قبل اعتبار التحويل مكتملًا.',
      },
      {
        question: 'هل يمكنكم النقل من Microsoft 365 أو مزود آخر إلى Google Workspace؟',
        answer: 'نعم. النقل من Exchange أو Microsoft 365 أو Zoho أو أي مزود يعتمد على IMAP إلى Google Workspace يقع بالكامل ضمن نطاق خدماتنا.',
      },
    ],
    ctaHeadline: 'هل أنت مستعد للانتقال إلى Google Workspace بالطريقة الصحيحة؟',
    ctaSubtext: 'احصل على تقييم مجاني يغطي خطة نقل بريدك وDrive والتقويم — دون أي التزام مطلوب.',
  },
};
