import { horses } from '../data';
import type { HorseStatus } from '../data';
import { useLang } from '../LangContext';
import { translations } from '../i18n';

interface HorsePageProps {
  horseId: string;
  navigate: (page: string, id?: string, section?: string) => void;
}

const statusLabels: Record<
  HorseStatus,
  {
    label: string;
    cls: string;
    dot: string;
  }
> = {
  fund: {
    label: 'кінь фонду',
    cls: 'bg-[#E4ECE0] text-[#3F5A38] border-[#C8D8C0]',
    dot: 'bg-[#4D6A3A]',
  },

  private: {
    label: 'приватний кінь',
    cls: 'bg-[#E8E3EC] text-[#5B4968] border-[#D4C9DA]',
    dot: 'bg-[#705B7D]',
  },

  memory: {
    label: 'кінь у пам’яті',
    cls: 'bg-[#E9E4DC] text-[#675D50] border-[#D8D0C5]',
    dot: 'bg-[#766B5C]',
  },
};

export default function HorsePage({
  horseId,
  navigate,
}: HorsePageProps) {
  const { lang } = useLang();
  const T = translations[lang];

  const horse = horses.find((h) => h.id === horseId);

  if (!horse) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <p className="font-serif text-3xl text-charcoal mb-3">
            Horse not found
          </p>

          <button
            onClick={() =>
              navigate('home', undefined, 'horses')
            }
            className="text-brown text-sm hover:underline"
          >
            ← {T.horsePage.allHorses}
          </button>
        </div>
      </div>
    );
  }

  const status = statusLabels[horse.status];

  const otherHorses = horses
    .filter((h) => h.id !== horse.id)
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-80 bg-charcoal pt-16">
        <img
          src={horse.heroPhoto}
          alt={horse.name}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-5 md:px-8 pb-10 md:pb-14">
          <button
            onClick={() =>
              navigate('home', undefined, 'horses')
            }
            className="text-cream/50 text-sm hover:text-cream/80 transition-colors mb-4 flex items-center gap-1.5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>

            {T.horsePage.allHorses}
          </button>

          <div className="flex flex-wrap items-end gap-4">
            <h1 className="font-serif text-5xl md:text-7xl text-cream">
              {horse.name}
            </h1>

            <div
              className={`mb-2 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-sm border ${status.cls}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
              />

              {status.label}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Main narrative */}
          <div className="md:col-span-2 space-y-12">
            {/* Quick info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <BioItem
                label="Роки життя"
                value={horse.age}
              />

              <BioItem
                label="Статус"
                value={status.label}
              />
            </div>

            {/* Short bio */}
            <div>
              <h2 className="font-serif text-3xl text-charcoal mb-4">
                {horse.shortBio}
              </h2>
            </div>

            {/* Rescue story */}
            <div>
              <h2 className="font-serif text-3xl text-charcoal mb-5">
                {T.horsePage.rescueStory}
              </h2>

              <div className="space-y-4">
                {horse.rescueStory
                  .split('\n\n')
                  .map((para, i) => (
                    <p
                      key={i}
                      className="text-charcoal/70 leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
              </div>
            </div>

            {/* Additional photos */}
            <div>
              <h2 className="font-serif text-3xl text-charcoal mb-5">
                Додаткові фото
              </h2>

              {horse.additionalPhotos.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {horse.additionalPhotos.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] bg-cream-dark rounded overflow-hidden"
                    >
                      <img
                        src={src}
                        alt={`${horse.name} — фото ${i + 2}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="aspect-[16/9] bg-cream-dark border border-charcoal/8 rounded-sm flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="text-charcoal/25 mb-3">
                      <PhotoIcon />
                    </div>

                    <p className="text-sm text-charcoal/40">
                      Додаткові фото будуть додані пізніше
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-cream-dark border border-charcoal/8 rounded-sm p-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/40 mb-2">
                Про коня
              </p>

              <p className="text-charcoal font-serif text-xl">
                {horse.name}
              </p>

              <p className="text-sm text-charcoal/55 mt-1">
                {horse.shortBio}
              </p>
            </div>

            <div className="bg-brown text-cream rounded-sm p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-cream/50 mb-3">
                Підтримати фонд
              </p>

              <p className="text-sm text-cream/65 leading-relaxed mb-5">
                Ваша підтримка допомагає нам продовжувати рятувати
                коней та забезпечувати їм безпечне життя.
              </p>

              <button
                onClick={() => navigate('donations')}
                className="w-full bg-cream text-brown text-sm font-semibold py-3 rounded-sm hover:bg-cream-dark transition-colors"
              >
                Підтримати фонд
              </button>
            </div>
          </div>
        </div>

        {/* Other horses */}
        {otherHorses.length > 0 && (
          <div className="mt-20 md:mt-28 pt-12 border-t border-charcoal/10">
            <h2 className="font-serif text-3xl text-charcoal mb-8">
              {T.horsePage.othersHeading}
            </h2>

            <div className="grid sm:grid-cols-3 gap-6">
              {otherHorses.map((h) => {
                const s = statusLabels[h.status];

                return (
                  <button
                    key={h.id}
                    onClick={() =>
                      navigate('horse', h.id)
                    }
                    className="group text-left flex gap-4 items-center border border-charcoal/8 rounded-sm p-4 bg-cream hover:border-charcoal/20 transition-colors"
                  >
                    <div className="w-16 h-16 shrink-0 rounded-sm overflow-hidden bg-cream-dark">
                      <img
                        src={h.photo}
                        alt={h.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div>
                      <p className="font-serif text-lg text-charcoal">
                        {h.name}
                      </p>

                      <p className="text-xs text-charcoal/45">
                        {h.age}
                      </p>

                      <span
                        className={`text-xs font-semibold px-1.5 py-0.5 rounded-sm border mt-1 inline-block ${s.cls}`}
                      >
                        {s.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BioItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-cream-dark border border-charcoal/8 rounded-sm px-4 py-3">
      <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/35 mb-1">
        {label}
      </p>

      <p className="text-sm font-semibold text-charcoal">
        {value}
      </p>
    </div>
  );
}

function PhotoIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}
