import { useParams } from 'react-router-dom';
import { useStates } from './utilities/states';

export default function () {

  // read the slug param from the url
  const { slug } = useParams();

  // read the shared state/context main
  // that was set in App and contains the movie list
  const s = useStates('main');

  // find our movie and deconstruct properties from it to variables

  const movie = s.movies.find(movie => movie.slug == slug);
  const { id, title, description } = movie;
  const { length, categories, posterImage } = description;
  const { time } = s.screenings[id];

  const [date, when] = time.split('T');
  const [hours, minutes] = when.split(':')
  return <div className="movie-detail">
    <h3>{title}</h3>
    <h4>Length: {length} minutes</h4>
    <h4>Categories: {categories.join(', ')}</h4>
    <h4>Screening Date {date}</h4>
    <h4>Screening time H:{hours} M:{minutes}</h4>
    <img src={'https://cinema-rest.nodehill.se' + posterImage} />
    <hr />
  </div>
}