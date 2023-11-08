import { NavLink } from 'react-router-dom';
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
    <div>
      {movies
        ? movies.map(movie => (
            <NavLink key={movie.id} to={`/movies/${movie.id}`}>
              <li key={movie.id} to={`/movies/${movie.id}`}>
                <h4>{movie.title ? movie.title : movie.name}</h4>

                <img
                  alt={movie.title ? movie.title : movie.name}
                  width="200"
                  height="200"
                  title={movie.title ? movie.title : movie.name}
                  src={
                    movie.poster_path
                      ? `{https://image.tmdb.org/t/p/w200/${movie.poster_path}}`
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
