import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {t('Develop by ')}
      <Link color="inherit" href="https://github.com/fdejesusmazzoni" target="_blank">
        Francisco Javier de Jesus Mazzoni
      </Link>{' '}
      - 2020
    </Typography>
  );
};