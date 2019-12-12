
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostList from '../components/posts/PostList'
import * as postSelectors from '../ducks/post/selectors'
import { actions as appActions } from '../ducks/app'
import { resetPosts } from '../ducks/post/actions'

class PostListContainer extends React.Component {
  static DEFAULT_LIMIT = 2

  static DEFAULT_OFFSET = 0

  // shouldComponentUpdate(nextProps) {
  //   return this.props.posts.postIds !== nextProps.posts.postIds
  // }

  componentDidMount() {
    const { fetchPosts, resetPosts, users } = this.props
    resetPosts()
      fetchPosts(
        PostListContainer.DEFAULT_LIMIT,
        PostListContainer.DEFAULT_OFFSET,
        { users: users },
      )
    
  }

  render() {
    console.log(this.props.posts)
    const { posts, hasMorePages, users, ...restProps } = this.props
      return (
        <PostList
          posts={posts}
          users={users}
          handleFetch={this.handlePostsFetch}
          hasMorePages={hasMorePages}
          {...restProps}
        />
      )
  }
}

PostListContainer.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  pagination: PropTypes.object.isRequired,
  hasMorePages: PropTypes.bool.isRequired,
  hasPosts: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  posts: postSelectors.selectPosts(state),
  pagination: postSelectors.selectPagination(state),
  hasMorePages: postSelectors.selectHasMorePagesStatus(state),
  hasPosts: postSelectors.selectHasPostsStatus(state),
  offset: postSelectors.selectOffsetPagination(state)
})

const mapDispatchToProps = {
  fetchPosts: appActions.fetchPosts,
  fetchMorePosts: appActions.fetchMorePosts,
  resetPosts: resetPosts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListContainer)
