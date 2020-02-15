import React, { useEffect } from 'react';
import { Genre } from '../../../model';

interface Props {
  genres: Genre[];
  loadGenres(): void;
}

export const MoviesList = (props: Props) => {
  
  const { genres, loadGenres } = props;

  useEffect(
    () => {

      if (genres.length === 0)  {
        loadGenres();    
      }           
    },
    [genres, loadGenres]
  );

  return (
    <>
      { 
        genres.map(g => <h1>{g.name}</h1>) 
      }
    </>
  );
};