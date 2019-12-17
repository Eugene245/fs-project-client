import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostList from '../components/posts/PostList'
import * as postSelectors from '../ducks/post/selectors'
import { selectPostStatus } from '../ducks/post/selectors'
import { actions as appActions } from '../ducks/app'
import { resetPosts } from '../ducks/post/actions'

class PostListContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  static DEFAULT_LIMIT = 2

  static DEFAULT_OFFSET = 0

  componentWillUpdate(nextProps) {
    return this.props.posts.length !== nextProps.posts.length
  }

  componentDidMount() {
    const { fetchPosts, resetPosts, users, user, ids } = this.props
    resetPosts()
      if(users) {
        fetchPosts(
          PostListContainer.DEFAULT_LIMIT,
          PostListContainer.DEFAULT_OFFSET,
          { users: users },
        )
      }else if(ids) {
        fetchPosts(
          PostListContainer.DEFAULT_LIMIT,
          PostListContainer.DEFAULT_OFFSET,
          { ids: ids },
        )
      }
      else if(user) {
        fetchPosts(
          PostListContainer.DEFAULT_LIMIT,
          PostListContainer.DEFAULT_OFFSET,
          { user: user },
        )
      }
  }

  render() {
    
    const { posts, hasMorePages, users, postStatus, ...restProps } = this.props
      if(postStatus === 'responded' && posts.length !== 0) {
        return (
          <PostList
            posts={posts}
            users={users}
            handleFetch={this.handlePostsFetch}
            hasMorePages={hasMorePages}
            {...restProps}
          />
        )
      }if(postStatus === 'responded' && posts.length === 0) {
        return (
          <div>
            <h2>No Posts</h2>
          </div>
        )
        }else {
        return (
          <div className="loader"></div>
        )
      }
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
  postStatus: selectPostStatus(state),
  pagination: postSelectors.selectPagination(state),
  hasMorePages: postSelectors.selectHasMorePagesStatus(state),
  hasPosts: postSelectors.selectHasPostsStatus(state),
  offset: postSelectors.selectOffsetPagination(state),
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
