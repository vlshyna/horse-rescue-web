import { MotifLine } from './Motif';

interface FooterProps {
  navigate: (page: string, id?: string, section?: string) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="text-charcoal">
        <MotifLine className="h-12" strokeWidth={0.5} />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl text-cream mb-3">Open Pastures</div>
            <p className="text-sm leading-relaxed text-cream/55 mb-4">
              A non-profit sanctuary rescuing, rehabilitating, and rehoming horses across Central Europe since 2019.
            </p>
            <div className="flex gap-3">
              <SocialLink href="#" label="Instagram">
                <path d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z" />
                <circle cx="12" cy="12" r="3" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </SocialLink>
              <SocialLink href="#" label="Facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </SocialLink>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-cream/35 mb-4">Navigate</div>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: 'Our Horses', action: 'home', section: 'horses' },
                { label: 'How to Help', action: 'home', section: 'help' },
                { label: 'Donations & Reports', action: 'donations' },
                { label: 'Contact', action: 'home', section: 'contact' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => navigate(link.action, undefined, link.section)}
                  className="text-left text-sm text-cream/55 hover:text-cream/85 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-cream/35 mb-4">Contact</div>
            <div className="flex flex-col gap-2.5 text-sm text-cream/55">
              <div>Paseky 47, 756 57 Valašská Bystřice</div>
              <a href="mailto:info@openpastures.org" className="hover:text-cream/85 transition-colors">
                info@openpastures.org
              </a>
              <a href="tel:+420603123456" className="hover:text-cream/85 transition-colors">
                +420 603 123 456
              </a>
              <div className="mt-2 pt-3 border-t border-cream/10">
                <div className="text-xs text-cream/35 mb-1">Bank transfer</div>
                <div className="font-mono text-xs text-cream/50">CZ65 0800 0000 1920 0014 5399</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/30">
          <div>© 2024 Open Pastures Foundation. Non-profit registered in Czech Republic.</div>
          <div>IČO: 08 123 456</div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded-sm border border-cream/15 text-cream/40 hover:text-cream/75 hover:border-cream/30 transition-colors"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  );
}
