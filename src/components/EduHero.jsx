import { motion } from 'framer-motion'

export default function EduHero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#FF6F00]/20 via-white/10 to-[#138808]/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-600/20 to-blue-400/10 blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 sm:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">India's trusted guidance for students & parents</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Find the right course and college with Siksha India
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl">
              Explore B.Tech, M.Tech, MBA, BBA, MCA, BCA, PGDM, ANM, GNM, MBBS and more. Get step-by-step admission help, college insights, and free counseling.
            </p>

            <div className="mt-6">
              <div className="relative">
                <input type="text" placeholder="Search courses, colleges, exams..." className="w-full rounded-xl bg-white text-slate-900 placeholder-slate-500 px-4 py-4 pr-28 shadow-xl focus:outline-none focus:ring-4 ring-blue-500/30" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white font-medium shadow">
                  Search
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-400">Popular: B.Tech, MBA, MBBS, BCA</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['B.Tech','MBA','MBBS','BBA','M.Tech','MCA','BCA','PGDM','ANM','GNM'].map((t) => (
                <span key={t} className="inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1 text-xs border border-white/10">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-2xl">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" role="img" aria-label="Students studying together"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 hidden sm:block">
              <div className="rounded-xl bg-white text-slate-900 px-4 py-3 shadow-xl">
                <p className="text-sm font-semibold">Free Counseling</p>
                <p className="text-xs text-slate-600">Talk to our experts today</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
