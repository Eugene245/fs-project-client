import React from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import ProfileMenuContainer from '../containers/ProfileMenuContainer'
import Notification from './Notification'

class NavigationBar extends React.Component{

render() {
  const { user, logout } = this.props
  return (
    <nav className='App-navigationBar'>  

      <NavLink to="/feed" activeClassName="active">
        <div className='App-navigationBar-button'>Home</div>
      </NavLink>  

      {
        (() => {
          switch (user.isAuthenticated) {
            case 'true':
              return (       
                <>
                  <NavLink to="/following" activeClassName="active">
                    <div className='App-navigationBar-button'>Following</div>
                  </NavLink>

                  <NavLink to="/add-post" activeClassName="active">
                    <div className='App-navigationBar-button'>Add Post</div>
                  </NavLink>

                  <button className="App-navigationBar-logout-button" onClick={logout}>logout</button>
                  <ProfileMenuContainer />
                  
                </>
              )
            case 'false':
              return (
                <div>
                  <NavLink to="/login" activeClassName="active">
                    <div className="App-navigationBar-login-button">Login</div>
                  </NavLink>
                  <NavLink to="/signup" activeClassName="active">
                    <div className="App-navigationBar-signup-button">Sign Up</div>
                  </NavLink>
                </div>
              )
              case 'error':
              return (
                <div>
                  {/* <div style="display: none">
                    
                  </div> */}
                  
                  <NavLink to="/login" activeClassName="active">
                    <div className="App-navigationBar-login-button">Login</div>
                  </NavLink>
                  <NavLink to="/signup" activeClassName="active">
                    <div className="App-navigationBar-signup-button">Sign Up</div>
                  </NavLink>
                  <Notification error={user.error}/>
                  
                </div>
              )
          }
        })()
      }  

      </nav>
  );
    }
}

NavigationBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default NavigationBar;