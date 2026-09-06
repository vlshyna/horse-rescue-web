import { useEffect } from 'react';
import { horses, campaigns } from '../data';
import type { Horse, HorseStatus } from '../data';
import { useLang } from '../LangContext';
import { translations } from '../i18n';

interface HomePageProps {
  navigate: (page: string, id?: string, section?: string) => void;
  scrollTarget?: string;
}

const statusLabels: Record<HorseStatus, string> = {
  fund: 'кінь фонду',
  private: 'приватний кінь',
  memory: 'кінь у пам’яті',
};

const statusColors: Record<HorseStatus, { cls: string }> = {
  fund: {
    cls: 'bg-[#E4ECE0] text-[#3F5A38]',
  },
  private: {
    cls: 'bg-[#E8E3EC] text-[#5B4968]',
  },
  memory: {
    cls: 'bg-[#E9E4DC] text-[#675D50]',
  },
};

export default function HomePage({
  navigate,
  scrollTarget,
}: HomePageProps) {
  const { lang } = useLang();
  const T = translations[lang];

  const activeCampaign = campaigns.find(
    (campaign) => campaign.status === 'active',
  );

  const pct = activeCampaign
    ? Math.min(
        100,
        Math.round(
          (activeCampaign.raised / activeCampaign.target) * 100,
        ),
      )
    : 0;

  useEffect(() => {
    if (!scrollTarget || scrollTarget === 'top') return;

    const el = document.getElementById(scrollTarget);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 80);
    }
  }, [scrollTarget]);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end bg-charcoal">
        <img
          src="/horse-rescue-web/images/bg.jpg"
          alt="A horse grazing in a golden-light meadow at dusk"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28 pt-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-sky mb-5">
              {T.hero.label}
            </p>

            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-cream leading-[1.06] mb-6">
              {T.hero.headline1}
              <br />
              {T.hero.headline2}
            </h1>

            <p className="text-cream/70 text-[16px] leading-relaxed mb-9 max-w-lg">
              {T.hero.sub}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  navigate('home', undefined, 'horses')
                }
                className="bg-cream text-charcoal text-sm font-semibold px-6 py-3 rounded-sm hover:bg-cream-dark transition-colors"
              >
                {T.hero.meetHorses}
              </button>

              <button
                onClick={() => navigate('donations')}
                className="border border-cream/40 text-cream text-sm font-semibold px-6 py-3 rounded-sm hover:bg-cream/10 transition-colors"
              >
                {T.hero.support}
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Stats */}
      <section className="bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-cream/10">
            {[
              {
                value: '47',
                label: T.stats.rescued,
                sub: T.stats.since,
              },
              {
                value: '12',
                label: T.stats.inCare,
                sub: T.stats.inCareAt,
              },
              {
                value: '31',
                label: T.stats.rehomed,
                sub: T.stats.rehomedTo,
              },
              {
                value: '94%',
                label: T.stats.recovery,
                sub: T.stats.recoveryOf,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="md:px-10 first:pl-0 last:pr-0"
              >
                <div className="font-serif text-4xl md:text-5xl text-cream mb-1">
                  {stat.value}
                </div>

                <div className="text-sm font-semibold text-cream/80">
                  {stat.label}
                </div>

                <div className="text-xs text-cream/35 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-green mb-4">
              {T.mission.label}
            </p>

            <h2 className="font-bold text-2xl md:text-3xl text-charcoal leading-tight mb-6">
              {T.mission.headline}
            </h2>

            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>{T.mission.p1}</p>
              <p>{T.mission.p2}</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-cream-dark rounded overflow-hidden">
              <img
                src="/horse-rescue-web/images/Liza.jpg"
                alt="Ліза і Багіра"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 bg-green text-cream px-5 py-4 rounded-sm hidden md:block">
              <div className="font-serif text-2xl">
                {T.mission.years}
              </div>

              <div className="text-xs text-cream/70 mt-0.5">
                {T.mission.yearsOf}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horses */}
      <section
        id="horses"
        className="bg-cream-dark py-20 md:py-28 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
                {T.horses.label}
              </p>

              <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
                {T.horses.heading}
              </h2>
            </div>

            <p className="text-charcoal/55 text-sm max-w-xs md:text-right leading-relaxed">
              {T.horses.sub}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
            {horses.map((horse) => (
              <HorseCard
                key={horse.id}
                horse={horse}
                navigate={navigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section
        id="help"
        className="py-20 md:py-28 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
              {T.help.label}
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              {T.help.heading}
            </h2>

            <p className="text-charcoal/60 leading-relaxed">
              {T.help.sub}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <HelpCard
              icon={<IconHeart />}
              title={T.help.donate}
              body={T.help.donateBody}
              cta={T.help.donateCta}
              onClick={() => navigate('donations')}
              accent="brown"
            />

            <HelpCard
              icon={<IconHands />}
              title={T.help.volunteer}
              body={T.help.volunteerBody}
              cta={T.help.volunteerCta}
              onClick={() =>
                navigate('home', undefined, 'contact')
              }
              accent="green"
            />

            <HelpCard
              icon={<IconHorse />}
              title={T.help.sponsor}
              body={T.help.sponsorBody}
              cta={T.help.sponsorCta}
              onClick={() =>
                navigate('home', undefined, 'horses')
              }
              accent="sky"
            />
          </div>
        </div>
      </section>

      {/* Campaign */}
      {activeCampaign && (
        <section className="bg-charcoal py-20 md:py-28 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-sky mb-4">
                  {T.campaign.label}
                </p>

                <h2 className="font-serif text-4xl md:text-5xl text-cream mb-5 leading-tight">
                  {activeCampaign.title}
                </h2>

                <p className="text-cream/60 leading-relaxed mb-8">
                  {activeCampaign.description}
                </p>

                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2.5">
                    <span className="text-cream font-semibold">
                      €{activeCampaign.raised.toLocaleString()}{' '}
                      {T.campaign.raised}
                    </span>

                    <span className="text-cream/40">
                      {T.campaign.goal}: €
                      {activeCampaign.target.toLocaleString()}
                    </span>
                  </div>

                  <div className="h-2 bg-cream/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sky rounded-full transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="mt-2 text-right text-xs text-cream/35">
                    {pct}
                    {T.campaign.pctOfGoal}
                  </div>
                </div>

                <button
                  onClick={() => navigate('donations')}
                  className="inline-flex items-center gap-2 bg-brown text-cream text-sm font-semibold px-6 py-3 rounded-sm hover:bg-brown-hover transition-colors"
                >
                  {T.campaign.contribute}

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
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
      )}

      {/* Transparency */}
      <section className="py-16 md:py-20 border-b border-charcoal/8">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="mt-1 text-green shrink-0">
                <IconDoc />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-charcoal mb-2">
                  {T.transparency.heading}
                </h3>

                <p className="text-charcoal/60 text-sm leading-relaxed max-w-lg">
                  {T.transparency.body}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate('donations')}
              className="shrink-0 text-sm font-semibold text-brown border border-brown/30 px-5 py-2.5 rounded-sm hover:bg-brown hover:text-cream transition-colors"
            >
              {T.transparency.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
              {T.stories.label}
            </p>

            <h2 className="font-serif text-4xl text-charcoal">
              {T.stories.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <StoryCard
              date="September 2024"
              title="Rex takes his first steps outside"
              body="Three weeks after emergency surgery, Rex walked in the paddock for the first time."
              photo="https://images.unsplash.com/photo-1783804450453-6a87fbef9369?w=700&h=480&fit=crop&auto=format"
              alt="A brown horse standing in a field at twilight"
              horseId="rex"
              navigate={navigate}
            />

            <StoryCard
              date="August 2024"
              title="Luna accepts her first halter"
              body="After eight weeks of patient groundwork, Luna was walked on a lead for the first time."
              photo="https://images.unsplash.com/photo-1777133025718-ca8a34cdcd7d?w=700&h=480&fit=crop&auto=format"
              alt="A horse grazing in a misty, sunlit field"
              horseId="luna"
              navigate={navigate}
            />

            <StoryCard
              date="July 2024"
              title="Bruno cleared for paddock time"
              body="Eight months after his foreleg surgery, Bruno's vet gave the green light for limited paddock time."
              photo="https://images.unsplash.com/photo-1772902540156-e298bcc8e3cc?w=700&h=480&fit=crop&auto=format"
              alt="Two horses grazing in a field at sunset"
              horseId="bruno"
              navigate={navigate}
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-cream-dark py-20 md:py-28 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">
                {T.contact.label}
              </p>

              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
                {T.contact.heading}
              </h2>

              <p className="text-charcoal/60 leading-relaxed mb-8">
                {T.contact.sub}
              </p>

              <div className="space-y-4 text-sm">
                <ContactRow
                  icon={<IconPin />}
                  label={T.contact.visitUs}
                >
                  Paseky 47, 756 57 Valašská Bystřice, Czech Republic
                </ContactRow>

                <ContactRow
                  icon={<IconMail />}
                  label={T.contact.email}
                >
                  <a
                    href="mailto:info@freehorses.org"
                    className="text-brown hover:underline"
                  >
                    info@freehorses.org
                  </a>
                </ContactRow>

                <ContactRow
                  icon={<IconPhone />}
                  label={T.contact.phone}
                >
                  <a
                    href="tel:+420603123456"
                    className="text-brown hover:underline"
                  >
                    +420 603 123 456
                  </a>
                </ContactRow>

                <ContactRow
                  icon={<IconClock />}
                  label={T.contact.hours}
                >
                  {T.contact.hoursVal}
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
                <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/40 mb-2">
                  {T.contact.bankTransfer}
                </p>

                <p className="text-sm text-charcoal/60 mb-1">
                  Free Horses z.s.
                </p>

                <p className="font-mono text-sm text-charcoal">
                  CZ65 0800 0000 1920 0014 5399
                </p>

                <p className="text-xs text-charcoal/40 mt-1">
                  Česká spořitelna · BIC: GIBACZPX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HorseCard({
  horse,
  navigate,
}: {
  horse: Horse;
  navigate: (page: string, id?: string) => void;
}) {
  const status = statusColors[horse.status];

  return (
    <button
      onClick={() => navigate('horse', horse.id)}
      className="group text-left"
    >
      <div className="aspect-[3/4] bg-cream-deeper rounded overflow-hidden mb-2">
        <img
          src={horse.photo}
          alt={horse.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div>
        <div className="flex items-start justify-between gap-1 mb-0.5">
          <h3 className="font-bold text-[17px] md:text-sm text-charcoal leading-tight">
            {horse.name}
          </h3>

          <span
            className={`text-[13px] font-semibold px-1.5 py-0.5 rounded-sm shrink-0 mt-0.5 leading-tight ${status.cls}`}
          >
            {statusLabels[horse.status]}
          </span>
        </div>

        
      </div>
    </button>
  );
}

function HelpCard({
  icon,
  title,
  body,
  cta,
  onClick,
  accent,
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
    brown:
      'border-brown/30 text-brown hover:bg-brown hover:text-cream',
    green:
      'border-green/30 text-green hover:bg-green hover:text-cream',
    sky:
      'border-sky/40 text-sky hover:bg-sky hover:text-charcoal',
  }[accent];

  return (
    <div className="border border-charcoal/10 rounded-sm p-7 bg-cream flex flex-col">
      <div
        className={`w-11 h-11 rounded-sm flex items-center justify-center mb-5 ${accentCls}`}
      >
        {icon}
      </div>

      <h3 className="font-serif text-2xl text-charcoal mb-3">
        {title}
      </h3>

      <p className="text-sm text-charcoal/60 leading-relaxed flex-1 mb-6">
        {body}
      </p>

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
  date,
  title,
  body,
  photo,
  alt,
  horseId,
  navigate,
}: {
  date: string;
  title: string;
  body: string;
  photo: string;
  alt: string;
  horseId: string;
  navigate: (page: string, id?: string) => void;
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

      <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/35 mb-2">
        {date}
      </p>

      <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-brown transition-colors">
        {title}
      </h3>

      <p className="text-sm text-charcoal/60 leading-relaxed">
        {body}
      </p>
    </button>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-green mt-0.5 shrink-0">
        {icon}
      </div>

      <div>
        <div className="text-xs font-semibold text-charcoal/40 uppercase tracking-widest mb-0.5">
          {label}
        </div>

        <div className="text-charcoal/75">{children}</div>
      </div>
    </div>
  );
}

function IconHeart() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconHands() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

function IconHorse() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3,18 C3,18 5,12 9,10 C11,9 13,10 15,8 C17,6 17,4 19,4 L21,4" />
      <path d="M9,10 L9,18" />
      <path d="M15,13 L15,18" />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
