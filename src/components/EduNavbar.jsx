import { useState } from 'react'
import { Menu, X, GraduationCap, Phone } from 'lucide-react'

export default function EduNavbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Courses', href: '#courses' },
    { label: 'Colleges', href: '#colleges' },
    { label: 'Exams', href: '#exams' },
    { label: 'Counseling', href: '#counseling' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 bg-slate-950/90 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="relative flex items-center justify-center">
              <GraduationCap className="h-7 w-7 text-blue-400" />
              <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-[#FF6F00]"></span>
            </div>
            <span className="text-white text-lg font-semibold tracking-wide">
              Siksha <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6F00] via-[#FFFFFF] to-[#138808]">India</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#counseling" className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-colors">
              <Phone className="h-4 w-4" /> Free Counseling
            </a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:text-white hover:bg-white/10" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-950/95">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <a href="#counseling" className="block rounded-md px-3 py-2 bg-blue-600 text-white text-center">Free Counseling</a>
          </div>
        </div>
      )}
    </header>
  )
}
