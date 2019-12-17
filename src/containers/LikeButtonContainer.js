import LikeButton from '../components/posts/LikeButton'
import {connect} from 'react-redux'
import { selectUser, selectUserStatus } from '../ducks/user/selectors'
import { selectPost } from '../ducks/post/selectors'
import { like, unlike } from '../ducks/app/actions'

const mapStateToProps = (state, ownProps) => ({
  user: selectUser(state),
  postId: ownProps.postId,
  post: selectPost(state, ownProps.postId),
  userStatus: selectUserStatus(state),
})

const mapDispatchToProps = {
  onLike: like,
  onUnlike: unlike,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LikeButton)