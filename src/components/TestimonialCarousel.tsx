import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceTestimonial } from '@/data/services';

export default function TestimonialCarousel({ testimonials }: { testimonials: ServiceTestimonial[] }) {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      if (!pausedRef.current) next();
    }, 6000);
    return () => clearInterval(timer);
  }, [next, testimonials.length]);

  const t = testimonials[index];

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div className="relative min-h-[280px] sm:min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="p-8 md:p-10 bg-navy-900/40 border border-white/5 rounded-2xl text-center"
          >
            <Quote className="w-8 h-8 text-accent-500/40 mx-auto mb-5" />
            <p className="text-lg text-navy-100 leading-relaxed mb-6">"{t.quote}"</p>
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-xs text-navy-400">{t.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-9 h-9 flex items-center justify-center bg-navy-900/60 border border-white/10 rounded-full text-navy-300 hover:text-white hover:border-accent-500/30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name + item.role}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-accent-400' : 'w-1.5 bg-navy-700 hover:bg-navy-600'}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-9 h-9 flex items-center justify-center bg-navy-900/60 border border-white/10 rounded-full text-navy-300 hover:text-white hover:border-accent-500/30 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
