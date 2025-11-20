import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
