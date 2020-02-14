import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import { Layout } from './components/layout/Layout';
import { ThemeProvider } from '@material-ui/styles';
import { store } from './store/create';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout />
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
