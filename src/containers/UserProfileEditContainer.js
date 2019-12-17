import {connect} from 'react-redux'
import { selectUser, selectUserStatus } from '../ducks/user/selectors'
import UserProfileEdit from '../components/profile/UserProfileEdit'
import { editUser } from '../ducks/app/actions'

const mapStateToProps = (state) => ({
  user: selectUser(state).user,
  userStatus: selectUserStatus(state),
})

const mapDispatchToProps = {
  editUser: editUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileEdit)