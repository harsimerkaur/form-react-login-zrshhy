import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './helpers';
import { Main } from './Main';
import './style.css';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
