import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './Login/Login'
import ProfileContainter from './Containers/ProfileContainer'
import ShowContainter from './Containers/ShowContainer'
import NavBar from "./Components/NavBar"
import ViewedProfilePageContainer from './Containers/ViewedProfilePageContainer';


class App extends Component {
  state = {
    user: {},
    currentUser:{},
    clickedProfile:{}
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
        // console.log('login', this.state.user)
      }
      }
    )}

    componentDidMount = (user) => {
      // console.log('app mount')
      if (localStorage.getItem('token')){
      //   alert("user logged in")
        fetch("http://localhost:3000/api/v1/current_user",{
            method: "GET",
           headers: {"Authorization": localStorage.getItem("token")}})
        .then(res => res.json())
        .then(data => {
          this.setState({currentUser: data })})
  //else {
  //     // this.login(token)
  //     console.log("no user logged in")
  //   }
  }}
 
  clickHandler = (user) => {
console.log(user.username)
this.props.history.push(`/users/${user.username}`)
this.setState({
  clickedProfile: user
})
  }
   
 
    render() {
    // console.log('app render', this.state.currentUser)
    return (
      <div className="App">
      <NavBar clickHandler={this.category} user={this.state.currentUser}/>
     <Route path='/login' render={()=> <Login login={this.login}/>}/>
      <Route path='/profile' render={(user) => (<ProfileContainter clickHandler={this.clickHandler}user={this.state.user}/>)}/>
      <Route path='/shows' render={(user) => (<ShowContainter user={this.state.user}/>)}/>
      
      <Route exact path='/users/:username' render={(user) => (<ViewedProfilePageContainer user={this.state.clickedProfile} />)}/>

      </div>
    );
  }
}

export default withRouter(App);
