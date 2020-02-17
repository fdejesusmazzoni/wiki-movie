import React from 'react';
import Container from '@material-ui/core/Container';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { RoutesSwitch } from './router-switch/RoutesSwitch';
import { useStyles } from './LayoutStyles';

export const Layout = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <Header /> 
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <RoutesSwitch />
        </Container>
        <Footer />
      </main>
    </div>
  );
};