import React, { Component } from 'react';
import ProfileCard from '../Components/ProfileCard'
import ProfileMovies from '../Components/ProfileMovies'
import ProfileMatches from '../Components/ProfileMatches'
import '../ProfileContainer.css'
class ProfileContainer extends Component {

    state = {
        user: []
    }

    componentDidMount = (user) => {
        console.log('profile mount')
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
        console.log(user.movies)
        return <div key={user.user.id} name={user.user.name}>
        
         <ProfileCard user={user.user}/>
         <ProfileMovies user={user.user} movies={user.movies}/>
         <ProfileMatches user={user.user}/>
         </div> })

         let movies = this.state.user.movies.map((movie)=>{
                    console.log(movie)
         })
        
   


   
    return (
       <div>

           {user}
       </div>


       
      );
    }
  }
  
  export default ProfileContainer;
  