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
        ? movies.map(({ id, title, name }) => (
            <NavLink key={id} to={`/movies/${id}`}>
              <li key={id} to={`/movies/${id}`}>
                {title ? title : name}
              </li>
            </NavLink>
          ))
        : console.log('error')}
    </div>
  );
};
export default TrendingList;
