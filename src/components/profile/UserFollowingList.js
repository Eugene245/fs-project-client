import React from 'react';
import '../../styles/profile/following-list.css'
import UserFollowingListItem from './UserFollowingListItem'
import { Redirect } from 'react-router-dom'

class UserFollowingList extends React.Component{
constructor(props) {
  super(props)
}

  render() {
    const { followingList, userStatus } = this.props
      if(userStatus === 'responded' && followingList.length !== 0) {
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
    }
    else if(userStatus === 'responded' && followingList.length === 0){
      return (
        <div>
          <h2>No users</h2>
        </div>
      )
    }else if(userStatus === '' || userStatus === 'failed'){
      return <Redirect to='/login'/>
    }else if(userStatus === 'pending'){
      return (
        <div className="loader"></div>
      )
    }
  }
}

export default UserFollowingList;