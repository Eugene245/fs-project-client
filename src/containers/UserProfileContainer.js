
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserProfile from '../components/profile/UserProfile'
import * as userSelectors from '../ducks/user/selectors'
import * as postSelectors from '../ducks/post/selectors'
import { actions as appActions } from '../ducks/app'

class UserProfileContainer extends React.Component {
  static DEFAULT_LIMIT = 5

  static DEFAULT_OFFSET = 0

  componentDidMount() {
    const { fetchUser } = this.props
      fetchUser(
        this.props.match.params.name,
        UserProfileContainer.DEFAULT_OFFSET,
        UserProfileContainer.DEFAULT_LIMIT,
      )
  }

  // handlePostsFetch = () => {
  //   const { fetchPosts, pagination } = this.props
  //   const offset = pagination.offset + PostListContainer.DEFAULT_LIMIT
  //   fetchPosts(PostListContainer.DEFAULT_LIMIT, offset)
  // }

  render() {
    const { posts, receivedUser } = this.props
    return (
      <UserProfile
        receivedUser={receivedUser}
        posts={posts}

      />
    )
  }
}

const mapStateToProps = state => ({
  receivedUser: userSelectors.selectReceivedUser(state),
  posts: postSelectors.selectPosts(state)
})

const mapDispatchToProps = {
  fetchUser: appActions.fetchUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileContainer)
