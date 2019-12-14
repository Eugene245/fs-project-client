import React from 'react';
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
            {followingList.map(userName => (
              <UserFollowingListItem
                userName={userName}
              />
            ))}
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