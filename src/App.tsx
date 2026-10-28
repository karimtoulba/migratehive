import { Suspense, lazy, ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollManager from '@/components/ScrollManager';
import { LanguageProvider } from '@/context/LanguageContext';
import { SERVICES } from '@/data/services';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const FAQsPage = lazy(() => import('@/pages/FAQsPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const ServicePage = lazy(() => import('@/pages/ServicePage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// English routes mirrored under /ar with the same components — each page reads the
// active locale from LanguageContext (derived from the URL) and renders accordingly.
const STATIC_ROUTES: { path: string; element: ReactNode }[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/faqs', element: <FAQsPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
  { path: '/terms-of-service', element: <TermsOfServicePage /> },
];

function arPath(path: string): string {
  return path === '/' ? '/ar' : `/ar${path}`;
}

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-navy-950 text-white">
        <ScrollManager />
        <Navbar />
        <main>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              {STATIC_ROUTES.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
              {STATIC_ROUTES.map((route) => (
                <Route key={arPath(route.path)} path={arPath(route.path)} element={route.element} />
              ))}
              {SERVICES.map((service) => (
                <Route key={service.slug} path={`/${service.slug}`} element={<ServicePage service={service} />} />
              ))}
              {SERVICES.map((service) => (
                <Route key={`ar-${service.slug}`} path={arPath(`/${service.slug}`)} element={<ServicePage service={service} />} />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
