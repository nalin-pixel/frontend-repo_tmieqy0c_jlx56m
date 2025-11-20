import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-rose-500 to-amber-500" />
            <span className="text-white font-semibold tracking-wide">Apex Moto</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItem({ to: '/', label: 'Home' })}
            {navItem({ to: '/categories', label: 'Categories' })}
            {navItem({ to: '/reviews', label: 'Reviews' })}
            {navItem({ to: '/contact', label: 'Contact' })}
          </nav>

          <button className="md:hidden p-2 text-slate-200" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navItem({ to: '/', label: 'Home' })}
            {navItem({ to: '/categories', label: 'Categories' })}
            {navItem({ to: '/reviews', label: 'Reviews' })}
            {navItem({ to: '/contact', label: 'Contact' })}
          </div>
        </div>
      )}
    </header>
  )
}
