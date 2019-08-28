import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Title from './components/Title';
import List from './components/List';
import Registration from './components/Registration';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Registration/>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
