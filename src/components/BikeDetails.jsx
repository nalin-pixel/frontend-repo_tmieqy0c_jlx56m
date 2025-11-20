import { useParams, Link } from 'react-router-dom'
import { bikes } from '../data/bikes'

export default function BikeDetails() {
  const { id } = useParams()
  const bike = bikes.find(b => b.id === id)
  if (!bike) return <div className="text-white p-10">Bike not found.</div>

  const specItem = (label, value) => (
    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
      <p className="text-xs text-slate-400 uppercase tracking-wide">{label}</p>
      <p className="mt-1 text-white font-semibold">{value}</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to={`/categories/${bike.category}`} className="text-slate-300 hover:text-white">← Back</Link>

        <div className="mt-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src={bike.image} alt={bike.name} className="w-full h-full object-cover" />
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white">{bike.name}</h1>
            <p className="mt-3 text-slate-300">{bike.blurb}</p>
            <p className="mt-4 text-2xl font-semibold text-white">${bike.price.toLocaleString()}</p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {specItem('Power', bike.specs.power)}
              {specItem('Weight', bike.specs.weight)}
              {specItem('Engine', bike.specs.engine)}
              {specItem('Top Speed', bike.specs.topSpeed)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
