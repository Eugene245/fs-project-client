import React from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import SignUpContainer from '../containers/SignUpContainer'
import AddPostContainer from '../containers/AddPostContainer'
import Notification from './Notification'
import store from '../store/index'
import * as types from '../ducks/user/types'

const NavigationBar = props => {
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
          switch (props.user.isAuthenticated) {
            case true:
              return (            
                <div className='App-navigationBar-button'>
                  <span>{props.name}</span>{' '}
                  <Button color="secondary" onClick={() =>
                    store.dispatch({type: types.LOGOUT})
                  }>logout</Button>
                  <NavLink to="/add-post" activeClassName="active">
                  <div className='App-navigationBar-button'>
                    <Button color="danger">Add Post</Button>
                  </div>
                  </NavLink>
              </div>
              )
            case false:
              return (
                <div>
                  <NavLink to="/login" activeClassName="active">
                  <div className='App-navigationBar-button'>
                    <Button color="primary">login</Button>
                  </div>
                  </NavLink>
                  <SignUpContainer/>
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

NavigationBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default NavigationBar;