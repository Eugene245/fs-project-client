import React from 'react';
import { NavLink } from 'react-router-dom'
import FollowButtonContainer from '../../containers/FollowButtonContainer'

function UserFollowingListItem(props) {
  const { userName } = props
    return (
      <li className="following-list-item">
        <div className="following-list-item-user">
          <div className="following-list-item-user__user-avatar">
            <img src="https://image.flaticon.com/icons/svg/126/126486.svg" />
          </div>
          <NavLink to={`/users/${userName}`} activeClassName="active">
            <span className="following-list-item-user__user-name">{userName}</span>
          </NavLink>
        </div>
        <div className="following-list-item__follow-button-container">
          <FollowButtonContainer userName={userName}/>
        </div>
      </li>
    );
}

export default UserFollowingListItem;