
import React from 'react'
import { connect } from 'react-redux'
import UserProfile from '../components/profile/UserProfile'
import * as userSelectors from '../ducks/user/selectors'
import * as postSelectors from '../ducks/post/selectors'
import { actions as appActions } from '../ducks/app'

class UserProfileContainer extends React.Component {

  componentDidMount() {
    const { fetchUser } = this.props
    fetchUser(this.props.match.params.name)
  }

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
