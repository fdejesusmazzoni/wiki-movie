import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../../content/logo.png';
import { useStyles } from './HeaderStyles';
import { useTranslation } from 'react-i18next';
import { Box } from '@material-ui/core';

export const Header = () => {
  const classes = useStyles({});
  const { t } = useTranslation();
  
  return (
    <AppBar position="absolute">
      <Toolbar className={classes.toolbar}>
        <div className={classes.logoContainer}>
          <Box display={{ xs: 'none', md: 'block' }}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Box>
        </div>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {t('WIKI Movies')}
        </Typography>       
      </Toolbar>
    </AppBar>
  );
};