const List = ({ searchedMovie }) => {
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
      {searchedMovie
        ? searchedMovie.map(item => (
            <ul>
              <li key={item.id}>
                <h4>{item.title ? item.title : item.name}</h4>

                <img
                  alt={item.title ? item.title : item.name}
                  title={item.title ? item.title : item.name}
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                      : null
                  }
                />
              </li>
            </ul>
          ))
        : console.log('error')}
    </div>
  );
};
export default List;
