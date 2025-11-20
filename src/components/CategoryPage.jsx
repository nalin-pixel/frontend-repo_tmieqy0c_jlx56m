import { useParams, Link } from 'react-router-dom'
import { bikes, categories } from '../data/bikes'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find(c => c.slug === slug)
  const items = bikes.filter(b => b.category === slug)

  if (!category) return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">Category not found.</div>
  )

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <Link to="/categories" className="text-slate-300 hover:text-white">← Back to Categories</Link>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-white">{category.name}</h1>
          <p className="mt-2 text-slate-300 max-w-3xl">{category.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(b => (
            <Link key={b.id} to={`/bikes/${b.id}`} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src={b.image} alt={b.name} className="h-48 w-full object-cover transition group-hover:scale-105 duration-500" loading="lazy" />
              <div className="p-5">
                <h3 className="text-white font-semibold">{b.name}</h3>
                <p className="text-slate-300 text-sm line-clamp-2">{b.blurb}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white/90">${b.price.toLocaleString()}</span>
                  <span className="text-xs text-slate-400">{b.specs.power}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
