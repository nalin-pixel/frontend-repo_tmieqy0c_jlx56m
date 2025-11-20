import { Star } from 'lucide-react'

const mockReviews = [
  { user: 'RiderX', rating: 5, text: 'The R1 is pure adrenaline. Feels like a scalpel on the track.' },
  { user: 'CruiseKing', rating: 4, text: 'Fat Bob torque is addictive. Comfort for days.' },
  { user: 'TrailWolf', rating: 5, text: 'GS Adventure eats miles. Confidence on any surface.' },
  { user: 'VoltRush', rating: 4, text: 'Zero SR/F surprised me. Instant punch and premium feel.' }
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Real rider reviews</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">Unfiltered impressions from riders who chase the horizon.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockReviews.map((r, i) => (
            <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} className={idx < r.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'} />
                  ))}
                </div>
                <span className="text-slate-300 text-sm">by {r.user}</span>
              </div>
              <p className="mt-3 text-white/90">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
