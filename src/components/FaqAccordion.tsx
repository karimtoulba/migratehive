import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { ServiceFaq } from '@/data/services';

export default function FaqAccordion({
  faqs,
  defaultOpenIndex = 0,
}: {
  faqs: ServiceFaq[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.06 }}
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
  );
}
