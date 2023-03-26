import { useStates } from './utilities/states';
import { Link } from 'react-router-dom';

export default function MovieList() {

    const s = useStates('main');
    const handleClick = () => {
    }
    
    const filteredMovies = s.movies.filter(movie => movie.description.categories.includes('Adventure'));
    console.log(filteredMovies);
    return <>
        {filteredMovies.map(({ slug, id, title, description: d }) => <Link
        to={'/movie-detail/' + slug}>
            
        <div className="movie">
        <div className="home">
        {/* <button onClick={handleClick}>Filter By category</button> */}
      </div>
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