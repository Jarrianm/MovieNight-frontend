import React, { Component } from 'react';
import '../ProfileCard.css'

class ProfileCard extends Component {

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
    console.log(this.props.user)


   
    return (
        <div className="card">
         <h1>{this.props.user.name}</h1>
         <img src={this.props.user.profile_img} alt=''/>
         <p>Bio:{this.props.user.bio}</p>
         <p>Age:{this.props.user.age}</p>
         <p>Location:{this.props.user.location}</p>
       </div>


       
      );
    }
  }
  
  export default ProfileCard;
  