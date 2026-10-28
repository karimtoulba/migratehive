import { ServiceContent } from './types';

export const imapEmailMigration: ServiceContent = {
  slug: 'imap-email-migration',
  icon: 'Inbox',
  parentSlug: 'cloud-email-migration',
  pricing: { amount: 99, perEmail: 7 },
  relatedSlugs: ['google-workspace-migration', 'microsoft-365-migration', 'zoho-migration', 'cloud-email-migration'],
  en: {
    name: 'IMAP Email Migration',
    shortName: 'IMAP Email',
    tagline: 'Direct server-to-server IMAP migrations for any mail platform — legacy, custom, or unsupported systems included.',
    seoTitle: 'IMAP Email Migration Services – Any Mail Server',
    seoDescription: 'IMAP email migration for legacy, cPanel, on-premise, and custom mail servers — direct server-to-server sync with full history and folder structure preserved.',
    eyebrow: 'IMAP EMAIL MIGRATION',
    headline: 'Move email from any server',
    headlineAccent: 'old, custom, or otherwise.',
    subheadline: 'If it speaks IMAP, we can migrate it — legacy mail servers, cPanel email, and custom systems moved with full history and folder structure intact.',
    heroStats: [
      { value: '500+', label: 'Mailboxes Migrated' },
      { value: 'Any', label: 'IMAP Server Supported' },
      { value: '30-Day', label: 'Support Included' },
    ],
    painPoints: [
      {
        title: 'Your current mail server doesn\'t have a "standard" migration path',
        description: 'Google, Microsoft, and Zoho all have official migration tools between each other. Legacy, on-premise, or smaller regional mail providers usually don\'t — this is exactly where a direct IMAP migration comes in.',
      },
      {
        title: 'There\'s no admin console to lean on',
        description: 'Generic IMAP servers vary wildly in how they\'re configured and managed, so there\'s rarely a one-click tool to rely on — every migration has to be handled directly, mailbox by mailbox.',
      },
      {
        title: 'You have years of email history you can\'t afford to lose',
        description: 'Old client conversations, contracts, and records sitting in folders built up over years need to transfer completely intact, not just the recent messages.',
      },
      {
        title: 'You need to move a whole team at once, not one person at a time',
        description: 'Manually exporting and importing mailboxes one by one doesn\'t scale past a handful of users — a real migration project needs to run all mailboxes in parallel.',
      },
      {
        title: 'Documentation for your mail server may not exist',
        description: 'Older or custom-configured mail servers often outlive whoever originally set them up, leaving no clear record of settings, aliases, or forwarding rules.',
      },
      {
        title: 'You\'re not sure this is even the right kind of migration',
        description: "If you're unsure whether you need a platform-specific migration (like Google Workspace or Microsoft 365) or a direct IMAP migration, it helps to just describe your source server and let us tell you.",
      },
    ],
    whatWeMigrate: [
      'Full mailbox contents — inbox, sent, folders, and subfolders',
      'Read/unread status and message flags, preserved exactly',
      'Attachments and embedded content',
      'Contacts, via CardDAV or export where the source server supports it',
      'Calendars, via CalDAV or export where the source server supports it',
      'Email aliases, catch-all addresses, and forwarding rules',
      'MX and DNS records for the destination mail platform',
    ],
    features: [
      {
        icon: 'Inbox',
        title: 'Universal IMAP Compatibility',
        description: 'Works with virtually any mail server that speaks the IMAP protocol, from decades-old systems to modern hosting-provider email.',
      },
      {
        icon: 'RefreshCw',
        title: 'Direct Server-to-Server Sync',
        description: 'Mail is synced directly between source and destination servers — no manual export, no local downloads, no risk of files getting lost in between.',
      },
      {
        icon: 'History',
        title: 'Full History & Folder Structure Preserved',
        description: 'Every folder, subfolder, and year of message history transfers intact, exactly as organized on the source server.',
      },
      {
        icon: 'ShieldAlert',
        title: 'Works With Legacy & Unsupported Systems',
        description: 'No official migration tool for your mail server is not a blocker — direct IMAP sync works regardless of how old or obscure the source system is.',
      },
      {
        icon: 'Users',
        title: 'Bulk Multi-Mailbox Migration',
        description: 'Entire teams are migrated in parallel as one coordinated project, not mailbox by mailbox.',
      },
      {
        icon: 'Lock',
        title: 'Encrypted Credential Handling',
        description: 'Access credentials are scoped, encrypted, and used only for the duration of the migration project.',
      },
      {
        icon: 'LifeBuoy',
        title: '30-Day Support',
        description: 'We remain available for 30 days after cutover to resolve anything that comes up for you or your team.',
      },
    ],
    process: [
      {
        title: 'Source & Destination Server Discovery',
        description: 'We identify your current mail server\'s configuration and confirm IMAP access details, along with your destination platform requirements.',
      },
      {
        title: 'Access & Credential Setup',
        description: 'Secure, scoped credentials are configured for both source and destination servers, used only for the migration itself.',
      },
      {
        title: 'Pre-Migration Test Sync',
        description: 'A sample mailbox is migrated first and checked for completeness, so any server-specific quirks are caught before the full migration runs.',
      },
      {
        title: 'Full Mailbox Sync',
        description: 'All mailboxes are synced from source to destination, with folder structures and message flags preserved throughout.',
      },
      {
        title: 'Delta Sync & Final Catch-Up',
        description: 'A final incremental sync captures any mail received during the migration window, right up to the moment of cutover.',
      },
      {
        title: 'MX/DNS Cutover',
        description: 'Mail routing is switched to the destination platform at a scheduled, low-impact time.',
      },
      {
        title: 'Post-Migration Verification & Support',
        description: 'Mailbox completeness is verified for every user, followed by 30 days of support for anything that comes up.',
      },
    ],
    comparison: [
      {
        aspect: 'Manual export/import risk',
        withoutUs: 'Files can be dropped, corrupted, or missed entirely',
        withUs: 'Direct server-to-server sync avoids manual handling',
      },
      {
        aspect: 'Folder structure integrity',
        withoutUs: 'Structure often flattened or reorganized incorrectly',
        withUs: 'Preserved exactly as organized on the source server',
      },
      {
        aspect: 'Time for bulk mailboxes',
        withoutUs: 'Mailbox-by-mailbox exports take days for a full team',
        withUs: 'All mailboxes migrated in parallel as one project',
      },
      {
        aspect: 'Legacy server complexity',
        withoutUs: 'Undocumented, unfamiliar systems stall the project',
        withUs: 'Direct IMAP access sidesteps the need for documentation',
      },
    ],
    testimonials: [
      {
        quote: 'Our mail server was running on a system nobody at the company understood anymore. They just connected to it directly and moved every mailbox over.',
        name: 'Operations Director',
        role: 'Manufacturing Business',
      },
      {
        quote: 'Fifteen years of email history came across with every folder exactly where I left it. I genuinely didn\'t expect that.',
        name: 'Managing Partner',
        role: 'Accounting Firm',
      },
      {
        quote: 'We had 40 mailboxes to move off an old hosting provider\'s email. It was done as one project instead of forty individual headaches.',
        name: 'IT Coordinator',
        role: 'Regional Healthcare Group',
      },
      {
        quote: 'Nobody could even tell us who originally configured our mail server. They figured it out and migrated everything without needing that history.',
        name: 'Office Administrator',
        role: 'Independent Law Practice',
      },
      {
        quote: 'We weren\'t sure if we needed a platform migration or a plain IMAP move. They looked at our setup and gave us a straight answer instead of upselling us.',
        name: 'General Manager',
        role: 'Logistics Company',
      },
    ],
    faqs: [
      {
        question: 'What counts as an "IMAP migration" versus a Google Workspace, Microsoft 365, or Zoho migration?',
        answer: 'If your destination is Google Workspace, Microsoft 365, or Zoho Mail specifically, those dedicated services include platform-specific steps like admin console setup and suite-wide data (Drive, Teams, CRM). This IMAP migration service covers any source or destination mail server that communicates over the standard IMAP protocol — including moving between two generic providers, or into a platform where a direct sync is the best approach.',
      },
      {
        question: 'Can you migrate from an old cPanel or on-premise mail server?',
        answer: 'Yes. This is one of the most common scenarios for this service — cPanel-based email, on-premise mail servers, and smaller regional hosting providers are all supported through direct IMAP access.',
      },
      {
        question: 'Do you support POP3 sources too?',
        answer: 'IMAP is strongly preferred because it preserves folder structure and message state, and most modern mail servers support it. If your source system only offers POP3 access, mention this during your assessment and we\'ll confirm the best approach for your specific setup.',
      },
      {
        question: 'Can contacts and calendars be migrated via IMAP as well?',
        answer: 'Contacts and calendars are migrated via CardDAV and CalDAV where the source server supports these protocols. We\'ll confirm exactly what\'s available for your specific mail server during discovery.',
      },
      {
        question: 'How many mailboxes can be migrated at once?',
        answer: 'There\'s no hard limit — we\'ve run projects from a handful of mailboxes to full organization-wide migrations, all handled as one coordinated project.',
      },
      {
        question: 'Is my email password shared with anyone during the move?',
        answer: 'Access credentials are handled securely and scoped specifically to the migration project, used only by the engineers working on it, and never stored longer than necessary.',
      },
    ],
    ctaHeadline: 'Have an email server that doesn\'t fit a standard migration tool?',
    ctaSubtext: 'Tell us about your current mail server. We\'ll confirm the right migration path in a free assessment.',
  },
  ar: {
    name: 'نقل البريد الإلكتروني عبر IMAP',
    shortName: 'بريد IMAP',
    tagline: 'نقل مباشر عبر IMAP من خادم إلى خادم لأي منصة بريد — بما في ذلك الأنظمة القديمة والمخصصة وغير المدعومة رسميًا.',
    seoTitle: 'خدمات نقل البريد عبر IMAP – لأي خادم بريد',
    seoDescription: 'نقل البريد الإلكتروني عبر IMAP لخوادم البريد القديمة وcPanel والخوادم المحلية والمخصصة — مزامنة مباشرة من خادم إلى خادم مع الحفاظ الكامل على السجل وبنية المجلدات.',
    eyebrow: 'نقل البريد الإلكتروني عبر IMAP',
    headline: 'انقل بريدك الإلكتروني من أي خادم',
    headlineAccent: 'قديمًا كان أم مخصصًا أم غير ذلك.',
    subheadline: 'إذا كان يدعم IMAP، فنحن قادرون على نقله — خوادم البريد القديمة، وبريد cPanel، والأنظمة المخصصة، تنتقل جميعها مع الحفاظ الكامل على السجل وبنية المجلدات.',
    heroStats: [
      { value: '+500', label: 'صندوق بريد تم نقله' },
      { value: 'أي خادم', label: 'خادم IMAP مدعوم' },
      { value: '30 يومًا', label: 'دعم فني متضمن' },
    ],
    painPoints: [
      {
        title: 'خادم بريدك الحالي لا يملك مسار نقل "قياسيًا"',
        description: 'تمتلك Google وMicrosoft وZoho أدوات نقل رسمية فيما بينها. أما خوادم البريد القديمة أو المحلية أو مزودو البريد الإقليميون الأصغر فعادة لا يملكون ذلك — وهنا يأتي دور النقل المباشر عبر IMAP.',
      },
      {
        title: 'لا توجد لوحة تحكم إدارية يمكن الاعتماد عليها',
        description: 'تتفاوت خوادم IMAP العامة بشكل كبير في طريقة تهيئتها وإدارتها، لذلك نادرًا ما تتوفر أداة بنقرة واحدة يمكن الاعتماد عليها — فكل عملية نقل يجب التعامل معها مباشرة، صندوق بريد تلو الآخر.',
      },
      {
        title: 'لديك سنوات من سجل البريد الإلكتروني لا يمكنك تحمّل خسارتها',
        description: 'المحادثات القديمة مع العملاء والعقود والسجلات المتراكمة في مجلدات على مدى سنوات يجب أن تنتقل سليمة بالكامل، لا الرسائل الحديثة فقط.',
      },
      {
        title: 'تحتاج إلى نقل فريق كامل دفعة واحدة، لا شخصًا تلو الآخر',
        description: 'تصدير واستيراد صناديق البريد يدويًا واحدًا تلو الآخر لا يصلح لأكثر من عدد قليل من المستخدمين — فمشروع النقل الحقيقي يحتاج إلى تشغيل جميع صناديق البريد بالتوازي.',
      },
      {
        title: 'قد لا يكون هناك أي توثيق لخادم بريدك',
        description: 'غالبًا ما تبقى خوادم البريد القديمة أو المهيأة بشكل مخصص قائمة بعد رحيل من قام بإعدادها أصلًا، دون أي سجل واضح للإعدادات أو الأسماء البديلة أو قواعد التحويل.',
      },
      {
        title: 'لست متأكدًا من أن هذا هو النوع الصحيح من النقل أساسًا',
        description: 'إذا لم تكن متأكدًا من حاجتك إلى نقل خاص بمنصة معينة (مثل Google Workspace أو Microsoft 365) أو إلى نقل مباشر عبر IMAP، يكفي أن تصف لنا خادمك المصدر وسنخبرك بالحل الأنسب.',
      },
    ],
    whatWeMigrate: [
      'محتوى صندوق البريد بالكامل — الوارد، المرسل، المجلدات، والمجلدات الفرعية',
      'حالة القراءة/عدم القراءة وعلامات الرسائل، محفوظة بدقة تامة',
      'المرفقات والمحتوى المضمّن',
      'جهات الاتصال، عبر CardDAV أو التصدير حيثما يدعم الخادم المصدر ذلك',
      'التقويمات، عبر CalDAV أو التصدير حيثما يدعم الخادم المصدر ذلك',
      'الأسماء البديلة للبريد الإلكتروني، وعناوين catch-all، وقواعد التحويل',
      'سجلات MX وDNS لمنصة البريد الوجهة',
    ],
    features: [
      {
        icon: 'Inbox',
        title: 'توافق شامل مع IMAP',
        description: 'يعمل مع أي خادم بريد تقريبًا يدعم بروتوكول IMAP، من الأنظمة التي يعود عمرها لعقود إلى بريد مزودي الاستضافة الحديثة.',
      },
      {
        icon: 'RefreshCw',
        title: 'مزامنة مباشرة من خادم إلى خادم',
        description: 'تتم مزامنة البريد مباشرة بين الخادم المصدر والخادم الوجهة — دون تصدير يدوي، ودون تنزيلات محلية، ودون خطر ضياع الملفات في المنتصف.',
      },
      {
        icon: 'History',
        title: 'الحفاظ الكامل على السجل وبنية المجلدات',
        description: 'ينتقل كل مجلد ومجلد فرعي وكل سنة من سجل الرسائل سليمًا تمامًا، كما هو منظم على الخادم المصدر.',
      },
      {
        icon: 'ShieldAlert',
        title: 'يعمل مع الأنظمة القديمة وغير المدعومة',
        description: 'عدم وجود أداة نقل رسمية لخادم بريدك ليس عائقًا — فالمزامنة المباشرة عبر IMAP تعمل بغض النظر عن قِدَم النظام المصدر أو غرابته.',
      },
      {
        icon: 'Users',
        title: 'نقل جماعي لصناديق بريد متعددة',
        description: 'تُرحَّل الفرق بالكامل بالتوازي كمشروع واحد منسق، لا صندوق بريد تلو الآخر.',
      },
      {
        icon: 'Lock',
        title: 'معالجة مشفّرة لبيانات الاعتماد',
        description: 'بيانات الاعتماد الخاصة بالوصول محددة النطاق ومشفّرة، ولا تُستخدم إلا طوال مدة مشروع النقل.',
      },
      {
        icon: 'LifeBuoy',
        title: 'دعم فني لمدة 30 يومًا',
        description: 'نبقى متاحين لمدة 30 يومًا بعد التحويل لحل أي مشكلة تطرأ لك أو لفريقك.',
      },
    ],
    process: [
      {
        title: 'اكتشاف الخادم المصدر والخادم الوجهة',
        description: 'نحدد تهيئة خادم بريدك الحالي ونؤكد تفاصيل الوصول عبر IMAP، إلى جانب متطلبات منصتك الوجهة.',
      },
      {
        title: 'إعداد الوصول وبيانات الاعتماد',
        description: 'تُهيَّأ بيانات اعتماد آمنة ومحددة النطاق لكل من الخادم المصدر والخادم الوجهة، ولا تُستخدم إلا لعملية النقل نفسها.',
      },
      {
        title: 'مزامنة اختبارية قبل النقل',
        description: 'يتم نقل صندوق بريد نموذجي أولًا والتحقق من اكتماله، لرصد أي خصائص فريدة للخادم قبل تشغيل النقل الكامل.',
      },
      {
        title: 'مزامنة كاملة لصناديق البريد',
        description: 'تتم مزامنة جميع صناديق البريد من المصدر إلى الوجهة، مع الحفاظ على بنية المجلدات وعلامات الرسائل طوال العملية.',
      },
      {
        title: 'مزامنة الفروقات واللحاق النهائي',
        description: 'تلتقط مزامنة تدريجية نهائية أي بريد وارد خلال نافذة النقل، حتى لحظة التحويل نفسها.',
      },
      {
        title: 'تحويل MX/DNS',
        description: 'يتم تحويل توجيه البريد إلى المنصة الوجهة في وقت مجدول ومنخفض التأثير.',
      },
      {
        title: 'التحقق والدعم بعد النقل',
        description: 'يتم التحقق من اكتمال صندوق البريد لكل مستخدم، يليه دعم فني لمدة 30 يومًا لأي أمر يطرأ.',
      },
    ],
    comparison: [
      {
        aspect: 'مخاطر التصدير/الاستيراد اليدوي',
        withoutUs: 'قد تُفقد الملفات أو تتلف أو تُهمل كليًا',
        withUs: 'المزامنة المباشرة من خادم إلى خادم تتجنب التعامل اليدوي',
      },
      {
        aspect: 'سلامة بنية المجلدات',
        withoutUs: 'غالبًا ما يتم تسطيح البنية أو إعادة تنظيمها بشكل خاطئ',
        withUs: 'محفوظة تمامًا كما هي منظمة على الخادم المصدر',
      },
      {
        aspect: 'الوقت اللازم لصناديق البريد الجماعية',
        withoutUs: 'التصدير صندوق بريد تلو الآخر يستغرق أيامًا لفريق كامل',
        withUs: 'تُرحَّل جميع صناديق البريد بالتوازي كمشروع واحد',
      },
      {
        aspect: 'تعقيد الخوادم القديمة',
        withoutUs: 'الأنظمة غير الموثقة وغير المألوفة تُعطّل المشروع',
        withUs: 'الوصول المباشر عبر IMAP يتجاوز الحاجة إلى التوثيق',
      },
    ],
    testimonials: [
      {
        quote: 'كان خادم بريدنا يعمل على نظام لم يعد أحد في الشركة يفهمه. اتصلوا به مباشرة ونقلوا كل صندوق بريد.',
        name: 'مدير العمليات',
        role: 'شركة تصنيع',
      },
      {
        quote: 'انتقلت خمسة عشر عامًا من سجل البريد الإلكتروني مع كل مجلد في مكانه تمامًا كما تركته. لم أكن أتوقع ذلك بصراحة.',
        name: 'الشريك الإداري',
        role: 'مكتب محاسبة',
      },
      {
        quote: 'كان لدينا 40 صندوق بريد ننقلها من بريد مزود استضافة قديم. تمت المهمة كمشروع واحد بدلًا من أربعين مشكلة منفصلة.',
        name: 'منسق تقنية المعلومات',
        role: 'مجموعة رعاية صحية إقليمية',
      },
      {
        quote: 'لم يستطع أحد أن يخبرنا من قام أصلًا بتهيئة خادم بريدنا. لكنهم اكتشفوا الأمر ونقلوا كل شيء دون الحاجة إلى تلك المعلومات.',
        name: 'مسؤول المكتب',
        role: 'مكتب محاماة مستقل',
      },
      {
        quote: 'لم نكن متأكدين إن كنا بحاجة إلى نقل منصة أو نقل IMAP عادي. نظروا في إعدادنا وأعطونا إجابة صريحة بدلًا من محاولة بيعنا خدمات إضافية.',
        name: 'المدير العام',
        role: 'شركة خدمات لوجستية',
      },
    ],
    faqs: [
      {
        question: 'ما الذي يُعدّ "نقلًا عبر IMAP" مقارنة بنقل Google Workspace أو Microsoft 365 أو Zoho؟',
        answer: 'إذا كانت وجهتك هي Google Workspace أو Microsoft 365 أو Zoho Mail على وجه التحديد، فإن تلك الخدمات المخصصة تشمل خطوات خاصة بالمنصة مثل تهيئة لوحة التحكم الإدارية والبيانات على مستوى الحزمة الكاملة (Drive وTeams وCRM). أما خدمة نقل IMAP هذه فتغطي أي خادم بريد مصدر أو وجهة يتواصل عبر بروتوكول IMAP القياسي — بما في ذلك الانتقال بين مزودين عامين، أو إلى منصة تكون فيها المزامنة المباشرة هي النهج الأفضل.',
      },
      {
        question: 'هل يمكنكم النقل من خادم بريد قديم على cPanel أو خادم محلي؟',
        answer: 'نعم. هذا أحد أكثر السيناريوهات شيوعًا لهذه الخدمة — البريد القائم على cPanel، وخوادم البريد المحلية، ومزودو الاستضافة الإقليميون الأصغر، جميعها مدعومة من خلال الوصول المباشر عبر IMAP.',
      },
      {
        question: 'هل تدعمون أيضًا المصادر التي تستخدم POP3؟',
        answer: 'يُفضَّل بروتوكول IMAP بشكل كبير لأنه يحافظ على بنية المجلدات وحالة الرسائل، وتدعمه معظم خوادم البريد الحديثة. إذا كان نظامك المصدر يوفر الوصول عبر POP3 فقط، فأخبرنا بذلك خلال التقييم وسنؤكد لك النهج الأنسب لإعدادك الخاص.',
      },
      {
        question: 'هل يمكن نقل جهات الاتصال والتقويمات عبر IMAP أيضًا؟',
        answer: 'تُرحَّل جهات الاتصال والتقويمات عبر CardDAV وCalDAV حيثما يدعم الخادم المصدر هذين البروتوكولين. سنؤكد بدقة ما هو متاح لخادم بريدك المحدد خلال مرحلة الاكتشاف.',
      },
      {
        question: 'كم عدد صناديق البريد التي يمكن نقلها في آنٍ واحد؟',
        answer: 'لا يوجد حد أقصى صارم — نفّذنا مشاريع تتراوح من عدد قليل من صناديق البريد إلى عمليات نقل تشمل مؤسسة كاملة، وجميعها تُدار كمشروع واحد منسق.',
      },
      {
        question: 'هل تتم مشاركة كلمة مرور بريدي الإلكتروني مع أي شخص أثناء الانتقال؟',
        answer: 'تتم معالجة بيانات اعتماد الوصول بأمان وتكون محددة النطاق لمشروع النقل فقط، ولا يستخدمها سوى المهندسين العاملين عليه، ولا تُخزَّن أبدًا لأطول من اللازم.',
      },
    ],
    ctaHeadline: 'هل لديك خادم بريد إلكتروني لا يناسب أداة نقل قياسية؟',
    ctaSubtext: 'أخبرنا عن خادم بريدك الحالي. سنؤكد لك مسار النقل الصحيح ضمن تقييم مجاني.',
  },
};
