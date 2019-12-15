import CommentListItem from '../components/posts/CommentListItem'
import {connect} from 'react-redux'
import { deleteComment } from '../ducks/app/actions'
import { selectUser } from '../ducks/user/selectors'

const mapStateToProps = (state, ownProps) => ({
  userName: selectUser(state).user.name,
  comment: ownProps.comment,
  postId: ownProps.postId,
})

const mapDispatchToProps = {
  deleteComment: deleteComment,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentListItem)