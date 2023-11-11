import { NavLink } from 'react-router-dom';
import NoImage from '../../img/NoImage.png';
import { useLocation } from 'react-router-dom';

import css from './List.module.css';

const List = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css.trandingItems}>
        {movies
          ? movies.map(movie => (
              <NavLink
                state={{ from: location }}
                className={css.everyItem}
                to={`/movies/${movie.id}`}
                key={movie.id}
              >
                <li key={movie.id}>
                  <h4 className={css.everyTitle}>
                    {movie.title ? movie.title : movie.name}
                  </h4>
                  <img
                    className={css.everyImg}
                    alt={movie.title ? movie.title : movie.name}
                    title={movie.title ? movie.title : movie.name}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                        : NoImage
                    }
                  />
                </li>
              </NavLink>
            ))
          : null}
      </ul>
    </div>
  );
};
export default List;
