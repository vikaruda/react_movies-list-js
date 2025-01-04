/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';

const Card = ({ movies }) => {
  <div className="card" data-cy="Movie">
    <div className="card-image">
      <figure className="image is-4by3">
        <img data-cy="MovieImage" src={movies.imgUrl} alt="Film logo" />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8" data-cy="MovieTitle">
            Inception
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">
          Follows the lives of eight very different couples in dealing with
          their love lives in various loosely interrelated tales all set during
          a frantic month before Christmas in London, England.
        </p>

        <a href="https://www.imdb.com/title/tt1375666" data-cy="MovieLink">
          IMDB
        </a>
      </div>
    </div>
  </div>;
};

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {moviesFromServer.map(movies => (
          <Card movies={movies} key={movies.imdbId} />
        ))}
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
