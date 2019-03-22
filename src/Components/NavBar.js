import React, { Component } from 'react';
import { withRouter} from 'react-router'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import '../NavBar.css'

class NavBar extends Component {
//     state = {
//       user: []
//     }
  
//   componentDidMount =() =>{
//   console.log('nav mount', this.props.user)
//   if(this.props.user){
// this.setState({
//   user: this.props.user
// })}
//     }

    render(){
      // console.log(this.state.user)
        return(
            <div className='wrapper'>
              <nav className='black'>
              <div className="logo toolbar_user-icon">
              </div>
              
              <Link to={'/profile'}><p>Home</p></Link>
              <Link to={'/shows'}><p>Shows</p></Link>
              <Dropdown/>
              </nav>
            </div> 
                 
        )
    }
}

export default withRouter(NavBar)
