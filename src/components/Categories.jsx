import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories, bikes } from '../data/bikes'

export default function Categories() {
  const featuredByCategory = categories.map(cat => ({
    ...cat,
    items: bikes.filter(b => b.category === cat.slug).slice(0, 3)
  }))

  return (
    <section id="categories" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(244,63,94,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Motorbike Categories</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">From razor‑sharp track weapons to continent‑crossing explorers, find your perfect machine.</p>
          </div>
          <Link to="/categories" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10">View all</Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredByCategory.map(cat => (
            <motion.div key={cat.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={cat.image} alt={cat.name} className="h-40 w-full object-cover opacity-80 transition group-hover:scale-105 duration-500" loading="lazy" />
              <div className="p-5">
                <span className={`inline-block text-xs font-semibold text-white/90 px-2 py-1 rounded bg-gradient-to-r ${cat.accent}`}>{cat.name}</span>
                <p className="mt-3 text-slate-300 text-sm line-clamp-3">{cat.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <Link to={`/categories/${cat.slug}`} className="text-white/90 hover:text-white text-sm">Explore</Link>
                  <span className="text-xs text-slate-400">{cat.items.length} models</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
