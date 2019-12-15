import AddComment from '../components/posts/AddComment'
import {connect} from 'react-redux'
import { addComment } from '../ducks/app/actions'
import { selectUser } from '../ducks/user/selectors'

const mapStateToProps = (state) => ({
  userName: selectUser(state).user.name,
})

const mapDispatchToProps = {
  onAddComment: addComment,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddComment)