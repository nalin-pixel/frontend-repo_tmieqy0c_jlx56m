import { Routes, Route } from 'react-router-dom'
import App from '../App'
import CategoriesIndex from '../components/CategoriesIndex'
import CategoryPage from '../components/CategoryPage'
import BikeDetails from '../components/BikeDetails'
import ReviewsPage from './ReviewsPage'
import ContactPage from './ContactPage'
import SikshaHome from './SikshaHome'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/categories" element={<CategoriesIndex />} />
      <Route path="/categories/:slug" element={<CategoryPage />} />
      <Route path="/bikes/:id" element={<BikeDetails />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/siksha" element={<SikshaHome />} />
    </Routes>
  )
}
