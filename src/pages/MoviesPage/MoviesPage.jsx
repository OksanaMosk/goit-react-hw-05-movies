// import css from './MoviesPage.module.css';
import { Link, useParams } from 'react-router-dom';

const Movies = () => {
  const { movieId } = useParams();
  return (
    <ul>
      <li>
        <Link to={`/movies/${movieId}`}></Link>
        MovieDetails:{movieId}
      </li>
    </ul>
  );
};
export default Movies;
