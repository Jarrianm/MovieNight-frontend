import React, { Component } from 'react';
import Shows from "../Components/Shows"
import '../ShowContainer.css'

class ShowContainer extends Component {
  
  state = {
    shows: []
}

componentDidMount = (user) => {
    console.log('show mount')
    if (localStorage.getItem('token')){
    //   alert("user logged in")
      fetch("http://localhost:3000/api/v1/movies",{
          method: "GET",
         headers: {"Authorization": localStorage.getItem("token")}})
      .then(res => res.json())
      .then(data => {
        this.setState({shows: data })})
//else {
//     // this.login(token)
//     console.log("no user logged in")
//   }
}}
  
  render() {
    console.log(this.state.shows)
    let shows = this.state.shows.map((show) => {
      return <Shows key={show.id} show={show}/>
    })
    return (
      <div className="ShowContainer">
      
     {shows}
       
      </div>
    );
  }
}

export default ShowContainer;
