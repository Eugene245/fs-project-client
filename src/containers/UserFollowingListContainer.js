import {connect} from 'react-redux'
import { selectUser } from '../ducks/user/selectors'
import UserFollowingList from '../components/profile/UserFollowingList'

const mapStateToProps = (state) => ({
  followingList: selectUser(state).user.following,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFollowingList)