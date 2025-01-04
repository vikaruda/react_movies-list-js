import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movies => (
      <MovieCard movies={movies} key={movies.imdbId} />
    ))}
  </div>
);
