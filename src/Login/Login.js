import React, { Component } from 'react';
import reactDOM from "react-dom"
import { withRouter } from 'react-router-dom'

class Login extends Component {
    
    state = {
        username: '', 
        password: ''
    }

    handleSubmit = (e) => {
     e.preventDefault()
     this.props.login(this.state)   

    };

    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
    };
    render() {
        // console.log('login page ')
        return (
            <div className='login'>
            <h2>Log In</h2>
            <form  onSubmit={this.handleSubmit}>
                <label>
                    Username
                </label>
                <input name="username" placeholder='Username' value={this.state.username} onChange={this.handleChange}/>
                <label>
                    Password
                </label>
                <input name="password" placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
                <button className='submit-btn'>Login</button>
            </form>
            </div>
        );
      }
}
export default Login;