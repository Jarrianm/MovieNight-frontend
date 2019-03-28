import React, { Component } from "react";
import reactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import '../Login.css'
import {Button,Form,Segment} from 'semantic-ui-react'
class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    // console.log('login page ')
    return (
      <div className="login">
       <div className="title"> <h1 >NETFLIX AND CHILL</h1></div>
        <Segment inverted/>
        <Form inverted onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Username'
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Form.Input fluid label='Password'
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />  </Form.Group>
          <Button fluid className="submit-btn">Login</Button>
        
        </Form>
        <Segment inverted/>
      </div>
    );
  }
}
export default Login;
