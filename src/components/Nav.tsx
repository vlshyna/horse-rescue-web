import { useState, useEffect } from 'react';
import { useLang } from '../LangContext';
import { translations } from '../i18n';

interface NavProps {
  navigate: (page: string, id?: string, section?: string) => void;
  currentPage: string;
}

export default function Nav({ navigate, currentPage }: NavProps) {
  const { lang, setLang } = useLang();
  const T = translations[lang];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: T.nav.ourHorses, action: 'home', section: 'horses' },
    { label: T.nav.howToHelp, action: 'home', section: 'help' },
    { label: T.nav.donations, action: 'donations', section: undefined },
    { label: T.nav.contact, action: 'home', section: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPage]);

  const handleLink = (action: string, section?: string) => {
    navigate(action, undefined, section);
    setMenuOpen(false);
  };

  const isTransparent = currentPage === 'home' && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-cream/95 backdrop-blur-sm border-b border-charcoal/8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo — text only */}
          <button
            onClick={() => handleLink('home')}
            className={`font-serif text-xl leading-none transition-opacity hover:opacity-70 ${
              isTransparent ? 'text-cream' : 'text-charcoal'
            }`}
          >
            Free Horses
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLink(link.action, link.section)}
                className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${
                  isTransparent ? 'text-cream/90' : 'text-charcoal/75'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side: lang switcher + CTA + hamburger */}
          <div className="flex items-center gap-2 md:gap-3">
            <LangSwitcher isTransparent={isTransparent} />

            <button
              onClick={() => navigate('donations')}
              className="hidden sm:inline-flex items-center bg-brown text-cream text-sm font-semibold px-4 py-2 rounded-sm hover:bg-brown-hover transition-colors"
            >
              {T.nav.donateNow}
            </button>

            <button
              className={`md:hidden p-1.5 rounded-sm ${
                isTransparent ? 'text-cream' : 'text-charcoal'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-charcoal/10">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLink(link.action, link.section)}
                className="text-left py-3 text-base font-medium text-charcoal border-b border-charcoal/8 last:border-0 hover:text-brown transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate('donations')}
              className="mt-3 bg-brown text-cream text-sm font-semibold py-3 rounded-sm hover:bg-brown-hover transition-colors"
            >
              {T.nav.donateNow}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function LangSwitcher({ isTransparent }: { isTransparent: boolean }) {
  const { lang, setLang } = useLang();
  const base = `text-xs font-semibold px-2 py-1 rounded-sm transition-colors`;
  const activeClass = isTransparent
    ? 'bg-cream/20 text-cream'
    : 'bg-brown/10 text-brown';
  const inactiveClass = isTransparent
    ? 'text-cream/50 hover:text-cream/80'
    : 'text-charcoal/40 hover:text-charcoal/70';

  return (
    <div className="flex items-center gap-0.5 border border-current/10 rounded-sm overflow-hidden">
      {(['en', 'uk'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`${base} ${lang === l ? activeClass : inactiveClass}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="3" y1="7" x2="19" y2="7" />
      <line x1="3" y1="12" x2="19" y2="12" />
      <line x1="3" y1="17" x2="19" y2="17" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="5" y1="5" x2="17" y2="17" />
      <line x1="17" y1="5" x2="5" y2="17" />
    </svg>
  );
}
