import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

class Registration extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:'',
      confirmPassword:'',
      gender:'',
      mobileNumber:'',
      city:''
    }
  }
  handleChange = (event)=>{
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
  }
  registerUser = (event)=>{
    
  }
  render(){
    return(
      <React.Fragment>
        <h3>Create Your Account :-</h3>
        <hr/>
        <form noValidate autoComplete="off">
          <TextField type="text" label="Username" margin="normal" name="username" onChange={this.handleChange}/>
          <br/>
          <TextField type="password" label="Password" margin="normal" name="password" onChange={this.handleChange}/>
          <br/>
          <TextField type="password" label="Confirm Password" margin="normal" name="confirmPassword" onChange={this.handleChange}/>
          <br/><br/>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender :</FormLabel>
            <RadioGroup aria-label="gender" name="gender" onChange={this.handleChange} row>
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
          <TextField type="text" label="Mobile Number" margin="normal" name="mobileNumber" onChange={this.handleChange}/>
          <br/>
          <TextField type="text" label="City" margin="normal" name="city" onChange={this.handleChange} />
          <br/><br/><hr/>
          <Button varient="outlined" color="primary" onClick={this.registerUser}>Register</Button>
          <hr/>
          <h3>User Details :</h3><br/>
          <p>Username is : {this.state.username}</p><br/>
          <p>Gender is : {this.state.gender}</p><br/>
          <p>Mobile Number is : {this.state.mobileNumber}</p><br/>
          <p>City is : {this.state.city}</p><br/>
        </form>
      </React.Fragment>
    );
  }
}

export default Registration;