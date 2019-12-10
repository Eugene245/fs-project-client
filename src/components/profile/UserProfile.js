
import React from 'react'
import UserInfo from './UserInfo'
import PostContainer from '../../containers/PostContainer'


class UserProfile extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
      return (
        <div className="wrapper">
        {
          (() => {
            if(Object.entries(this.props.receivedUser).length !== 0 && this.props.posts.length !== 0) {              
            return (
              <>
              <UserInfo user={this.props.receivedUser} />
              {this.props.posts.map(post => (
            <PostContainer
              // history={this.props.history}
              // key={post._id}
              post={post}
            />
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