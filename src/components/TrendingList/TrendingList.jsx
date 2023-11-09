import { NavLink } from 'react-router-dom';
import css from './TrendingList.module.css';
const TrendingList = ({ movies }) => {
  //   const { movieId } = useParams();
  //   const [movies, setMovies] = useState([]);
  //   //   const [error, setError] = useState(null);
  //   //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     fetch(
  //       'https://api.themoviedb.org/3/trending/all/day?api_key=b750df2a9f04f9a8c778928f9359c968'
  //     )
  //       .then(response => response.json())
  //       .then(data => setMovies(data));
  //     //   .catch(err => console.error(err));
  //   }, []);

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
                <h4 className={css.everyTitle}>
                  {movie.title ? movie.title : movie.name}
                </h4>

                <img
                  className={css.everyImg}
                  alt={movie.title ? movie.title : movie.name}
                  title={movie.title ? movie.title : movie.name}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : null
                  }
                />
              </li>
            </NavLink>
          ))
        : console.log('error')}
    </div>
  );
};
export default TrendingList;
