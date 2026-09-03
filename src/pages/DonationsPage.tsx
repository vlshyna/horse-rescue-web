import { campaigns } from '../data';
import { MotifLine } from '../components/Motif';
import type { Campaign } from '../data';

interface DonationsPageProps {
  navigate: (page: string, id?: string) => void;
}

export default function DonationsPage({ navigate }: DonationsPageProps) {
  const active = campaigns.find((c) => c.status === 'active')!;
  const past = campaigns.filter((c) => c.status === 'completed');

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-charcoal py-16 md:py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 text-charcoal-light/30 pointer-events-none">
          <MotifLine className="h-14" strokeWidth={0.75} />
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
          <p className="text-xs font-semibold tracking-widest uppercase text-sky mb-3">Support & transparency</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream mb-5">Donations & Reports</h1>
          <p className="text-cream/55 max-w-xl leading-relaxed">
            Every fundraiser we run is fully documented. Below you'll find the current campaign and a complete archive of past fundraisers with detailed spending reports.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">

        {/* Active campaign */}
        <section className="mb-20 md:mb-28">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-6">Active now</p>
          <ActiveCampaignCard campaign={active} navigate={navigate} />
        </section>

        {/* Transparency note */}
        <section className="mb-16 md:mb-24 bg-cream-dark border border-charcoal/8 rounded-sm p-7 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl text-charcoal mb-4">How we handle donations</h2>
              <div className="space-y-3 text-sm text-charcoal/65 leading-relaxed">
                <p>
                  We run targeted fundraisers with a specific purpose and budget. When a campaign is complete,
                  we publish a full report showing every expense — the vendor, the amount, and what it achieved.
                </p>
                <p>
                  If a campaign raises more than its target, the surplus is applied to an explicitly stated secondary
                  purpose or carried into the next campaign — never held opaque in a general fund.
                </p>
                <p>
                  If we fall short, we tell you exactly what we cut or deferred, and how we covered the gap.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '4', label: 'Campaigns completed' },
                { num: '100%', label: 'Have published reports' },
                { num: '€0', label: 'Unaccounted surplus' },
                { num: '€33k+', label: 'Total raised to date' },
              ].map((s) => (
                <div key={s.label} className="bg-cream border border-charcoal/8 rounded-sm p-4">
                  <div className="font-serif text-3xl text-charcoal mb-1">{s.num}</div>
                  <div className="text-xs text-charcoal/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past campaigns */}
        <section>
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-3">Archive</p>
          <h2 className="font-serif text-4xl text-charcoal mb-8">Past fundraisers</h2>
          <div className="space-y-5">
            {past.map((campaign) => (
              <PastCampaignRow key={campaign.id} campaign={campaign} navigate={navigate} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ActiveCampaignCard({ campaign, navigate }: { campaign: Campaign; navigate: (p: string, id?: string) => void }) {
  const pct = Math.min(100, Math.round((campaign.raised / campaign.target) * 100));
  const remaining = campaign.target - campaign.raised;

  return (
    <div className="border border-charcoal/10 rounded-sm overflow-hidden bg-cream">
      <div className="grid md:grid-cols-5">
        <div className="md:col-span-3 p-7 md:p-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-sky/15 text-sky px-2.5 py-1 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
              Active
            </span>
            <span className="text-xs text-charcoal/40">Since {campaign.startDate}</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">{campaign.title}</h2>
          <p className="text-charcoal/65 leading-relaxed mb-8 text-sm md:text-base">
            {campaign.description}
          </p>

          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-2.5">
              <span className="font-serif text-3xl text-charcoal">€{campaign.raised.toLocaleString()}</span>
              <span className="text-sm text-charcoal/45">of €{campaign.target.toLocaleString()} goal</span>
            </div>
            <div className="h-2.5 bg-cream-dark rounded-full overflow-hidden">
              <div
                className="h-full bg-brown rounded-full transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-charcoal/40">
              <span>{pct}% funded</span>
              <span>€{remaining.toLocaleString()} still needed</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="bg-brown text-cream text-sm font-semibold px-6 py-3 rounded-sm hover:bg-brown-hover transition-colors">
              Donate to this campaign
            </button>
            <a
              href="mailto:info@openpastures.org?subject=Bank transfer donation"
              className="border border-charcoal/15 text-charcoal/70 text-sm font-semibold px-5 py-3 rounded-sm hover:border-charcoal/30 hover:text-charcoal transition-colors"
            >
              Bank transfer
            </a>
          </div>
        </div>

        <div className="md:col-span-2 bg-cream-dark border-t md:border-t-0 md:border-l border-charcoal/8 p-7 md:p-10 flex flex-col justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/35 mb-4">Horses in this campaign</p>
            <div className="flex flex-wrap gap-2">
              {(campaign.horses || []).map((id) => (
                <button
                  key={id}
                  onClick={() => navigate('horse', id)}
                  className="text-xs font-medium bg-cream border border-charcoal/12 px-2.5 py-1 rounded-sm text-charcoal/65 hover:border-brown/40 hover:text-brown transition-colors capitalize"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/35 mb-3">Bank transfer details</p>
            <div className="space-y-1.5 text-sm">
              <div>
                <span className="text-charcoal/40 text-xs">Account name</span>
                <p className="text-charcoal/75 font-medium">Open Pastures z.s.</p>
              </div>
              <div>
                <span className="text-charcoal/40 text-xs">IBAN</span>
                <p className="font-mono text-charcoal/75">CZ65 0800 0000 1920 0014 5399</p>
              </div>
              <div>
                <span className="text-charcoal/40 text-xs">Reference</span>
                <p className="font-mono text-charcoal/75">WINTER-2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PastCampaignRow({ campaign, navigate }: { campaign: Campaign; navigate: (p: string, id?: string) => void }) {
  const pct = Math.min(100, Math.round((campaign.raised / campaign.target) * 100));
  const exceeded = campaign.raised > campaign.target;

  return (
    <div className="border border-charcoal/10 rounded-sm bg-cream p-6 md:p-7">
      <div className="grid md:grid-cols-4 gap-5 md:gap-8 items-start">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-cream-dark text-charcoal/50 px-2 py-0.5 rounded-sm">
              Completed
            </span>
            {campaign.startDate && (
              <span className="text-xs text-charcoal/35">
                {campaign.startDate}{campaign.endDate ? ` – ${campaign.endDate}` : ''}
              </span>
            )}
          </div>
          <h3 className="font-serif text-2xl text-charcoal mb-2">{campaign.title}</h3>
          <p className="text-sm text-charcoal/55 leading-relaxed line-clamp-2">{campaign.description}</p>
        </div>

        <div className="md:col-span-1">
          <div className="flex justify-between text-sm mb-1.5">
            <span className={`font-semibold ${exceeded ? 'text-green' : 'text-charcoal'}`}>
              €{campaign.raised.toLocaleString()}
            </span>
            <span className="text-charcoal/40">€{campaign.target.toLocaleString()}</span>
          </div>
          <div className="h-1.5 bg-cream-dark rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${exceeded ? 'bg-green' : 'bg-brown'}`}
              style={{ width: `${Math.min(100, pct)}%` }}
            />
          </div>
          <div className="mt-1 text-xs text-charcoal/35">
            {exceeded ? `+€${(campaign.raised - campaign.target).toLocaleString()} over target` : `${pct}% of goal`}
          </div>
        </div>

        <div className="md:col-span-1 flex md:justify-end items-start">
          {campaign.reportAvailable ? (
            <button
              onClick={() => navigate('report', campaign.id)}
              className="text-sm font-semibold text-brown border border-brown/25 px-4 py-2 rounded-sm hover:bg-brown hover:text-cream transition-colors flex items-center gap-1.5"
            >
              View report
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          ) : (
            <span className="text-xs text-charcoal/35 italic">Report pending</span>
          )}
        </div>
      </div>
    </div>
  );
}
