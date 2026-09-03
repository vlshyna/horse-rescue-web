import { useState, useEffect } from 'react';

interface NavProps {
  navigate: (page: string, id?: string, section?: string) => void;
  currentPage: string;
}

const navLinks = [
  { label: 'Our Horses', action: 'home', section: 'horses' },
  { label: 'How to Help', action: 'home', section: 'help' },
  { label: 'Donations & Reports', action: 'donations', section: undefined },
  { label: 'Contact', action: 'home', section: 'contact' },
];

export default function Nav({ navigate, currentPage }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          {/* Logo */}
          <button
            onClick={() => handleLink('home')}
            className={`flex items-center gap-2.5 group transition-opacity hover:opacity-75 ${
              isTransparent ? 'text-cream' : 'text-charcoal'
            }`}
          >
            <LogoMark inverted={isTransparent} />
            <span className="font-serif text-lg leading-none hidden sm:block">
              Open Pastures
            </span>
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

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('donations')}
              className="hidden sm:inline-flex items-center gap-1.5 bg-brown text-cream text-sm font-semibold px-4 py-2 rounded-sm hover:bg-brown-hover transition-colors"
            >
              Donate now
            </button>

            <button
              className={`md:hidden p-1.5 rounded-sm transition-colors ${
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
              Donate now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function LogoMark({ inverted }: { inverted: boolean }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3,20 C8,10 11,16 14,12 C17,8 20,14 25,8"
        stroke={inverted ? '#F5F1E8' : '#6B4F3A'}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M3,24 C8,14 11,20 14,16 C17,12 20,18 25,12"
        stroke={inverted ? 'rgba(245,241,232,0.4)' : 'rgba(107,79,58,0.3)'}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
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
