import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((data) => setMovies(data))
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()

    if (search.trim() === '') {
      fetch('https://api.tvmaze.com/shows')
        .then((response) => response.json())
        .then((data) => setMovies(data))
      return
    }

    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then((response) => response.json())
      .then((data) => {
        const shows = data.map((item) => item.show)
        setMovies(shows)
      })
  }

  return (
    <div className="page">
      <Navbar />

      <main className="movies-page">
        <h1>Movies</h1>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="movie-grid">
          {movies.map((show) => (
            <MovieCard
              key={show.id}
              show={show}
              onDetails={setSelectedMovie}
            />
          ))}
        </div>
      </main>

      <Footer />

      <MovieModal
        show={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  )
}
