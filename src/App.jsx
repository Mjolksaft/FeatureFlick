import { useEffect, useRef } from 'react';
import { useStates } from './utilities/states';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import { Routes, Route } from 'react-router-dom';
import { kebabify } from './utilities/kebabify';

export default function App() {

  const s = useStates('main', {
    movies: [],
    filter: [],
    screenings: [],
  });

  const filterGenre = useRef()

  useEffect(() => {
    (async () => {
      let screenings = await(await fetch('/api/screenings')).json()
      let movies = await (await fetch('/api/movies')).json();

      for (let movie of movies) {
        movie.slug = kebabify(movie.title);
      }
      s.movies = movies;
      s.filter = movies;
      s.screenings = screenings
    })();
  }, []);

  const filter = () => {
    const genre = filterGenre.current.value
    if (genre === '') {
      s.filter = s.movies
    } else {
      const filterMovies = s.movies.filter(movie => movie.description.categories.includes(genre)).length
      if(filterMovies === 0) {
        filterGenre.current.value = ''
        return
      } else {
        s.filter = s.movies.filter(movie => movie.description.categories.includes(genre))
      }
    }
    filterGenre.current.value = ''
  }

  return s.filter.length === 0 ? null : <>
        <input ref={filterGenre} type="text" />
        <button onClick={filter}>Filter Genre</button>
    <Routes>
      <Route path="/" element={<>
        <MovieList />
      </>}></Route>
      <Route path="/movie-detail/:slug" element={<MovieDetail />} />
    </Routes>
  </>;
}