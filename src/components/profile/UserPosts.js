import React from 'react'
import PostListContainer from '../../containers/PostListContainer'
import { Redirect } from 'react-router-dom'

function UserPosts(props) {
  const { user, userStatus } = props
  if (!user.isAuthenticated) {
    return (
      <div className="loader"></div>
    )
  }
  else if(user.user.name) {
    return (
      <PostListContainer user={user.user.name}/>
    )
  }else if(userStatus === '' || userStatus === 'failed'){
    return <Redirect to='/login'/>
  }else if(userStatus === 'pending'){
    return (
      <div className="loader"></div>
    )
  }
}

export default UserPosts