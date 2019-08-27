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
        <h5>Information :</h5>
        <div className="tile-container">
         {
          this.state.jsonData.map(function(item){
            return (
              <div className="tile">
                <div className="poster"></div>
                {item.filmName}
              </div>
            );
          })
         }
        </div>
      </React.Fragment>
    );
  }
}

export default List;