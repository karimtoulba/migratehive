import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const COPY = {
  en: {
    eyebrow: 'FAQ',
    heading: 'Questions, answered',
    seeAll: 'See all frequently asked questions',
    faqs: [
      {
        question: 'How much downtime should I expect during migration?',
        answer: 'None that your team will notice. We sync mailboxes in parallel with your existing platform before cutover, so staff keep sending and receiving mail right up until the scheduled MX switch — typically a short, off-peak window measured in minutes, not hours.',
      },
      {
        question: 'Which email platforms do you support?',
        answer: 'Google Workspace, Microsoft 365, Zoho Mail, and any standard IMAP-based mail server — including migrations between any two of these platforms in either direction.',
      },
      {
        question: 'What happens if something goes wrong during the migration?',
        answer: 'Every migration includes a tested rollback plan. We take a full backup of your source mailboxes before starting, and if any issue arises during cutover, we can revert MX records to your original setup quickly.',
      },
      {
        question: 'Will you migrate contacts, calendars, and shared mailboxes too?',
        answer: 'Yes. Contacts, calendar events, shared mailboxes, distribution lists, and folder structures are all part of a standard migration — not an add-on.',
      },
      {
        question: 'How long does a typical email migration take?',
        answer: 'Most individual mailboxes sync within hours. A full team migration is typically planned and completed within a scheduled window of a few days, with final cutover often happening over a weekend to minimize disruption. After your free assessment, we provide a precise timeline.',
      },
      {
        question: 'Do you offer support after the migration is complete?',
        answer: 'Yes - 30 days of post-migration support is included with every migration. We monitor deliverability, address any sync issues that surface, and are available for any access questions your team has.',
      },
    ],
  },
  ar: {
    eyebrow: 'الأسئلة الشائعة',
    heading: 'أسئلتكم، مُجابة',
    seeAll: 'عرض جميع الأسئلة الشائعة',
    faqs: [
      {
        question: 'كم من التوقف يجب أن أتوقعه أثناء النقل؟',
        answer: 'لا شيء سيلاحظه فريقك. نقوم بمزامنة صناديق البريد بالتوازي مع منصتك الحالية قبل التحويل، حتى يواصل الموظفون إرسال واستقبال البريد حتى لحظة تحويل MX المجدولة — وهي عادة نافذة قصيرة خارج أوقات الذروة تُقاس بالدقائق لا بالساعات.',
      },
      {
        question: 'ما هي منصات البريد الإلكتروني التي تدعمونها؟',
        answer: 'Google Workspace وMicrosoft 365 وZoho Mail وأي خادم بريد قياسي يدعم IMAP — بما في ذلك النقل بين أي منصتين من هذه المنصات في أي اتجاه.',
      },
      {
        question: 'ماذا يحدث إذا حدث خطأ ما أثناء النقل؟',
        answer: 'تتضمن كل عملية نقل خطة تراجع مُختبرة. نأخذ نسخة احتياطية كاملة من صناديق بريدك المصدر قبل البدء، وإذا طرأت أي مشكلة أثناء التحويل، يمكننا إعادة سجلات MX إلى إعدادك الأصلي بسرعة.',
      },
      {
        question: 'هل ستنقلون جهات الاتصال والتقويمات وصناديق البريد المشتركة أيضًا؟',
        answer: 'نعم. جهات الاتصال وفعاليات التقويم وصناديق البريد المشتركة والقوائم البريدية وهياكل المجلدات كلها جزء من النقل القياسي — وليست إضافة منفصلة.',
      },
      {
        question: 'كم من الوقت يستغرق نقل البريد الإلكتروني عادةً؟',
        answer: 'تتم مزامنة معظم صناديق البريد الفردية خلال ساعات. يتم عادة التخطيط لنقل كامل للفريق وإنجازه ضمن نافذة زمنية مجدولة من بضعة أيام، مع حدوث التحويل النهائي غالبًا خلال عطلة نهاية الأسبوع لتقليل التعطيل. بعد تقييمك المجاني، نزودك بجدول زمني دقيق.',
      },
      {
        question: 'هل تقدمون دعمًا بعد اكتمال النقل؟',
        answer: 'نعم - يشمل كل نقل 30 يومًا من الدعم بعد النقل. نراقب قابلية التسليم، ونعالج أي مشكلات مزامنة تظهر، ونكون متاحين لأي أسئلة وصول يطرحها فريقك.',
      },
    ],
  },
};

export default function FAQ() {
  const { locale, withLocale } = useLanguage();
  const t = COPY[locale];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            {t.heading}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {t.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`border rounded-xl overflow-hidden transition-colors ${
                  isOpen ? 'bg-navy-900/60 border-accent-500/20' : 'bg-navy-900/30 border-white/5'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-medium text-white">{faq.question}</span>
                  <div className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-accent-500/20 text-accent-400' : 'bg-navy-800 text-navy-300'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-sm text-navy-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link to={withLocale('/faqs')} className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors">
            {t.seeAll}
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
