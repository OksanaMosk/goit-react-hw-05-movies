import { NavLink } from 'react-router-dom';
const List = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies
          ? movies.map(movie => (
              <NavLink key={movie.id}>
                <li key={movie.id}>
                  <h4>{movie.title ? movie.title : movie.name}</h4>

                  <img
                    alt={movie.title ? movie.title : movie.name}
                    title={movie.title ? movie.title : movie.name}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                        : null
                    }
                  />
                </li>
              </NavLink>
            ))
          : console.log('error')}
      </ul>
    </div>
  );
};
export default List;
