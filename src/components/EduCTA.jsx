export default function EduCTA() {
  return (
    <section id="counseling" className="py-14 sm:py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#FF6F00] via-white to-[#138808] p-0.5">
          <div className="rounded-2xl bg-slate-950 p-6 sm:p-10 grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Free Counseling with Experts</h3>
              <p className="mt-2 text-slate-300">Get personalized guidance on course selection, eligibility, entrance exams, scholarships, and college applications.</p>
            </div>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input aria-label="Name" type="text" placeholder="Your name" className="w-full rounded-md bg-white px-3 py-2 text-slate-900 placeholder-slate-500" />
              <input aria-label="Phone" type="tel" placeholder="Phone number" className="w-full rounded-md bg-white px-3 py-2 text-slate-900 placeholder-slate-500" />
              <input aria-label="Course" type="text" placeholder="Interested course (e.g., B.Tech)" className="w-full rounded-md bg-white px-3 py-2 text-slate-900 placeholder-slate-500 sm:col-span-2" />
              <button type="button" className="rounded-md bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white font-medium sm:col-span-2">Request a callback</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
