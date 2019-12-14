import React from 'react';
import { NavLink } from 'react-router-dom'
import FollowButtonContainer from '../../containers/FollowButtonContainer'

function UserFollowingListItem(props) {
  const { userName } = props
    return (
      <li>
        <div>
        <div className="post-content__user-avatar">
          <img src="https://image.flaticon.com/icons/svg/126/126486.svg" />
        </div>
        <NavLink to={`/users/${userName}`} activeClassName="active">
          <span>{userName}</span>
        </NavLink>
        </div>
        <FollowButtonContainer userName={userName}/>
      </li>
    );
}

export default UserFollowingListItem;