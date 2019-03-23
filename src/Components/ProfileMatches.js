import React, { Component } from 'react';
import '../ProfileMatches.css'
import {Image, Divider} from "semantic-ui-react"

class ProfileMatches extends Component {

    state = {
        match: []
    }

    componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/movies",{
          method: "GET",
         headers: {"Authorization": localStorage.getItem("token")}})
      .then(res => res.json())
      .then(movies => {
        movies.map((movie ) => {this.setState({
            match: movie.users})})})}

            

   render() { 


let filterMatch = this.state.match.filter ((match) => {
      // console.log(match)
      // console.log(this.props.user)
       return  match.username !== this.props.user.username
})
  //  console.log(filterMatch)
let matchedIMG = filterMatch.map((user)=> {
  console.log(user)
  return <div><Image size='small' src={user.profile_img} alt=''/>
  <button onClick={this.clickProfileHandler}>{user.username}'s Profile</button>
  <Divider/>
  </div>
})

    return (
       <div className="match">
         <p> ProfileMatches</p>
            
            {matchedIMG}
       </div>


       
      );
    }
  }
  
  export default ProfileMatches;
  