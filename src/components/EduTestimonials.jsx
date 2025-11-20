export default function EduTestimonials() {
  const items = [
    {
      name: 'Aarav Gupta',
      text: 'Siksha India helped me shortlist colleges for B.Tech and guided me through the counseling process. The team was patient and professional.',
      course: 'B.Tech (CSE)'
    },
    {
      name: 'Neha Sharma',
      text: 'We found the right MBA program with clarity on placements and fees. The free counseling call was super useful for my parents too.',
      course: 'MBA (Marketing)'
    },
    {
      name: 'Rahul Verma',
      text: 'I was confused between MCA and M.Tech. Got clear guidance and college comparisons. Highly recommend!',
      course: 'MCA'
    }
  ]

  return (
    <section className="py-14 sm:py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">What students say</h2>
        <p className="mt-1 text-slate-400">Real stories from students and parents across India</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
              <blockquote className="text-slate-200">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">— {t.name}, {t.course}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
