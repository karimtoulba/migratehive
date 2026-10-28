import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Languages } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { useLanguage } from '@/context/LanguageContext';

const COPY = {
  en: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Pricing', href: '/cloud-email-migration' },
      { label: 'About', href: '/about' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    freeAssessment: 'Free Assessment',
    getFreeAssessment: 'Get a Free Assessment',
    toggleMenu: 'Toggle menu',
    switchLang: 'العربية',
  },
  ar: {
    links: [
      { label: 'الرئيسية', href: '/' },
      { label: 'الأسعار', href: '/cloud-email-migration' },
      { label: 'عنّا', href: '/about' },
      { label: 'الأسئلة الشائعة', href: '/faqs' },
      { label: 'المدونة', href: '/blog' },
      { label: 'تواصل معنا', href: '/contact' },
    ],
    freeAssessment: 'تقييم مجاني',
    getFreeAssessment: 'احصل على تقييم مجاني',
    toggleMenu: 'فتح القائمة',
    switchLang: 'English',
  },
};

export default function Navbar() {
  const { locale, withLocale, toggleHref } = useLanguage();
  const t = COPY[locale];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToAssessment = () => {
    setMobileOpen(false);
    navigate(withLocale('/contact#assessment'));
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-18 py-4 flex items-center justify-between">
          <Logo onClick={() => setMobileOpen(false)} />

          <div className="hidden md:flex items-center gap-8">
            {t.links.map((link) => (
              <NavLink
                key={link.href}
                to={withLocale(link.href)}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-navy-200 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to={toggleHref}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-200 hover:text-white transition-colors"
            >
              <Languages className="w-3.5 h-3.5" />
              {t.switchLang}
            </NavLink>

            <ThemeToggle />

            <button
              onClick={goToAssessment}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500 hover:bg-accent-400 text-black text-sm font-semibold rounded-lg transition-all hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.5)]"
            >
              {t.freeAssessment}
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <NavLink
              to={toggleHref}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-1 px-2 py-2 text-sm font-medium text-navy-200 hover:text-white transition-colors"
            >
              <Languages className="w-4 h-4" />
            </NavLink>
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white"
              aria-label={t.toggleMenu}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="relative pt-24 px-6 pb-10 flex flex-col gap-1 overflow-y-auto max-h-screen"
            >
              {t.links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={withLocale(link.href)}
                    end={link.href === '/'}
                    onClick={() => setMobileOpen(false)}
                    className="block text-lg font-medium text-navy-100 hover:text-white py-3 border-b border-white/5 transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.button
                onClick={goToAssessment}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: t.links.length * 0.06 }}
                className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 text-black font-semibold rounded-xl"
              >
                {t.getFreeAssessment}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
