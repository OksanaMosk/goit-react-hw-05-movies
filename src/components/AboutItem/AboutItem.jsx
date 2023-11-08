import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AboutItem = movieID => {
  const {
    movieId,
    name,
    title,
    overview,
    genres,
    cast,
    reviews,
    vote_average,
    vote_count,
    poster_path,
  } = useParams();
  return (
    <div>
      <h1>About</h1>

      <NavLink key={movieId} to={`/movies/${movieId}`}>
        <li key={movieId} to={`/movies/${movieId}`}>
          <h2> {title ? title : name}</h2>
          <p>{movieId}</p>
          <p>{genres}</p>
          <p>{overview}</p>
          <p>{cast}</p>
          <p>{reviews}</p>
          <p>{vote_average}</p>
          <p>{vote_count}</p>
          <p>{poster_path}</p>
        </li>
      </NavLink>
    </div>
  );
};
export default AboutItem;
