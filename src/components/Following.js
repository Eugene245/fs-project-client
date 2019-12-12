import React from 'react'
import PostListContainer from '../containers/PostListContainer'

function Following(props) {
  const { userFollowing, user } = props
  if (!user.isAuthenticated) {
    return (
      <div className="loader"></div>
    )
  }
  else if(userFollowing.length !== 0) {
    return (
      <PostListContainer users={userFollowing}/>
    )
  }else {
    return (
      <div className="loader"></div>
    )
  }
}

export default Following