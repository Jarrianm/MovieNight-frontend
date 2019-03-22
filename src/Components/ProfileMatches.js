import React, { Component } from 'react';
import '../ProfileMatches.css'

class ProfileMatches extends Component {

    // state = {
    //     user: []
    // }

    // componentDidMount = (user) => {
    //     console.log('profile mount')
    //     if (localStorage.getItem('token')){
    //     //   alert("user logged in")
    //       fetch("http://localhost:3000/api/v1/current_user",{
    //           method: "GET",
    //          headers: {"Authorization": localStorage.getItem("token")}})
    //       .then(res => res.json())
    //       .then(data => {
    //         this.setState({user: [data] })})
    // //else {
    // //     // this.login(token)
    // //     console.log("no user logged in")
    // //   }
    // }}
   
    

   render() { 

// console.log(this.props)
   
    return (
       <div className="match">
         <p> ProfileMatches</p>
       </div>


       
      );
    }
  }
  
  export default ProfileMatches;
  