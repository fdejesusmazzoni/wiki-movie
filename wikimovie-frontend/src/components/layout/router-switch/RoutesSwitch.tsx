import React from 'react';
import { MovieView } from '../../pages/movie-view/MovieView';
import { MoviesListContainer } from '../../pages/movies-list/MoviesListContainer';
import { Switch, Route } from 'react-router-dom';
import { routePaths } from '../../../common/routes';

export const RoutesSwitch = () => {
  return (
    <Switch>
      <Route path={routePaths.list}>
          <MoviesListContainer />
      </Route>   
      <Route path={routePaths.view}>
          <MovieView />
      </Route>
      <Route>
          <MoviesListContainer />
      </Route>      
    </Switch>
  );
};
