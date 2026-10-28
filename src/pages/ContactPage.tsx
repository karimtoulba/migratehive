import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import AssessmentForm from '@/components/AssessmentForm';
import FaqAccordion from '@/components/FaqAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useSEO } from '@/hooks/useSEO';
import { faqPageJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import { useLanguage } from '@/context/LanguageContext';

const ICONS = { Send, Clock, MessageCircle };

const COPY = {
  en: {
    title: 'Contact Us – Get a Free Migration Assessment',
    description:
      'Get in touch with MigrateHive for business email migration questions — Google Workspace, Microsoft 365, Zoho, or IMAP. We typically reply within one business day.',
    eyebrow: 'GET IN TOUCH',
    headline: "Let's talk about",
    headlineAccent: 'your email migration.',
    sub: 'Have a question before committing to anything? Just fill out the form below. Ready to start? Jump straight to the free assessment.',
    startAssessment: 'Start a Free Assessment',
    cards: [
      { icon: 'Send', title: 'Message us', detail: 'Use the form below', description: 'Fill out the quick form and we\'ll get back to you personally.' },
      { icon: 'Clock', title: 'Office hours', detail: 'Mon-Fri, 9am-6pm GMT', description: 'We reply to messages sent outside these hours the next business day.' },
      { icon: 'MessageCircle', title: 'Response time', detail: 'Within 1 business day', description: "Most inquiries get a personal reply the same day they're sent." },
    ],
    faqEyebrow: 'BEFORE YOU REACH OUT',
    faqHeading: 'Quick answers',
    seeAll: 'See all frequently asked questions',
    faqs: [
      {
        question: 'Is the free assessment actually free?',
        answer: "Yes, completely. There's no obligation to proceed after your assessment — you get a clear picture of what your migration involves either way.",
      },
      {
        question: 'Can I reach out with a general question instead of filling in the full assessment?',
        answer: "Of course. You don't need a confirmed plan to reach out — fill in just the required fields and use the message box for your question. Every field except your message is there to help us respond faster, not to gatekeep access.",
      },
      {
        question: 'Do you work with businesses outside your listed office hours timezone?',
        answer: "Yes, we work with clients across multiple time zones regularly. We'll coordinate cutover windows and communication around what works for your team.",
      },
      {
        question: "I'm not sure exactly what kind of migration I need — can I still reach out?",
        answer: "Absolutely — that's a completely normal starting point. Describe your situation as best you can and we'll help you figure out the right approach.",
      },
    ],
  },
  ar: {
    title: 'تواصل معنا – احصل على تقييم مجاني لعملية النقل',
    description:
      'تواصل مع MigrateHive لأسئلتك حول نقل البريد الإلكتروني للأعمال — Google Workspace أو Microsoft 365 أو Zoho أو IMAP. نرد عادة خلال يوم عمل واحد.',
    eyebrow: 'تواصل معنا',
    headline: 'لنتحدث عن',
    headlineAccent: 'نقل بريدك الإلكتروني.',
    sub: 'لديك سؤال قبل الالتزام بأي شيء؟ فقط املأ النموذج أدناه. جاهز للبدء؟ انتقل مباشرة إلى التقييم المجاني.',
    startAssessment: 'ابدأ تقييمًا مجانيًا',
    cards: [
      { icon: 'Send', title: 'راسلنا', detail: 'استخدم النموذج أدناه', description: 'املأ النموذج السريع وسنرد عليك شخصيًا.' },
      { icon: 'Clock', title: 'ساعات العمل', detail: 'الإثنين-الجمعة، 9ص-6م بتوقيت غرينتش', description: 'نرد على الرسائل المرسلة خارج هذه الساعات في يوم العمل التالي.' },
      { icon: 'MessageCircle', title: 'وقت الاستجابة', detail: 'خلال يوم عمل واحد', description: 'تحصل معظم الاستفسارات على رد شخصي في نفس يوم إرسالها.' },
    ],
    faqEyebrow: 'قبل أن تتواصل معنا',
    faqHeading: 'إجابات سريعة',
    seeAll: 'عرض جميع الأسئلة الشائعة',
    faqs: [
      {
        question: 'هل التقييم المجاني مجاني فعلاً؟',
        answer: 'نعم، بالكامل. لا يوجد أي التزام بالمتابعة بعد تقييمك — ستحصل على صورة واضحة عما يتضمنه نقلك في كل الأحوال.',
      },
      {
        question: 'هل يمكنني التواصل بسؤال عام بدلاً من تعبئة التقييم الكامل؟',
        answer: 'بالطبع. لست بحاجة إلى خطة نقل مؤكدة للتواصل معنا — املأ الحقول المطلوبة فقط واستخدم خانة الرسالة لسؤالك. كل حقل باستثناء رسالتك موجود لمساعدتنا على الرد بشكل أسرع، وليس لمنعك من التواصل.',
      },
      {
        question: 'هل تتعاملون مع شركات خارج المنطقة الزمنية لساعات عملكم المذكورة؟',
        answer: 'نعم، نتعامل بانتظام مع عملاء عبر مناطق زمنية متعددة. سننسق نوافذ التحويل والتواصل بما يناسب فريقك.',
      },
      {
        question: 'لست متأكدًا تمامًا من نوع النقل الذي أحتاجه — هل يمكنني التواصل رغم ذلك؟',
        answer: 'بالتأكيد — هذه نقطة بداية طبيعية تمامًا. صف وضعك بأفضل ما يمكنك وسنساعدك في تحديد النهج الصحيح.',
      },
    ],
  },
};

export default function ContactPage() {
  const { locale, withLocale } = useLanguage();
  const t = COPY[locale];

  useSEO({
    title: t.title,
    description: t.description,
    path: '/contact',
    jsonLd: [
      faqPageJsonLd(t.faqs),
      breadcrumbJsonLd([
        { name: locale === 'ar' ? 'الرئيسية' : 'Home', path: withLocale('/') },
        { name: locale === 'ar' ? 'تواصل معنا' : 'Contact', path: withLocale('/contact') },
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
            items={[{ label: locale === 'ar' ? 'تواصل معنا' : 'Contact' }]}
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
            <div className="mt-8">
              <Link
                to={withLocale('/contact#assessment')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-black font-semibold rounded-xl transition-all hover:shadow-[0_0_30px_-6px_rgba(34,211,238,0.5)]"
              >
                {t.startAssessment}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="relative py-16 md:py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {t.cards.map((card, i) => {
              const Icon = ICONS[card.icon as keyof typeof ICONS];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-navy-900/40 border border-white/5 rounded-2xl text-center"
                >
                  <div className="w-11 h-11 mx-auto mb-4 bg-navy-800 border border-accent-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <h3 className="font-display text-base font-semibold mb-1 text-white">{card.title}</h3>
                  <p className="text-sm font-medium text-accent-400 mb-2">{card.detail}</p>
                  <p className="text-xs text-navy-400 leading-relaxed">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <AssessmentForm />

      {/* FAQ */}
      <section className="relative py-20 md:py-28 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.faqEyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              {t.faqHeading}
            </h2>
          </motion.div>

          <FaqAccordion faqs={t.faqs} />

          <div className="mt-10 text-center">
            <Link to={withLocale('/faqs')} className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors">
              {t.seeAll}
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
