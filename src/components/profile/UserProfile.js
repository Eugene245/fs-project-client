
import React from 'react'
import UserInfo from './UserInfo'
import PostList from '../posts/PostList'


class UserProfile extends React.Component {
  constructor(props){
    super(props)
  }
  // componentDidMount() {
  //   const { fetchPosts } = this.props
  //     fetchPosts(
  //       PostListContainer.DEFAULT_LIMIT,
  //       PostListContainer.DEFAULT_OFFSET,
  //     )
  // }

  // handlePostsFetch = () => {
  //   const { fetchPosts, pagination } = this.props
  //   const offset = pagination.offset + PostListContainer.DEFAULT_LIMIT
  //   fetchPosts(PostListContainer.DEFAULT_LIMIT, offset)
  // }

  render() {
      return (
        <>
        {
          (() => {
            if(Object.entries(this.props.receivedUser).length !== 0) {              
            return (
              <UserInfo user={this.props.receivedUser} />
            )
            } else if(Object.entries(this.props.receivedUser).length === 0){              
              return (
                <div>loading...</div>
              )
            }
            if(this.props.posts.length !== 0) {              
              return (
                <PostList
              posts={this.props.posts}
              // handleFetch={this.handlePostsFetch}
              // showPagination={hasMorePages}
              // {...restProps}
              />
              )
            } else if(this.props.posts.length === 0) {              
              return (
                <div>loading...</div>
              )
            }
          })()
        }
        </>
      )

  }
}

export default UserProfile