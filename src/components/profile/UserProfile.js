import React from 'react'
import '../../styles/profile/user-page.css'
import UserInfo from './UserInfo'
import PostContainer from '../../containers/PostContainer'

class UserProfile extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { receivedUser, user, posts } = this.props
      return (
        <div className="wrapper">
        {
          (() => {
            if(Object.entries(receivedUser).length !== 0) {              
            return (
              <>
                <UserInfo receivedUser={receivedUser} user={user.user}/>
                {posts.map(post => (
                  <PostContainer post={post} />
                ))}
              </>
            )
            } else {              
              return (
                <div className="loader"></div>
              )
            }
          })()
        }
        </div>
      )
  }
}

export default UserProfile