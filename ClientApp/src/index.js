import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/Stors/AgentStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

const rootElement = document.getElementById('root');

ReactDOM.render(
  // <BrowserRouter basename={baseUrl}>
    // </BrowserRouter>,
    
    <Provider store={store}>
      <App />
    </Provider>,
  rootElement);

registerServiceWorker();

