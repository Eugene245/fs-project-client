
import React from 'react'
import { connect } from 'react-redux'
import UserProfile from '../components/profile/UserProfile'
import * as userSelectors from '../ducks/user/selectors'
import * as postSelectors from '../ducks/post/selectors'
import { actions as appActions } from '../ducks/app'
import { resetPosts } from '../ducks/post/actions'

class UserProfileContainer extends React.Component {

  componentDidMount() {
    const { fetchUser, resetPosts } = this.props
    resetPosts()
    fetchUser(this.props.match.params.name)
  }

  render() {
    const { posts, receivedUser, user } = this.props
    return (
      <UserProfile
        receivedUser={receivedUser}
        posts={posts}
        user={user}
      />
    )
  }
}

const mapStateToProps = state => ({
  receivedUser: userSelectors.selectReceivedUser(state),
  posts: postSelectors.selectPosts(state),
  user: userSelectors.selectUser(state),
})

const mapDispatchToProps = {
  fetchUser: appActions.fetchUser,
  resetPosts: resetPosts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileContainer)
