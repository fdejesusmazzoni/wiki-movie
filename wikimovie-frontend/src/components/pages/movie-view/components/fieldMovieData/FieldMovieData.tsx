import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './FieldMovieDataStyles';

interface Props {
  text: string;
  value: string;
}

export const FieldMovieData = (props: Props) => (
  <Grid container>
    <Grid xs={6} item>
      <Typography component="h5">{ props.text}</Typography>
    </Grid>
    <Grid xs={6} item>
      <Typography component="h5" className={useStyles().alignRight}>{ props.value}</Typography>
    </Grid>
  </Grid>
);