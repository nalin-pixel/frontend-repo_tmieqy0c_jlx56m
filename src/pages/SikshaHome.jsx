import EduNavbar from '../components/EduNavbar'
import EduHero from '../components/EduHero'
import EduPopularCourses from '../components/EduPopularCourses'
import EduTrendingColleges from '../components/EduTrendingColleges'
import EduTestimonials from '../components/EduTestimonials'
import EduCTA from '../components/EduCTA'
import Footer from '../components/Footer'

export default function SikshaHome() {
  return (
    <div className="min-h-screen bg-slate-950">
      <EduNavbar />
      <main>
        <EduHero />
        <EduPopularCourses />
        <EduTrendingColleges />
        <EduTestimonials />
        <EduCTA />
      </main>
      <Footer />
    </div>
  )
}
