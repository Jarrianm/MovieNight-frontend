import React, { Component } from 'react';

class ProfileContainer extends Component {

   render() {

    //   console.log(this)
      return (
        <div >
         <p>Hello {this.props.user.username}</p>
         
        </div>
      );
    }
  }
  
  export default ProfileContainer;
  