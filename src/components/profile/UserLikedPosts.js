import React from 'react'
import PostListContainer from '../../containers/PostListContainer'
import { Redirect } from 'react-router-dom'

function UserLikedPosts(props) {
  const { likedPosts, userStatus, postStatus } = props
  console.log(likedPosts, userStatus,postStatus )
  if(userStatus === 'responded' && likedPosts.length !== 0) {
    return (
      <PostListContainer ids={likedPosts}/>
    )
  }else if(userStatus === 'responded' && likedPosts.length === 0){
    return (
      <div>
        <h2>No Posts</h2>
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

export default UserLikedPosts