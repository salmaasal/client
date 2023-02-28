import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export default class Login extends Component {
  constructor() {
    super();
    // to give a call to the base class constructor
    this.state = {
      email: "",
      password: "",
    };
    // state : its an object from the base class i.e. Component class to hold the data for our component.
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
    // we need to collect the data for every changed field
    // we need to update the state accordingly.
   // console.log(e.target.value);
    //e : event
    // target : location where event happened
    // value : whatever the input that we provided it will give us that data.
    //console.log(e.target.name); //e : event
    // target : location where event happened
    // name : name field value of the input tag.
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

render() {
  const { email, password} = this.state;
    return (
      <> 
      <section class="container">
        <br />
      <h1 class="large text-primary">Sign In</h1>
      <p class="lead"><i class="fas fa-user"></i> Sign into Your Account</p>
      <form class="form" onSubmit={this.onSubmit}>
        <div class="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.onChange}
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
      <p class="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
    </section>
    </>
    )
}
};