import { useEffect, useState, useRef } from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import { Routes, Route } from 'react-router-dom';
import { kebabify } from './utilities/kebabify';

export default function App() {

  const [screenings, setScreenings] = useState([])
  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState([])

  const filterGenre = useRef()

  useEffect(() => {
    (async () => {
      // fetch alll movies from the REST api
      let screenings = await(await fetch('/api/screenings')).json()
      let movies = await (await fetch('/api/movies')).json();
      // add a slug to be used in url routes to each movie
      for (let movie of movies) {
        movie.slug = kebabify(movie.title);
      }
      // store the movies in our state variable
      setMovies(movies)
      setFilter(movies)
      setScreenings(screenings)
    })();
  }, []);

  const filterMovie = () => {
    const genre = filterGenre.current.value
    if(genre === '') {
      setFilter(movies)
    } else {
      setFilter(movies.filter(movie => movie.description.categories.includes(genre)))
    }
    filterGenre.current.value = null
    //else
  }

  return <> 
  <Routes>
    <Route path="/" element={<>
    <input ref={filterGenre} type="text" />
    <button onClick={filterMovie}> Filter Movie</button>
      <MovieList movies={filter} screenings={screenings}/>
    </>}></Route>
    <Route path="/movie-detail/:slug" element={<MovieDetail movies={movies}/>} />
  </Routes>
</>;
}