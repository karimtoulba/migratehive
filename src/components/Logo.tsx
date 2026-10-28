import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Logo({ onClick, className = '' }: { onClick?: () => void; className?: string }) {
  const { withLocale } = useLanguage();
  return (
    <Link to={withLocale('/')} onClick={onClick} className={`flex items-center gap-2.5 group shrink-0 ${className}`}>
      <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
        <div className="absolute inset-0 bg-accent-500/20 rounded-lg blur-md group-hover:bg-accent-500/30 transition-colors" />
        <div className="relative w-9 h-9 bg-navy-800 border border-accent-500/30 rounded-lg flex items-center justify-center">
          <Hexagon className="w-5 h-5 text-accent-400" strokeWidth={2} fill="currentColor" fillOpacity={0.15} />
        </div>
      </div>
      <span className="font-display text-xl font-semibold tracking-tight text-white whitespace-nowrap">
        Migrate<span className="text-accent-400">Hive</span>
      </span>
    </Link>
  );
}
