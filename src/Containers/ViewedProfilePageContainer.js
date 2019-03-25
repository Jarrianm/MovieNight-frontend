import React, { Component } from 'react';
import ViewedProfileMovies from '../Components/ViewedProfileMovies'
import ViewedProfileCard from '../Components/ViewedProfleCard'
class ViewedProfilePageContainer extends Component {
    render() {
console.log(this.props)
        return (
            <div>
             <ViewedProfileMovies/>
             <ViewedProfileCard user={this.props.user}/>
             </div>
        );
    }
}

export default ViewedProfilePageContainer;