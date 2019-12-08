import FollowButton from '../components/profile/FollowButton'
import {connect} from 'react-redux'
import { selectUser } from '../ducks/user/selectors'
import { follow, unfollow } from '../ducks/app/actions'

const mapStateToProps = (state, ownProps) => ({
  user: selectUser(state),
  userName: ownProps.userName,
})

const mapDispatchToProps = {
  onFollow: follow,
  onUnfollow: unfollow,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FollowButton)