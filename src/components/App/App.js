import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import Nav from '../Nav/Nav';

const AsyncHome = lazy(() =>
  import('../../routes/Home' /* webpackChunkName: "home-page" */),
);

const AsyncMovies = lazy(() =>
  import('../../routes/MoviesSearch' /* webpackChunkName: "movies-page" */),
);

const AsyncMovieDetailsPage = lazy(() =>
  import('../../routes/Movie' /* webpackChunkName: "movies-details-page" */),
);

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <div className={styles.container}>
          <Switch>
            <Route path='/' exact component={AsyncHome} />
            <Route path='/movies/:movieId' component={AsyncMovieDetailsPage} />
            <Route path='/movies' component={AsyncMovies} />
            <Route component={AsyncHome} />
          </Switch>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
