import Navbar from '../components/Navbar'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-20">
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
