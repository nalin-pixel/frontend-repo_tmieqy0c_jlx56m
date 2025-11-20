export default function EduPopularCourses() {
  const courses = [
    { name: 'B.Tech', color: 'from-[#FF6F00] to-[#FFA000]', desc: 'Engineering across CS, ECE, ME, CE, AI/ML' },
    { name: 'MBA', color: 'from-blue-600 to-blue-400', desc: 'Marketing, Finance, HR, Operations, Analytics' },
    { name: 'MBBS', color: 'from-[#138808] to-emerald-500', desc: 'Medicine and Surgery with top colleges' },
    { name: 'BBA', color: 'from-indigo-600 to-indigo-400', desc: 'Foundations in business and management' },
    { name: 'M.Tech', color: 'from-purple-600 to-fuchsia-500', desc: 'Advanced engineering specializations' },
    { name: 'MCA', color: 'from-cyan-600 to-teal-400', desc: 'Computer applications & software dev' },
    { name: 'BCA', color: 'from-rose-500 to-orange-400', desc: 'Undergrad computer applications' },
    { name: 'PGDM', color: 'from-sky-500 to-blue-300', desc: 'Industry-focused management program' },
    { name: 'ANM', color: 'from-emerald-600 to-green-400', desc: 'Auxiliary Nursing & Midwifery' },
    { name: 'GNM', color: 'from-lime-600 to-green-400', desc: 'General Nursing & Midwifery' },
  ]

  return (
    <section id="courses" className="py-14 sm:py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Popular Courses</h2>
            <p className="mt-1 text-slate-400">Explore top programs chosen by students across India</p>
          </div>
          <a href="#counseling" className="hidden sm:inline-flex text-sm text-blue-400 hover:text-blue-300">Need help choosing?</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.map((c) => (
            <article key={c.name} className="group rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 transition-colors p-5">
              <div className={`h-28 rounded-xl bg-gradient-to-br ${c.color} opacity-90 group-hover:opacity-100 transition`}></div>
              <h3 className="mt-4 text-white font-semibold">{c.name}</h3>
              <p className="text-sm text-slate-400">{c.desc}</p>
              <div className="mt-4">
                <button className="text-sm text-blue-400 hover:text-blue-300">View colleges →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
