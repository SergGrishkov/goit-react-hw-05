export default function TrendingList({ listMovies }) {
  console.log(listMovies);
  return (
    <ul>
      {listMovies.map((movie) => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </ul>
  );
}
