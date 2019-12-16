import Search from '../components/Search'
import {connect} from 'react-redux'
import { searchUsers } from '../ducks/app/actions'
import { resetFoundUsers } from '../ducks/user/actions'
import { selectUser } from '../ducks/user/selectors'

const mapStateToProps = (state) => ({
  foundUsers: selectUser(state).foundUsers,
})

const mapDispatchToProps = {
  searchUsers: searchUsers,
  resetFoundUsers: resetFoundUsers,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search)