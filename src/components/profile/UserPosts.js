import React from 'react'
import PostListContainer from '../../containers/PostListContainer'

function UserPosts(props) {
  const { user } = props
  if (!user.isAuthenticated) {
    return (
      <div className="loader"></div>
    )
  }
  else if(user.user.name) {
    return (
      <PostListContainer user={user.user.name}/>
    )
  }else {
    return (
      <div className="loader"></div>
    )
  }
}

export default UserPosts