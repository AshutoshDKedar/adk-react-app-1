import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Registration extends Component{
  render(){
    return(
      <React.Fragment>
        <h3>Create Your Account :-</h3>
        <hr/>
        <form noValidate autoComplete="off">
          <TextField id="standard-name" label="Name" margin="normal"/>
        </form>
      </React.Fragment>
    );
  }
}

export default Registration;