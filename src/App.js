import React, { Component } from 'react';
import './App.css';
import ShowContainer from "./Containers/ShowContainer"
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './Login/Login'
import ProfileContainter from './Containers/ProfileContainer'


class App extends Component {
  state = {
    user: {},
    currentUser:{}
  }

  login = (user) => {
    // console.log(user.username)
    fetch(`http://localhost:3000/api/v1/login`,{
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
    body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    }) 

    .then(res => res.json())
    .then(data =>{
  
      if (data.user){
        // debugger
      localStorage.setItem("token", data.token);
      // debugger
        this.props.history.push('/profile')
        this.setState({
          user: user
        })
      }
      }
    )}
    
    // componentDidMount = () => {
    //   console.log('app mount')
    //   if (localStorage.getItem('token')){
    //     alert("user logged in")
    //     fetch("http://localhost:3000/api/v1/current_user",{
    //         method: "GET",
    //        headers: {"Authorization": localStorage.getItem("token")
    //     }})
    //     .then(res => res.json())
    //     .then(data => {
    //       this.setState({
    //           currentUser: data
    //       });
    //       console.log(this.state.currentUser)
    //     })
  
    // }else {
    //   // this.login(token)
    //   console.log("no user logged in")
    // }
    // }
  render() {
    console.log('app render')
    return (
      <div className="App">
     <Route path='/login' render={()=> <Login login={this.login}/>}/>
      <Route path='/profile' render={(user) => (<ProfileContainter user={this.state.user}/>)}/>
      
      </div>
    );
  }
}

export default withRouter(App);
