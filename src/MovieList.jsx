import { Link } from 'react-router-dom';

export default function MovieList({movies}, {screenings}) {
  console.log(screenings);
  return <>
    {movies.map(({ slug, id, title, description: d }) => <Link
      to={'/movie-detail/' + slug}>
      <div className="movie">
        <h3>{title}</h3>
        <img src={'https://cinema-rest.nodehill.se' + d.posterImage} />
        <p>Length {d.length}</p>
        <hr />
      </div>
    </Link>
    )}
  </>;

}