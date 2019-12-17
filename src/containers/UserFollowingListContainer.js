import {connect} from 'react-redux'
import { selectUser, selectUserStatus } from '../ducks/user/selectors'
import { selectPostStatus } from '../ducks/post/selectors'
import UserFollowingList from '../components/profile/UserFollowingList'

const mapStateToProps = (state) => ({
  followingList: selectUser(state).user.following,
  userStatus: selectUserStatus(state),
  postStatus: selectPostStatus(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFollowingList)