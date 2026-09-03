import { campaigns } from '../data';
import { MotifLine } from '../components/Motif';

interface ReportPageProps {
  reportId: string;
  navigate: (page: string, id?: string) => void;
}

export default function ReportPage({ reportId, navigate }: ReportPageProps) {
  const campaign = campaigns.find((c) => c.id === reportId);

  if (!campaign || !campaign.report) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <p className="font-serif text-3xl text-charcoal mb-3">Report not found</p>
          <button onClick={() => navigate('donations')} className="text-brown text-sm hover:underline">
            ← Back to donations
          </button>
        </div>
      </div>
    );
  }

  const { report } = campaign;
  const totalSpent = report.spending.reduce((sum, s) => sum + s.amount, 0);
  const exceeded = campaign.raised > campaign.target;

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-charcoal py-16 md:py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 text-charcoal-light/30 pointer-events-none">
          <MotifLine className="h-12" strokeWidth={0.75} />
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
          <button
            onClick={() => navigate('donations')}
            className="text-cream/40 text-sm hover:text-cream/70 transition-colors mb-5 flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>
            Donations & Reports
          </button>
          <p className="text-xs font-semibold tracking-widest uppercase text-sky mb-3">Financial report</p>
          <h1 className="font-serif text-4xl md:text-6xl text-cream mb-4">{campaign.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-cream/45">
            <span>
              {campaign.startDate}{campaign.endDate ? ` – ${campaign.endDate}` : ''}
            </span>
            <span>·</span>
            <span>
              Raised: €{campaign.raised.toLocaleString()}{' '}
              {exceeded ? (
                <span className="text-green-light">(exceeded target by €{(campaign.raised - campaign.target).toLocaleString()})</span>
              ) : (
                <span>(of €{campaign.target.toLocaleString()} target)</span>
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
        {/* Summary */}
        <section className="mb-14 md:mb-18">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-4">Summary</p>
          <p className="text-charcoal/75 text-lg leading-relaxed max-w-3xl">{report.summary}</p>
        </section>

        <div className="mb-10">
          <MotifLine className="h-8 text-brown/20" strokeWidth={1} />
        </div>

        {/* Budget breakdown */}
        <section className="mb-14 md:mb-18">
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-green mb-2">Spending breakdown</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal">How the money was spent</h2>
            </div>
            <div className="text-right shrink-0">
              <div className="font-serif text-3xl text-charcoal">€{totalSpent.toLocaleString()}</div>
              <div className="text-xs text-charcoal/40 mt-0.5">total documented</div>
            </div>
          </div>

          {/* Visual bars */}
          <div className="space-y-4 mb-10">
            {report.spending.map((item) => {
              const itemPct = Math.round((item.amount / totalSpent) * 100);
              return (
                <div key={item.category}>
                  <div className="flex justify-between items-baseline gap-2 mb-1.5">
                    <span className="text-sm font-semibold text-charcoal">{item.category}</span>
                    <span className="text-sm font-semibold text-charcoal shrink-0">
                      €{item.amount.toLocaleString()}
                      <span className="text-charcoal/35 font-normal ml-1.5 text-xs">({itemPct}%)</span>
                    </span>
                  </div>
                  <div className="h-1.5 bg-cream-dark rounded-full overflow-hidden mb-1.5">
                    <div
                      className="h-full bg-brown rounded-full transition-all duration-500"
                      style={{ width: `${itemPct}%` }}
                    />
                  </div>
                  <p className="text-xs text-charcoal/50 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Itemized table */}
          <div className="border border-charcoal/10 rounded-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-cream-dark border-b border-charcoal/10">
                  <th className="text-left text-xs font-semibold tracking-widest uppercase text-charcoal/40 px-5 py-3">Category</th>
                  <th className="text-right text-xs font-semibold tracking-widest uppercase text-charcoal/40 px-5 py-3">Amount</th>
                  <th className="text-right text-xs font-semibold tracking-widest uppercase text-charcoal/40 px-5 py-3 hidden md:table-cell">Share</th>
                </tr>
              </thead>
              <tbody>
                {report.spending.map((item, i) => (
                  <tr key={item.category} className={`border-b border-charcoal/8 last:border-0 ${i % 2 === 0 ? 'bg-cream' : 'bg-cream-dark/30'}`}>
                    <td className="px-5 py-3.5 text-charcoal/80 font-medium">{item.category}</td>
                    <td className="px-5 py-3.5 text-right text-charcoal font-semibold tabular-nums">€{item.amount.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-right text-charcoal/40 hidden md:table-cell">
                      {Math.round((item.amount / totalSpent) * 100)}%
                    </td>
                  </tr>
                ))}
                <tr className="bg-cream-dark border-t-2 border-charcoal/15">
                  <td className="px-5 py-3.5 text-xs font-semibold uppercase tracking-widest text-charcoal/50">Total documented</td>
                  <td className="px-5 py-3.5 text-right font-serif text-lg text-charcoal tabular-nums">€{totalSpent.toLocaleString()}</td>
                  <td className="px-5 py-3.5 text-right text-charcoal/40 hidden md:table-cell">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quote */}
        <section className="mb-14 md:mb-18">
          <blockquote className="border-l-2 border-brown pl-7 py-2">
            <p className="font-serif text-2xl md:text-3xl text-charcoal leading-snug mb-4">
              "{report.quote}"
            </p>
            <footer className="text-sm text-charcoal/50">— {report.quoteAuthor}</footer>
          </blockquote>
        </section>

        {/* Outcomes */}
        <section className="mb-14 md:mb-18">
          <p className="text-xs font-semibold tracking-widest uppercase text-green mb-4">Outcomes</p>
          <h2 className="font-serif text-3xl text-charcoal mb-6">What this campaign achieved</h2>
          <ul className="space-y-3">
            {report.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <span className="mt-1.5 w-5 h-5 rounded-sm bg-green/15 text-green flex items-center justify-center shrink-0">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2 6 5 9 10 3" />
                  </svg>
                </span>
                <span className="text-charcoal/75 leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Remaining funds */}
        <section className="bg-cream-dark border border-charcoal/8 rounded-sm p-6 md:p-8 mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/40 mb-3">Remaining funds</p>
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-serif text-4xl text-charcoal">€{report.remainingFunds.toLocaleString()}</span>
            <span className="text-sm text-charcoal/45">unspent at close of campaign</span>
          </div>
          <p className="text-sm text-charcoal/65 leading-relaxed">{report.remainingNote}</p>
        </section>

        {/* Back to donations */}
        <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between gap-4 flex-wrap">
          <button
            onClick={() => navigate('donations')}
            className="text-sm font-semibold text-charcoal/60 hover:text-charcoal transition-colors flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>
            Back to all reports
          </button>
          <p className="text-xs text-charcoal/35">
            Questions? Write to{' '}
            <a href="mailto:info@openpastures.org" className="text-brown hover:underline">
              info@openpastures.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
