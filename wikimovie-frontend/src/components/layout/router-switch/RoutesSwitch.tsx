import React from 'react';
import { MovieView } from '../../pages/movie-view/MovieView';
import { MoviesList } from '../../pages/movies-list/MoviesList';
import { Switch, Route } from 'react-router-dom';
import { routePaths } from '../../../common/routes';

export const RoutesSwitch = () => {
  return (
    <Switch>
      <Route path={routePaths.list}>
          <MoviesList />
      </Route>   
      <Route path={routePaths.view}>
          <MovieView />
      </Route>
      <Route>
          <MoviesList />
      </Route>      
    </Switch>
  );
};
