import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useStyles } from './VotesViewStyles';

interface Props {
  average: number;
  count: number;
}

export const VotesView = (props: Props) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const { average, count } = props;

  const getColorVote = () => {
    switch (true) {
      case average > 7.5: return classes.votePositive; 
      case average < 5: return classes.voteNegative; 
      default: return classes.voteNeutral;
    }
  };

  return(          
    <Grid container spacing={2}>
      <Grid item>
        <Rating name="read-only" value={average / 2} readOnly />
      </Grid>
      <Grid className={classes.voteGrid}>
        <Typography component="p" className={classes.vote}>
          <span className={getColorVote()}>{average}</span> ({count} {t('votes')})
        </Typography>
      </Grid>
    </Grid>
  );
};
