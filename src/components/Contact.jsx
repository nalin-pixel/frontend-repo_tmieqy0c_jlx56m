import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        <p className="mt-2 text-slate-300">Have a question or want a personalized recommendation? Reach out.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500" />
          </div>
          <input placeholder="Subject" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500" />
          <textarea required rows="5" placeholder="Your message" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500" />
          <div className="flex items-center justify-between">
            <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-semibold">Send message</button>
            {sent && <p className="text-sm text-emerald-400">Thanks! We'll get back to you shortly.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
