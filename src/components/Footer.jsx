export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Apex Moto — Built for riders who crave speed.</p>
        <div className="text-slate-500 text-xs">Dark futuristic design • Smooth animations • SEO‑friendly</div>
      </div>
    </footer>
  )
}
