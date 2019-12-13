import React from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import ProfileMenuContainer from '../containers/ProfileMenuContainer'

class NavigationBar extends React.Component{

render() {
  const { user, logout } = this.props
  return (
    <nav className='App-navigationBar'>  

      <NavLink to="/home" activeClassName="active">
        <div className='App-navigationBar-button'>Home</div>
      </NavLink>  

      <NavLink to="/Posts" activeClassName="active">
        <div className='App-navigationBar-button'>Posts</div>
      </NavLink>

      {
        (() => {
          switch (user.isAuthenticated) {
            case true:
              return (       
                <>
                  <NavLink to="/following" activeClassName="active">
                    <div className='App-navigationBar-button'>Following</div>
                  </NavLink>

                  <Button color="secondary" onClick={logout}>logout</Button>

                  <NavLink to="/add-post" activeClassName="active">
                  <div className='App-navigationBar-button'>
                    <Button color="danger">Add Post</Button>
                  </div>
                  </NavLink>

                  <ProfileMenuContainer />
                
                </>
              )
            case false:
              return (
                <div>
                  <NavLink to="/login" activeClassName="active">
                  <div className='App-navigationBar-button'>
                    <Button color="primary">Login</Button>
                  </div>
                  </NavLink>
                  <NavLink to="/signup" activeClassName="active">
                  <div className='App-navigationBar-button'>
                    <Button color="primary">Sign Up</Button>
                  </div>
                  </NavLink>
                  
                </div>
              )
              // case 'login error':
              // return (
              //   <div>
              //     {
              //       alert(props.user.error)
              //     }
              //     <NavLink to="/login" activeClassName="active">
              //     <div className='App-navigationBar-button'>
              //       <Button color="primary">login</Button>
              //     </div>
              //     </NavLink>
              //     <SignUp/> 
              //   </div>
              // )
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