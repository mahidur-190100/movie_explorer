import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="page">
      <Navbar />

      <main className="hero">
        <div className="hero-content">
          <h1>Discover Movies</h1>
          <p>Explore and discover your favorite movies and shows from around the world.</p>
          <Link to="/movies" className="explore-button">Explore Now</Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
