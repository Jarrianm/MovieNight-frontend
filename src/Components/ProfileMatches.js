import React, { Component } from "react";
import "../ProfileMatches.css";
import { Image, Divider, Button,Icon} from "semantic-ui-react";
import ViewedProfilePageContainer from "../Containers/ViewedProfilePageContainer";
import { Route, Switch, withRouter } from "react-router-dom";

class ProfileMatches extends Component {
  state = {
    match: []
  };

  componentDidMount = () => {
    console.log('match mount')
    fetch("http://localhost:3000/api/v1/movies", {
      method: "GET",
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(movies => {
        movies.map(movie => {
          this.setState({
            match: movie.users
          });
        });
      });
  };

  clickProfileHandler = user => {
    // this.props.history.push("/login");
    this.props.clickHandler(user);
    //getting user clicked from match
    //then route to the users veiw version of their profile page
    //then render theier profile with just their profile card and their movies
  };

  

  render() {

    console.log(this.props.matchings)
    // let match = this.props.matchings.map((matching) => {
    //   console.log(matching.movie_id)
    // })
    // console.log(this.props.matchings)
  // debugger;
    let filterMatch = this.state.match.filter(match => {
      // console.log(match)
      console.log(this.props.matchings)
      return match.username !== this.props.user.username;
    });
    
     
    
    let matchedIMG = filterMatch.map((user) => {
      // console.log(user) ;
     
      return (
        <div key={user.id} >
          <Image size="small" src={user.profile_img} alt="" avatar />
          <Button onClick={() => this.clickProfileHandler(user)}>
            {user.username}'s Profile
          </Button>
          <Button animated>
            <Button.Content visible>Chat</Button.Content>
            <Button.Content hidden>
              <Icon name="assistive listening systems" />
            </Button.Content>
          </Button>
          <Divider />
        </div>
      );
    });
// not rendering users only rendering michael 
    return (
      <div className="match">
        <p> ProfileMatches</p>
     
        {matchedIMG}
       
      </div>
    );
  }
}

export default withRouter(ProfileMatches);
