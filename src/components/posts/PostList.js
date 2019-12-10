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
    const { fetchMorePosts, pagination } = this.props
    const offset = pagination.offset + pages
    fetchMorePosts(pages, offset) 
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
              // history={this.props.history}
              // key={post._id}
              post={post}
            />
          ))}
        </InfiniteScroll>
      </div>
    );
            }
          

}

export default PostList;