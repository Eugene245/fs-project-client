import {connect} from 'react-redux'
import { selectUser } from '../ducks/user/selectors'
import UserProfileEdit from '../components/profile/UserProfileEdit'
import { editUser } from '../ducks/app/actions'

const mapStateToProps = (state) => ({
  user: selectUser(state).user,
})

const mapDispatchToProps = {
  editUser: editUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileEdit)