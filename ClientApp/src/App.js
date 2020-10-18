import React, { Component } from 'react';
import './custom.css'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from './Redux/Stors/AgentStore';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas  } from '@fortawesome/free-solid-svg-icons'
import NewWrap from './components/Frame/NewWrap'

library.add(fab, fas)

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      // store={reduxExm}
      <div className="container-fluid ">
        <Provider store={store}>
          <Router>
            <div className="row d-flex flex-row-reverse">
              <NewWrap></NewWrap>
            </div>
          </Router>

        </Provider>

      </div>

    );
  }
}
