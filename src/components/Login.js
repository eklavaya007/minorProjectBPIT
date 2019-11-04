import React from 'react';
import { login } from '../repository';

export default class Login extends React.Component{

  constructor() {
    super();
    this.state = { name: '', password: '' };
    this.handleInputChange =this.handleInputChange.bind(this);
    this.submitLogin =this.submitLogin.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  submitLogin(event){
    event.preventDefault();
    login(this.state)
      .then(token => window.location = '/')
      .catch(err => alert(err));
  }

  render() {
     return (
      <div className="container">
      <hr/>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="panel panel-primary">
            <div className="panel-heading">
              
            </div>
            <div className="panel-body">
              <form onSubmit={this.submitLogin} className="was-validated">
              <fieldset>
                <legend>Login Info</legend>
              <div className=" form-group mb-3">
    <label for="validationTextarea">Name:</label>
    <input onChange={this.handleInputChange}  name="name" class="form-control is-valid is-invalid" id="validationTextarea" placeholder="" required/>
  </div>
  
                {/* <div className="form-group">
                  <label>Name:</label>
                  <input type="text" className="form-control" name="name" onChange={this.handleInputChange}/>
                </div> */}
                {/* <div className="form-group">
                  <label>Password:</label>
                  <input type="password" className="form-control" name="password" onChange={this.handleInputChange}/>
                </div> */}
                <div className="form-group mb-3">
    <label for="validationTextarea">Password:</label>
    <input type="password" onChange={this.handleInputChange} name="password" class="form-control is-valid is-invalid" id="validationTextarea" placeholder="" required/>
  </div>
  
                <button type="submit" className="btn btn-outline-info">Submit</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
