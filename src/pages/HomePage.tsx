import { useEffect } from 'react';
import { horses, campaigns } from '../data';
import { MotifLine, MotifFill } from '../components/Motif';
import type { Horse } from '../data';

interface HomePageProps {
  navigate: (page: string, id?: string, section?: string) => void;
  scrollTarget?: string;
}

const statusLabels: Record<string, { label: string; cls: string }> = {
  critical: { label: 'Critical care', cls: 'bg-[#F5E8E8] text-[#8B2020]' },
  recovering: { label: 'Recovering', cls: 'bg-[#F5F0E0] text-[#7A5218]' },
  stable: { label: 'Stable', cls: 'bg-[#E8EEE4] text-[#3D5230]' },
  thriving: { label: 'Thriving', cls: 'bg-[#D8E6D2] text-[#2A4A22]' },
};

export default function HomePage({ navigate, scrollTarget }: HomePageProps) {
  const activeCampaign = campaigns.find((c) => c.status === 'active')!;
  const pct = Math.min(100, Math.round((activeCampaign.raised / activeCampaign.target) * 100));

  useEffect(() => {
    if (!scrollTarget || scrollTarget === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(scrollTarget);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }, [scrollTarget]);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end bg-charcoal">
        <img
          src="https://images.unsplash.com/photo-1783267152320-947d4cadd869?w=1800&h=1080&fit=crop&auto=format"
          alt="A horse grazing in a golden-light meadow at dusk"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />

        {/* Motif in hero */}
        <div className="absolute bottom-0 left-0 right-0 text-cream/10 pointer-events-none">
          <MotifLine className="h-24" strokeWidth={1.5} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28 pt-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-sky mb-5">
              Open Pastures Foundation
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-cream leading-[1.06] mb-6">
              Safe ground<br />
              for horses<br />
              in need.
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed mb-9 max-w-lg">
              We rescue horses from neglect and abuse, give them veterinary care and time to heal,
              and help them find a future worth living.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('home', undefined, 'horses')}
                className="bg-cream text-charcoal text-sm font-semibold px-6 py-3 rounded-sm hover:bg-cream-dark transition-colors"
              >
                Meet our horses
              </button>
              <button
                onClick={() => navigate('donations')}
                className="border border-cream/40 text-cream text-sm font-semibold px-6 py-3 rounded-sm hover:bg-cream/10 transition-colors"
              >
                Support us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats band ─────────────────────────────────────── */}
      <section className="bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-cream/10">
            {[
              { value: '47', label: 'Horses rescued', sub: 'since 2019' },
              { value: '12', label: 'Currently in care', sub: 'at the sanctuary' },
              { value: '31', label: 'Rehomed', sub: 'to vetted families' },
              { value: '94%', label: 'Recovery rate', sub: 'of horses admitted' },
            ].map((stat) => (
              <div key={stat.label} className="md:px-10 first:pl-0 last:pr-0">
                <div className="font-serif text-4xl md:text-5xl text-cream mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-cream/80">{stat.label}</div>
                <div className="text-xs text-cream/35 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission intro ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-green mb-4">Who we are</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-6">
              Every horse that arrives here has already survived something.
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                Open Pastures was founded in 2019 by a small group of veterinarians and volunteers
                in the Beskydy foothills. We started with two horses and a borrowed barn.
                Five years later, we have twelve horses in our care and a community of supporters
                across Europe.
              </p>
              <p>
                We do not rush rehabilitation. Some horses need weeks. Some need years.
                We give each one what they need, for as long as they need it —
                and we publish every receipt to prove it.
              </p>
            </div>
            <div className="mt-8">
              <MotifLine className="h-8 text-brown/25" strokeWidth={1} />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-cream-dark rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595353798712-3c05a2ec64fc?w=800&h=1000&fit=crop&auto=format"
                alt="A caretaker holding a horse gently by the halter"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-green text-cream px-5 py-4 rounded-sm hidden md:block">
              <div className="font-serif text-2xl">5 years</div>
              <div className="text-xs text-cream/70 mt-0.5">of sanctuary work</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Horses ─────────────────────────────────────── */}
      <section id="horses" className="bg-cream-dark py-20 md:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">Currently in care</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Our horses</h2>
            </div>
            <p className="text-charcoal/55 text-sm max-w-xs md:text-right leading-relaxed">
              Twelve horses at various stages of rehabilitation. Each one has a story.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {horses.map((horse) => (
              <HorseCard key={horse.id} horse={horse} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Help ─────────────────────────────────────── */}
      <section id="help" className="py-20 md:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">Get involved</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Three ways to help</h2>
            <p className="text-charcoal/60 leading-relaxed">
              Whether you have money, time, or simply a voice — there is a meaningful way for you to be part of this.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <HelpCard
              icon={<IconHeart />}
              title="Make a donation"
              body="Fund feed, veterinary care, and everyday sanctuary operations. Every euro is accounted for and reported publicly."
              cta="Donate now"
              onClick={() => navigate('donations')}
              accent="brown"
            />
            <HelpCard
              icon={<IconHands />}
              title="Volunteer"
              body="Help with feeding, grooming, paddock maintenance, and horse socialisation at our sanctuary. Weekends welcome."
              cta="Get in touch"
              onClick={() => navigate('home', undefined, 'contact')}
              accent="green"
            />
            <HelpCard
              icon={<IconHorse />}
              title="Sponsor a horse"
              body="Commit €30–€50 per month to cover the ongoing care of a specific horse. You'll receive monthly updates and photos."
              cta="Choose a horse"
              onClick={() => navigate('home', undefined, 'horses')}
              accent="sky"
            />
          </div>
        </div>
      </section>

      {/* ── Current Campaign ─────────────────────────────────── */}
      <section className="bg-charcoal py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 text-charcoal-light/40 pointer-events-none">
          <MotifLine className="h-16" strokeWidth={0.75} />
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-sky mb-4">Active fundraiser</p>
              <h2 className="font-serif text-4xl md:text-5xl text-cream mb-5 leading-tight">
                {activeCampaign.title}
              </h2>
              <p className="text-cream/60 leading-relaxed mb-8">
                {activeCampaign.description}
              </p>

              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2.5">
                  <span className="text-cream font-semibold">€{activeCampaign.raised.toLocaleString()} raised</span>
                  <span className="text-cream/40">goal: €{activeCampaign.target.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-cream/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky rounded-full transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="mt-2 text-right text-xs text-cream/35">{pct}% of goal</div>
              </div>

              <button
                onClick={() => navigate('donations')}
                className="inline-flex items-center gap-2 bg-brown text-cream text-sm font-semibold px-6 py-3 rounded-sm hover:bg-brown-hover transition-colors"
              >
                Contribute to this campaign
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[16/9] bg-charcoal-light rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1761673295751-a4f49c60aa5c?w=900&h=500&fit=crop&auto=format"
                  alt="Two horses eating hay from a wooden feeder"
                  className="w-full h-full object-cover opacity-75"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square bg-charcoal-light rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1777880014619-a4833c9abd9f?w=500&h=500&fit=crop&auto=format"
                  alt="Horses in warm stable stalls"
                  className="w-full h-full object-cover opacity-75"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square bg-charcoal-light rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1682636109994-4f2bbee2fd72?w=500&h=500&fit=crop&auto=format"
                  alt="A horse resting in a warm barn"
                  className="w-full h-full object-cover opacity-75"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transparency ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-charcoal/8">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="mt-1 text-green">
                <IconDoc />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-charcoal mb-2">We publish every receipt</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed max-w-lg">
                  For every fundraiser we run, we publish a detailed report: what the money was spent on,
                  how much, and what changed for the horses. Our accounts have never been audited — because
                  every donor can read them online.
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('donations')}
              className="shrink-0 text-sm font-semibold text-brown border border-brown/30 px-5 py-2.5 rounded-sm hover:bg-brown hover:text-cream transition-colors"
            >
              View all reports →
            </button>
          </div>
        </div>
      </section>

      {/* ── Recent Stories ─────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">From the sanctuary</p>
            <h2 className="font-serif text-4xl text-charcoal">Recent updates</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <StoryCard
              date="September 2024"
              title="Rex takes his first steps outside"
              body="Three weeks after emergency surgery, Rex walked in the paddock for the first time. A short distance — but a milestone we weren't sure we'd reach."
              photo="https://images.unsplash.com/photo-1783804450453-6a87fbef9369?w=700&h=480&fit=crop&auto=format"
              alt="A brown horse standing in a field at twilight"
              horseId="rex"
              navigate={navigate}
            />
            <StoryCard
              date="August 2024"
              title="Luna accepts her first halter"
              body="After eight weeks of patient groundwork, our behaviourist walked Luna on a lead for the first time. Progress, measured not in days but in small, honest moments."
              photo="https://images.unsplash.com/photo-1777133025718-ca8a34cdcd7d?w=700&h=480&fit=crop&auto=format"
              alt="A horse grazing in a misty, sunlit field"
              horseId="luna"
              navigate={navigate}
            />
            <StoryCard
              date="July 2024"
              title="Bruno cleared for paddock time"
              body="Eight months after his foreleg surgery, Bruno's vet gave the green light for limited paddock time. He walked to the fence and stood in the sun for a long while."
              photo="https://images.unsplash.com/photo-1772902540156-e298bcc8e3cc?w=700&h=480&fit=crop&auto=format"
              alt="Two horses grazing in a field at sunset"
              horseId="bruno"
              navigate={navigate}
            />
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────── */}
      <section id="contact" className="bg-cream-dark py-20 md:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">Get in touch</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">We read every message</h2>
              <p className="text-charcoal/60 leading-relaxed mb-8">
                Whether you want to volunteer, ask about adoption, sponsor a horse, or simply learn more —
                write to us. We respond within two working days.
              </p>
              <div className="space-y-4 text-sm">
                <ContactRow icon={<IconPin />} label="Visit us">
                  Paseky 47, 756 57 Valašská Bystřice, Czech Republic
                </ContactRow>
                <ContactRow icon={<IconMail />} label="Email">
                  <a href="mailto:info@openpastures.org" className="text-brown hover:underline">
                    info@openpastures.org
                  </a>
                </ContactRow>
                <ContactRow icon={<IconPhone />} label="Phone">
                  <a href="tel:+420603123456" className="text-brown hover:underline">
                    +420 603 123 456
                  </a>
                </ContactRow>
                <ContactRow icon={<IconClock />} label="Visiting hours">
                  Saturday & Sunday 10:00–16:00, or by appointment
                </ContactRow>
              </div>
            </div>

            <div className="space-y-5">
              <div className="aspect-[4/3] bg-cream-deeper rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1761245049310-88fb987d7e56?w=800&h=600&fit=crop&auto=format"
                  alt="A horse peeking from a stable door"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-cream border border-charcoal/10 rounded-sm p-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/40 mb-2">Bank transfer</p>
                <p className="text-sm text-charcoal/60 mb-1">Open Pastures z.s.</p>
                <p className="font-mono text-sm text-charcoal">CZ65 0800 0000 1920 0014 5399</p>
                <p className="text-xs text-charcoal/40 mt-1">Česká spořitelna · BIC: GIBACZPX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HorseCard({ horse, navigate }: { horse: Horse; navigate: (p: string, id?: string) => void }) {
  const status = statusLabels[horse.status];
  return (
    <button
      onClick={() => navigate('horse', horse.id)}
      className="group text-left bg-cream rounded overflow-hidden border border-charcoal/8 hover:border-charcoal/20 transition-all duration-200 hover:shadow-sm"
    >
      <div className="aspect-[3/4] bg-cream-deeper overflow-hidden">
        <img
          src={horse.photo}
          alt={`${horse.name} — ${horse.breed}`}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-2xl text-charcoal">{horse.name}</h3>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-sm mt-1 shrink-0 ${status.cls}`}>
            {status.label}
          </span>
        </div>
        <p className="text-xs text-charcoal/45 mb-3">{horse.age} years · {horse.breed} · {horse.gender}</p>
        <p className="text-sm text-charcoal/65 leading-relaxed line-clamp-3">{horse.shortBio}</p>
        <div className="mt-4 text-xs font-semibold text-brown group-hover:underline">
          Meet {horse.name} →
        </div>
      </div>
    </button>
  );
}

function HelpCard({
  icon, title, body, cta, onClick, accent
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  cta: string;
  onClick: () => void;
  accent: 'brown' | 'green' | 'sky';
}) {
  const accentCls = {
    brown: 'text-brown bg-brown/8',
    green: 'text-green bg-green/8',
    sky: 'text-sky bg-sky/15',
  }[accent];

  const ctaCls = {
    brown: 'border-brown/30 text-brown hover:bg-brown hover:text-cream',
    green: 'border-green/30 text-green hover:bg-green hover:text-cream',
    sky: 'border-sky/40 text-sky hover:bg-sky hover:text-charcoal',
  }[accent];

  return (
    <div className="border border-charcoal/10 rounded-sm p-7 bg-cream flex flex-col">
      <div className={`w-11 h-11 rounded-sm flex items-center justify-center mb-5 ${accentCls}`}>
        {icon}
      </div>
      <h3 className="font-serif text-2xl text-charcoal mb-3">{title}</h3>
      <p className="text-sm text-charcoal/60 leading-relaxed flex-1 mb-6">{body}</p>
      <button
        onClick={onClick}
        className={`self-start text-sm font-semibold border px-4 py-2 rounded-sm transition-colors ${ctaCls}`}
      >
        {cta}
      </button>
    </div>
  );
}

function StoryCard({
  date, title, body, photo, alt, horseId, navigate
}: {
  date: string;
  title: string;
  body: string;
  photo: string;
  alt: string;
  horseId: string;
  navigate: (p: string, id?: string) => void;
}) {
  return (
    <button
      onClick={() => navigate('horse', horseId)}
      className="group text-left flex flex-col"
    >
      <div className="aspect-[16/11] bg-cream-dark overflow-hidden rounded-sm mb-5">
        <img
          src={photo}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/35 mb-2">{date}</p>
      <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-brown transition-colors">{title}</h3>
      <p className="text-sm text-charcoal/60 leading-relaxed">{body}</p>
    </button>
  );
}

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-green mt-0.5 shrink-0">{icon}</div>
      <div>
        <div className="text-xs font-semibold text-charcoal/40 uppercase tracking-widest mb-0.5">{label}</div>
        <div className="text-charcoal/75">{children}</div>
      </div>
    </div>
  );
}

// Icons
function IconHeart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconHands() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

function IconHorse() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,18 C3,18 5,12 9,10 C11,9 13,10 15,8 C17,6 17,4 19,4 L21,4" />
      <path d="M9,10 L9,18" />
      <path d="M15,13 L15,18" />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
