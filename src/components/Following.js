import React from 'react'
import PostListContainer from '../containers/PostListContainer'
import { Redirect } from 'react-router-dom'

function Following(props) {
  const { userFollowing, userStatus } = props
  if (userStatus === 'responded' && userFollowing.length === 0) {
    return (
      <div className="empty-page-info">
        <span>You are not followed to any user</span>
      </div>
    )
  }
  else if(userStatus === 'responded' && userFollowing.length !== 0) {
    return (
      <PostListContainer users={userFollowing}/>
    )
  }else if(userStatus === '' || userStatus === 'failed'){
    return <Redirect to='/login'/>
  }else if(userStatus === 'pending'){
    return (
      <div className="loader"></div>
    )
  }
}

export default Following