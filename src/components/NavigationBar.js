import React from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import store from '../store/index'
import * as types from '../ducks/user/types'

class NavigationBar extends React.Component{

render() {
  return (
    <nav className='App-navigationBar'>  

      <NavLink to="/home" activeClassName="active">
        <div className='App-navigationBar-button'>Home</div>
      </NavLink>  

      <NavLink to="/Posts" activeClassName="active">
        <div className='App-navigationBar-button'>Posts</div>
      </NavLink>

      <NavLink to="/list" activeClassName="active">
        <div className='App-navigationBar-button'>list</div>
      </NavLink>

      {
        (() => {
          switch (this.props.user.isAuthenticated) {
            case true:
              return (            
                <div className='App-navigationBar-button'>
                  <span>{this.props.user.user.name}</span>{' '}
                  <Button color="secondary" onClick={this.props.logout}>logout</Button>
                  <NavLink to="/add-post" activeClassName="active">
                  <div className='App-navigationBar-button'>
                    <Button color="danger">Add Post</Button>
                  </div>
                  </NavLink>

                  <NavLink to={`/profile/${this.props.user.user.name}`} activeClassName="active">
                  <div className='App-navigationBar-button App-navigationBar-button__profile'>
                    <Button color="info">{this.props.user.user.name}</Button>
                  </div>
                  </NavLink>
                
              </div>
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