export default function EduTrendingColleges() {
  const colleges = [
    { name: 'IIT Bombay', city: 'Mumbai', rating: 4.9, img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop' },
    { name: 'IIM Ahmedabad', city: 'Ahmedabad', rating: 4.8, img: 'https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=1600&auto=format&fit=crop' },
    { name: 'BITS Pilani', city: 'Pilani', rating: 4.7, img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1600&auto=format&fit=crop' },
    { name: 'AIIMS Delhi', city: 'New Delhi', rating: 4.8, img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="colleges" className="py-14 sm:py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Trending Colleges</h2>
            <p className="mt-1 text-slate-400">Top-rated institutes students are exploring right now</p>
          </div>
          <a href="#counseling" className="hidden sm:inline-flex text-sm text-blue-400 hover:text-blue-300">See more</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {colleges.map((clg) => (
            <article key={clg.name} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 transition-colors">
              <img src={clg.img} alt={clg.name + ' campus'} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-white font-semibold">{clg.name}</h3>
                <p className="text-sm text-slate-400">{clg.city}</p>
                <div className="mt-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white">Rating {clg.rating}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
