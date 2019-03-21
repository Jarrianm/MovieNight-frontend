import React, { Component } from 'react';
import { withRouter} from 'react-router'
import { Link } from 'react-router-dom'
import '../NavBar.css'

class NavBar extends Component {
    

    render(){
        console.log(this.props.user)
        return(
            <div className='wrapper'>
              <nav className='black'>
              <div className="logo toolbar_user-icon">
              <Link to={`/shows`}><img src={this.props.user.profile_img} alt=""/></Link> 
                       
            </div>
              </nav>
            </div> 
                 
        )
    }
}

export default withRouter(NavBar)
