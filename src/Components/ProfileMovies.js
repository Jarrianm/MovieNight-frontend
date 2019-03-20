import React, { Component } from 'react';
import '../ProfileMovies.css'


class ProfileMovies extends Component {

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


   
    return (
       <div className="myPhotos">
         <p> ProfileMovies</p>
       </div>


       
      );
    }
  }
  
  export default ProfileMovies;
  