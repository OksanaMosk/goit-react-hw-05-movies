import { NavLink } from 'react-router-dom';
import NoImage from '../../img/NoImage.png';

import css from './TrendingList.module.css';

const TrendingList = ({ movies }) => {
  return (
    <div className={css.trandingItems}>
      {movies
        ? movies.map(movie => (
            <NavLink
              className={css.everyItem}
              key={movie.id}
              to={`/movies/${movie.id}`}
            >
              <li>
                <img
                  width={400}
                  height={600}
                  className={css.everyImg}
                  alt={movie.title ? movie.title : movie.name}
                  title={movie.title ? movie.title : movie.name}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                      : NoImage
                  }
                />
                <h4 className={css.everyTitle}>
                  {movie.title ? movie.title : movie.name}
                </h4>
              </li>
            </NavLink>
          ))
        : null}
    </div>
  );
};
export default TrendingList;
