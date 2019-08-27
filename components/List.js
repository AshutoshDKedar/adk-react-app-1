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
    var styles = {
      textAlign: "center",
      color: "red"
    }
    return(
      <React.Fragment>
        <h5>Information :</h5>
        <table border="1" style={styles}>
        <th>Film Name</th>
        <th>Hero Name</th>
         {
          this.state.jsonData.map(function(item){
            return (<tr><td>{ item.filmName }</td> <td>{ item.heroName }</td></tr>);
          })
         } 
        </table>
      </React.Fragment>
    );
  }
}

export default List;