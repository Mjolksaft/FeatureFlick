import { useStates } from './utilities/states';
import { useParams } from 'react-router-dom';

export default function () {
  const { slug } = useParams();

  const s = useStates('main');


    const handleClick = () => {
        for (const movie of s.movies) {
            var {description} = movie
            var {categories} = description
            console.log(categories);
        }
    }

    return (
      <div className="home">
        <button onClick={handleClick}>Filter By category</button>
      </div>
    );
  }