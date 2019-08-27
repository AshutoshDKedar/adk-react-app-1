import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import './style.css';

import Title from './components/Title';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Title />
        <List />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
