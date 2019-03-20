import React, { Component } from 'react';
import ProfileCard from '../Components/ProfileCard'
import ProfileImages from '../Components/ProfileImages'
import ProfileMatches from '../Components/ProfileMatches'
import '../ProfileContainer.css'

class ProfileContainer extends Component {

    state = {
        user: []
    }

    componentDidMount = (user) => {
        // console.log('profile mount')
        if (localStorage.getItem('token')){
        //   alert("user logged in")
          fetch("http://localhost:3000/api/v1/current_user",{
              method: "GET",
             headers: {"Authorization": localStorage.getItem("token")}})
          .then(res => res.json())
          .then(data => {
            this.setState({user: [data] })})
    //else {
    //     // this.login(token)
    //     console.log("no user logged in")
    //   }
    }}
   
    

   render() { 
    // console.log('profile render',this.state.user)
    let user = this.state.user.map((user) => {
        console.log(user)
        return <div key={user.user.id} name={user.user.name}>
         <p>HI {user.user.username}</p>
         <ProfileCard user={user.user}/>
         <ProfileImages user={user.user}/>
         <ProfileMatches user={user.user}/>

        </div>
        
    })


   
    return (
       <div>
           {user}
       </div>


       
      );
    }
  }
  
  export default ProfileContainer;
  