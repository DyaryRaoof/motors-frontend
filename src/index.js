import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD

    <Provider store={store} key="1">
=======
    <Provider store={store} key="1afsfaf">
>>>>>>> dev
      <App key="2" />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);
