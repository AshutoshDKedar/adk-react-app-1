import React, { Component } from 'react';
import Data from '../data.json';

class List extends Component{
  constructor(){
    super();
    this.state = {
      jsonData: Data
    }
  }
  
  render(){
    return(
      <React.Fragment>
        <h5>Welcome to React JS..!</h5>
      </React.Fragment>
    );
  }
}

export default List;