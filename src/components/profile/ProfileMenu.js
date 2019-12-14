import React from 'react'
import { NavLink } from 'react-router-dom'

function ProfileMenu(props) {
  const { name } = props
  return (
  <div className="dropdown">
    <span>{name}</span>
    <div className="dropdown-content">
      <div>
        <NavLink to={`/profile/edit`} activeClassName="active">
          <div className='App-navigationBar-button'>Edit Profile</div>
        </NavLink>
        <NavLink to={`/profile/posts`} activeClassName="active">
          <div className='App-navigationBar-button'>Posts</div>
        </NavLink>
        <NavLink to={`/profile/liked-posts`} activeClassName="active">
          <div className='App-navigationBar-button'>Liked Posts</div>
        </NavLink>
        <NavLink to={`/profile/following`} activeClassName="active">
          <div className='App-navigationBar-button'>Following users</div>
        </NavLink>
      </div>
    </div>
  </div>
  )
}

export default ProfileMenu