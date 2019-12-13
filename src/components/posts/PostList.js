import React from 'react';
import '../../styles/loader.css'
import PostContainer from '../../containers/PostContainer'
import InfiniteScroll from 'react-infinite-scroller';

class PostList extends React.Component{
constructor(props) {
  super(props)
  this.loadFunc = this.loadFunc.bind(this);
}

shouldComponentUpdate(nextProps) {
  return this.props.offset !== nextProps.offset
}

  loadFunc() {
    const pages = 2
    const { fetchMorePosts, pagination, users, user, ids } = this.props
    const offset = pagination.offset + pages
    if(users)
      fetchMorePosts(pages, offset, { users: users }) 
    else if(ids)
      fetchMorePosts(pages, offset, { ids: ids }) 
    else if(user)
      fetchMorePosts(pages, offset, { user: user }) 
  }

  render() {
    const { posts, hasMorePages } = this.props
      return (
        <div>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadFunc}
            hasMore={hasMorePages}
            loader={<div className="loader" key={0}></div>}
          >
            {posts.map(post => (
              <PostContainer
                post={post}
              />
            ))}
          </InfiniteScroll>
        </div>
      );
  }
}

export default PostList;