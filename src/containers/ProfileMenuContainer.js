
import ProfileMenu from '../components/profile/ProfileMenu'
import {connect} from 'react-redux'
import { selectUser } from '../ducks/user/selectors'

const mapStateToProps = (state) => ({
  name: selectUser(state).user.name
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileMenu)