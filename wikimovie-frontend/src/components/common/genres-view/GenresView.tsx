import React from 'react';
import { Genre } from '../../../model';
import { useStyles } from './GenresViewStyles';
import { Chip } from '@material-ui/core';

interface Props {
  genres: Genre[];
}

export const GenresView = (props: Props) => {

  const classes = useStyles();
  const { genres } = props;

  return ( 
    <div className={classes.chips}>
    {
      genres
        .map((g, index) => 
          <Chip key={index} label={g.name} />
        )
    } 
    </div>
   );
};