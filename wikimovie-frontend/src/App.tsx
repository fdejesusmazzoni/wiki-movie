import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import { Layout } from './components/layout/Layout';
import { ThemeProvider } from '@material-ui/styles';
import { store } from './store/create';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout />
        </ThemeProvider>
      </Router>
      <ToastContainer hideProgressBar />
    </Provider>
  );
};

export default App;
