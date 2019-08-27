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
        <ul>
          this.state.jsonData.map(function(item){
            <li>{ item.filmName } - { item.heroName }</li>
          })
        </ul>
      </React.Fragment>
    );
  }
}

export default List;