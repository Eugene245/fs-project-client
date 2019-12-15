import React from 'react';
import '../../styles/profile/following-list.css'
import UserFollowingListItem from './UserFollowingListItem'

class UserFollowingList extends React.Component{
constructor(props) {
  super(props)
}

  render() {
    const { followingList } = this.props
      if(followingList !== undefined) {
      return (
        <div>
            <ul className="following-list">
              {followingList.map(userName => (
                <UserFollowingListItem
                  userName={userName}
                />
              ))}
            </ul>
        </div>
      )
    }else {
      return (
        <div className="loader"></div>
      )
    }
  }
}

export default UserFollowingList;