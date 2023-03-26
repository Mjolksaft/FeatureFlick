import { useStates } from './utilities/states';
import { Link } from 'react-router-dom';

export default function MovieList() {

  const s = useStates('main');

return <>
    {s.filter.map(({ slug, id, title, description: d }) => <Link
      to={'/movie-detail/' + slug}>
      <div className="movie">
        <h3>{title}</h3>
        <img src={'https://cinema-rest.nodehill.se' + d.posterImage} />
        <p>Screening Date {s.screenings[id].time.split('T')[0]}</p>
        <p>Screening time {s.screenings[id].time.split('T')[1].replace('Z', '')}</p>
        <p>Length {d.length}</p>
        <hr />
      </div>
    </Link>
    )}
  </>;

}