import { horses } from '../data';
import { useLang } from '../LangContext';
import { translations } from '../i18n';

interface HorsePageProps {
  horseId: string;
  navigate: (page: string, id?: string, section?: string) => void;
}

const statusLabels: Record<string, { cls: string; dot: string }> = {
  critical: { cls: 'bg-[#F5E8E8] text-[#8B2020] border-[#E8C8C8]', dot: 'bg-[#C02020]' },
  recovering: { cls: 'bg-[#F5F0E0] text-[#7A5218] border-[#E8DCB8]', dot: 'bg-[#C07818]' },
  stable: { cls: 'bg-[#E8EEE4] text-[#3D5230] border-[#C8D8BC]', dot: 'bg-[#4D6A3A]' },
  thriving: { cls: 'bg-[#D8E6D2] text-[#2A4A22] border-[#B8D2AC]', dot: 'bg-[#3A6030]' },
};

export default function HorsePage({ horseId, navigate }: HorsePageProps) {
  const { lang } = useLang();
  const T = translations[lang];
  const horse = horses.find((h) => h.id === horseId);

  if (!horse) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <p className="font-serif text-3xl text-charcoal mb-3">Horse not found</p>
          <button onClick={() => navigate('home', undefined, 'horses')} className="text-brown text-sm hover:underline">
            ← {T.horsePage.allHorses}
          </button>
        </div>
      </div>
    );
  }

  const status = statusLabels[horse.status];
  const statusLabel = T.status[horse.status as keyof typeof T.status];
  const genderLabel = T.horsePage[horse.gender as 'mare' | 'stallion' | 'gelding'];
  const otherHorses = horses.filter((h) => h.id !== horse.id).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-80 bg-charcoal pt-16">
        <img
          src={horse.heroPhoto}
          alt={`${horse.name} — ${horse.breed}`}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-5 md:px-8 pb-10 md:pb-14">
          <button
            onClick={() => navigate('home', undefined, 'horses')}
            className="text-cream/50 text-sm hover:text-cream/80 transition-colors mb-4 flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>
            {T.horsePage.allHorses}
          </button>
          <div className="flex flex-wrap items-end gap-4">
            <h1 className="font-serif text-5xl md:text-7xl text-cream">{horse.name}</h1>
            <div className={`mb-2 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-sm border ${status.cls}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
              {statusLabel}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Left: main narrative */}
          <div className="md:col-span-2 space-y-12">
            {/* Quick bio */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              <BioItem label={T.horsePage.age} value={`${horse.age} ${T.horsePage.years}`} />
              <BioItem label={T.horsePage.breed} value={horse.breed} />
              <BioItem label={T.horsePage.gender} value={genderLabel} />
              <BioItem label={T.horsePage.since} value={horse.rescuedDate} />
            </div>

            {/* Rescue story */}
            <div>
              <h2 className="font-serif text-3xl text-charcoal mb-5">{T.horsePage.rescueStory}</h2>
              <div className="space-y-4">
                {horse.rescueStory.split('\n\n').map((para, i) => (
                  <p key={i} className="text-charcoal/70 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>

            {/* Additional photos */}
            {horse.additionalPhotos.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {horse.additionalPhotos.map((src, i) => (
                  <div key={i} className="aspect-[4/3] bg-cream-dark rounded overflow-hidden">
                    <img src={src} alt={`${horse.name} at Free Horses — photo ${i + 2}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            )}

            {/* Current condition */}
            <div>
              <h2 className="font-serif text-3xl text-charcoal mb-4">{T.horsePage.currentCondition}</h2>
              <div className="bg-cream-dark border border-charcoal/8 rounded-sm p-6">
                <p className="text-charcoal/70 leading-relaxed">{horse.currentCondition}</p>
              </div>
            </div>
          </div>

          {/* Right: sidebar */}
          <div className="space-y-6">
            {/* Location */}
            <div className="bg-cream-dark border border-charcoal/8 rounded-sm p-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/40 mb-2">{T.horsePage.location}</p>
              <p className="text-charcoal font-medium">{horse.location}</p>
              <p className="text-sm text-charcoal/55 mt-0.5">{T.horsePage.sanctuary}</p>
            </div>

            {/* Needs */}
            <div className="border border-charcoal/10 rounded-sm p-5 bg-cream">
              <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/40 mb-3">{T.horsePage.currentNeeds}</p>
              <ul className="space-y-2">
                {horse.needs.map((need) => (
                  <li key={need} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                    {need}
                  </li>
                ))}
              </ul>
            </div>

            {/* Monthly cost + CTA */}
            <div className="bg-brown text-cream rounded-sm p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-cream/50 mb-3">{T.horsePage.monthlyCost}</p>
              <div className="font-serif text-4xl text-cream mb-1">€{horse.monthlyNeed}</div>
              <p className="text-xs text-cream/55 mb-5">{T.horsePage.monthlySub}</p>
              <button
                onClick={() => navigate('donations')}
                className="w-full bg-cream text-brown text-sm font-semibold py-3 rounded-sm hover:bg-cream-dark transition-colors"
              >
                {T.horsePage.support} {horse.name}
              </button>
              <p className="text-xs text-cream/40 mt-3 text-center">{T.horsePage.anyAmount}</p>
            </div>

            {/* Adoption */}
            {horse.status === 'thriving' && (
              <div className="border border-green/30 bg-[#E8EEE4] rounded-sm p-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-green/60 mb-2">{T.horsePage.adoptionLabel}</p>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  {horse.name} {T.horsePage.adoptionBody}
                </p>
                <button
                  onClick={() => navigate('home', undefined, 'contact')}
                  className="mt-3 text-sm font-semibold text-green hover:underline"
                >
                  {T.horsePage.adoptionCta}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Other horses */}
        <div className="mt-20 md:mt-28 pt-12 border-t border-charcoal/10">
          <h2 className="font-serif text-3xl text-charcoal mb-8">{T.horsePage.othersHeading}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherHorses.map((h) => {
              const s = statusLabels[h.status];
              const sl = T.status[h.status as keyof typeof T.status];
              return (
                <button
                  key={h.id}
                  onClick={() => navigate('horse', h.id)}
                  className="group text-left flex gap-4 items-center border border-charcoal/8 rounded-sm p-4 bg-cream hover:border-charcoal/20 transition-colors"
                >
                  <div className="w-16 h-16 shrink-0 rounded-sm overflow-hidden bg-cream-dark">
                    <img src={h.photo} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-charcoal">{h.name}</p>
                    <p className="text-xs text-charcoal/45">{h.age} yrs · {h.breed}</p>
                    <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-sm border mt-1 inline-block ${s.cls}`}>{sl}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function BioItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-cream-dark border border-charcoal/8 rounded-sm px-4 py-3">
      <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/35 mb-1">{label}</p>
      <p className="text-sm font-semibold text-charcoal">{value}</p>
    </div>
  );
}
