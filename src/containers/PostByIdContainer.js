import PostById from '../components/posts/PostById'
import {connect} from 'react-redux'
import * as postSelectors from '../ducks/post/selectors'
import * as userSelectors from '../ducks/user/selectors'
import { addComment } from '../ducks/app/actions'

const mapStateToProps = (state, ownProps) => ({ 
  post: postSelectors.selectPost(state, ownProps.match.params.id),
  user: userSelectors.selectUser(state)
})

const mapDispatchToProps = {
  onSendComment: addComment,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostById)