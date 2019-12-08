
import React from 'react'
import UserInfo from './UserInfo'
import PostList from '../posts/PostList'


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
              <PostList
              posts={this.props.posts}
              // handleFetch={this.handlePostsFetch}
              // showPagination={hasMorePages}
              // {...restProps}
              />
              </>
            )
            } else {              
              return (
                <div>loading...</div>
              )
            }
          })()
        }
        </div>
      )

  }
}

export default UserProfile