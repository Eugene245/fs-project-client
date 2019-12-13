import React from 'react'
import PostListContainer from '../../containers/PostListContainer'

function UserLikedPosts(props) {
  const { user, likedPosts } = props
  if (!user.isAuthenticated) {
    return (
      <div className="loader"></div>
    )
  }
  else if(likedPosts.length !== 0) {
    return (
      <PostListContainer ids={likedPosts}/>
    )
  }else {
    return (
      <div className="loader"></div>
    )
  }
}

export default UserLikedPosts