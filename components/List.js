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
        <div className="tile-container">
        <h3 className="title">-: Movies Details :-</h3>
         {
          this.state.jsonData.map(function(item){
            return (
              <div className="tile">
                <div className="poster"><img src={item.poster}/></div>
                <div className="description">
                  <h1>{item.filmName}</h1>
                </div>
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