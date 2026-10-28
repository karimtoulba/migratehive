import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SERVICES, localeContent } from '@/data/services';
import { useLanguage } from '@/context/LanguageContext';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/hello@wadipurple.com';

type Status = 'idle' | 'loading' | 'success' | 'error';

const COPY = {
  en: {
    eyebrow: 'FREE ASSESSMENT',
    heading: 'Get your email migration assessment',
    sub: "Tell us about your current mailboxes and where you want to go. We'll get back to you within 24 hours with a tailored migration plan — no commitment, no pressure.",
    checklist: [
      'Full mailbox & domain review',
      'Risk assessment and mitigation plan',
      'Estimated timeline and cost',
      'Recommended destination platform',
    ],
    successTitle: 'Assessment request received',
    successBody: "Thank you. We'll review your details and get back to you within 24 hours with your migration plan.",
    submitAnother: 'Submit another request',
    name: 'Name',
    namePlaceholder: 'Jane Smith',
    email: 'Business Email',
    emailPlaceholder: 'jane@company.com',
    domain: 'Company Domain',
    domainPlaceholder: 'yourcompany.com',
    provider: 'Current Email Provider',
    providerPlaceholder: 'e.g. GoDaddy, on-prem Exchange',
    destination: 'Destination Platform',
    selectPlatform: 'Select platform',
    mailboxCount: 'Number of Mailboxes',
    mailboxCountPlaceholder: 'e.g. 25',
    message: 'Message',
    optional: '(optional)',
    messagePlaceholder: 'Tell us about your email migration goals, timeline, or any concerns...',
    error: 'Something went wrong sending your request. Please try again, or email us directly at hello@wadipurple.com.',
    submitting: 'Submitting...',
    submit: 'Get My Free Assessment',
  },
  ar: {
    eyebrow: 'تقييم مجاني',
    heading: 'احصل على تقييم نقل بريدك الإلكتروني',
    sub: 'أخبرنا عن صناديق بريدك الحالية وإلى أين تريد الانتقال. سنعاود التواصل معك خلال 24 ساعة بخطة نقل مخصصة — بلا التزام وبلا ضغط.',
    checklist: [
      'مراجعة كاملة لصناديق البريد والنطاق',
      'تقييم المخاطر وخطة التخفيف منها',
      'جدول زمني وتكلفة تقديريان',
      'المنصة الوجهة الموصى بها',
    ],
    successTitle: 'تم استلام طلب التقييم',
    successBody: 'شكرًا لك. سنراجع تفاصيلك ونعاود التواصل معك خلال 24 ساعة بخطة النقل الخاصة بك.',
    submitAnother: 'إرسال طلب آخر',
    name: 'الاسم',
    namePlaceholder: 'سارة أحمد',
    email: 'البريد الإلكتروني للعمل',
    emailPlaceholder: 'sara@company.com',
    domain: 'نطاق الشركة',
    domainPlaceholder: 'yourcompany.com',
    provider: 'مزود البريد الإلكتروني الحالي',
    providerPlaceholder: 'مثال: GoDaddy، أو Exchange محلي',
    destination: 'المنصة الوجهة',
    selectPlatform: 'اختر المنصة',
    mailboxCount: 'عدد صناديق البريد',
    mailboxCountPlaceholder: 'مثال: 25',
    message: 'رسالة',
    optional: '(اختياري)',
    messagePlaceholder: 'أخبرنا عن أهداف نقل بريدك الإلكتروني، والجدول الزمني، أو أي استفسارات...',
    error: 'حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مرة أخرى، أو راسلنا مباشرة على hello@wadipurple.com.',
    submitting: 'جارٍ الإرسال...',
    submit: 'احصل على تقييمي المجاني',
  },
};

export default function AssessmentForm() {
  const { locale } = useLanguage();
  const t = COPY[locale];
  const migrationTypes = SERVICES.map((service) => localeContent(service, locale).shortName);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    payload._subject = 'New email migration assessment request';
    payload._template = 'table';
    payload._captcha = 'false';

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Request failed');

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="assessment" className="relative py-20 md:py-28 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              {t.heading}
            </h2>
            <p className="mt-4 text-navy-300 leading-relaxed">
              {t.sub}
            </p>

            <div className="mt-8 space-y-3">
              {t.checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                  <span className="text-sm text-navy-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative p-6 md:p-8 bg-navy-900/60 border border-white/10 rounded-2xl"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 mb-5 bg-accent-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-accent-400" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-white">{t.successTitle}</h3>
                  <p className="text-sm text-navy-300 max-w-sm">
                    {t.successBody}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    {t.submitAnother}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label={t.name} name="name" type="text" required placeholder={t.namePlaceholder} />
                    <Field label={t.email} name="business_email" type="email" required placeholder={t.emailPlaceholder} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label={t.domain} name="domain" type="text" required placeholder={t.domainPlaceholder} />
                    <Field label={t.provider} name="current_provider" type="text" required placeholder={t.providerPlaceholder} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-navy-300 mb-1.5">
                        {t.destination} <span className="text-accent-400">*</span>
                      </label>
                      <select
                        name="migration_type"
                        required
                        defaultValue=""
                        className="w-full px-4 py-2.5 bg-navy-800/60 border border-white/10 rounded-lg text-sm text-white focus:border-accent-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>{t.selectPlatform}</option>
                        {migrationTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <Field label={t.mailboxCount} name="mailbox_count" type="number" placeholder={t.mailboxCountPlaceholder} />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-navy-300 mb-1.5">
                      {t.message} <span className="text-navy-500">{t.optional}</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder={t.messagePlaceholder}
                      className="w-full px-4 py-2.5 bg-navy-800/60 border border-white/10 rounded-lg text-sm text-white placeholder:text-navy-500 focus:border-accent-500/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span className="text-sm text-red-300">
                        {t.error}
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold rounded-xl transition-all hover:shadow-[0_0_30px_-6px_rgba(34,211,238,0.5)]"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t.submitting}
                      </>
                    ) : (
                      <>
                        {t.submit}
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-navy-300 mb-1.5">
        {label} {required && <span className="text-accent-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 bg-navy-800/60 border border-white/10 rounded-lg text-sm text-white placeholder:text-navy-500 focus:border-accent-500/50 focus:outline-none transition-colors"
      />
    </div>
  );
}
