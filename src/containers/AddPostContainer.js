import { selectUser } from '../ducks/user/selectors'
import { selectPostAdded } from '../ducks/post/selectors'
import AddPost from '../components/posts/AddPost'
import {connect} from 'react-redux'
import { addPost } from '../ducks/app/actions'

const mapStateToProps = state => ({
  userSelect: selectUser(state),
  postSelect: selectPostAdded(state),
})

const mapDispatchToProps = {
  onAddPost: addPost,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPost)