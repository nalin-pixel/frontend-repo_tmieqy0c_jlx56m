import { Link } from 'react-router-dom'
import { categories } from '../data/bikes'

export default function CategoriesIndex() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-white">All Categories</h1>
        <p className="mt-2 text-slate-300 max-w-2xl">Pick your discipline — sport, cruiser, adventure, or electric.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(c => (
            <Link key={c.slug} to={`/categories/${c.slug}`} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={c.image} alt={c.name} className="h-40 w-full object-cover opacity-80 transition group-hover:scale-105 duration-500" loading="lazy" />
              <div className="p-5">
                <h3 className="text-white font-semibold">{c.name}</h3>
                <p className="text-slate-300 text-sm line-clamp-2">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
