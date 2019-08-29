import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

class Registration extends Component{
  render(){
    return(
      <React.Fragment>
        <h3>Create Your Account :-</h3>
        <hr/>
        <form noValidate autoComplete="off">
          <TextField type="text" label="Username" margin="normal"/>
          <br/>
          <TextField type="password" label="Password" margin="normal"/>
          <br/>
          <TextField type="password" label="Confirm Password" margin="normal"/>
          <br/><br/>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender :</FormLabel>
            <RadioGroup aria-label="gender" name="gender" row>
             <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
                labelPlacement="end"
              /> 
             <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
          <br/>
          <TextField type="text" label="Mobile Number" margin="normal"/>
          <br/>
          <TextField type="text" label="City" margin="normal"/>
          <br/><br/>
          <Button varient="outlined" color="primary">Register</Button>
        </form>
      </React.Fragment>
    );
  }
}

export default Registration;