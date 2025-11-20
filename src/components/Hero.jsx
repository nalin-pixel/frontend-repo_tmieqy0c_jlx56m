import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs tracking-wider uppercase">
            Performance • Futuristic • Electric Speed
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ride the future. Feel the apex.
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Apex Moto curates the fastest sport machines, long‑haul cruisers, go‑anywhere adventure rigs, and next‑gen electrics. Built for riders who live for the redline.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#categories" className="px-5 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold shadow-lg shadow-rose-500/20">
              Explore Categories
            </a>
            <a href="#reviews" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">
              Read Reviews
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
