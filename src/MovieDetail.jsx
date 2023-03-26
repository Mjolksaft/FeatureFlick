import { useParams } from 'react-router-dom';

export default function ({movies}) {
  const { slug } = useParams();

  const movie = movies.find(movie => movie.slug == slug);
  const { id, title, description } = movie;
  const { length, categories, posterImage } = description;

  return <div className="movie-detail">
    <h3>{title}</h3>
    <h4>Length: {length} minutes</h4>
    <h4>Categories: {categories.join(', ')}</h4>
    <img src={'https://cinema-rest.nodehill.se' + posterImage} />
    <hr />
  </div>
}