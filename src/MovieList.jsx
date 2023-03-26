import { useStates } from './utilities/states';
import { Link } from 'react-router-dom';

export default function MovieList() {

  const s = useStates('main');

  return <>
    {s.movies.map(({ slug, id, title, description: d }) => <Link
      to={'/movie-detail/' + slug}>
      <div className="movie">
        <h3>{title}</h3>
        <img src={'https://cinema-rest.nodehill.se' + d.posterImage} />
        <p>Screening time {s.screenings[id].time}</p>
        <p>Length {d.length}</p>
        <hr />
      </div>
    </Link>
    )}
  </>;

}