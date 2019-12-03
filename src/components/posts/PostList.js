import React from 'react';
import Post from './Post';
import PostContainer from '../../containers/PostContainer'


class PostList extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        {posts.map(post => (
          <PostContainer
            // history={this.props.history}
            // key={post._id}
            post={post}
          />
        ))}
      </div>
    );
  }
}

export default PostList;