import React from 'react'
import { NavLink } from 'react-router-dom'

function ProfileMenu(props) {
  const { name } = props
  return (
  <div class="dropdown">
    <span>{name}</span>
    <div class="dropdown-content">
      <div>
        <NavLink to={`/profile/${name}`} activeClassName="active">
          <div className='App-navigationBar-button'>Profile</div>
        </NavLink>
      </div>
    </div>
  </div>
  )
}

export default ProfileMenu