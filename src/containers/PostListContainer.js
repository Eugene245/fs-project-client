
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostList from '../components/posts/PostList'
import * as postSelectors from '../ducks/post/selectors'
import { actions as appActions } from '../ducks/app'

class PostListContainer extends React.Component {
  static DEFAULT_LIMIT = 2

  static DEFAULT_OFFSET = 0

  componentDidMount() {
    const { fetchPosts, hasPosts } = this.props
    if (!hasPosts) {
      fetchPosts(
        PostListContainer.DEFAULT_LIMIT,
        PostListContainer.DEFAULT_OFFSET,
      )
    }
  }

  render() {
    const { posts, hasMorePages, ...restProps } = this.props
      return (
        <PostList
          posts={posts}
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListContainer)
