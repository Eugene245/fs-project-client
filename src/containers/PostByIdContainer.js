import React from 'react'
import PostById from '../components/posts/PostById'
import {connect} from 'react-redux'
import * as postSelectors from '../ducks/post/selectors'
import * as userSelectors from '../ducks/user/selectors'
import * as appActions from '../ducks/app/actions'

class PostByIdContainer extends React.Component {

  componentDidMount() {
    const { onFetchPostById } = this.props
    onFetchPostById(this.props.match.params.id)
  }

  render() {
    return (
      <PostById 
      post={this.props.post}
      onSendComment={this.props.onSendComment}
      user={this.props.user}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ 
  post: postSelectors.selectPost(state, ownProps.match.params.id),
  user: userSelectors.selectUser(state)
})

const mapDispatchToProps = {
  onSendComment: appActions.addComment,
  onFetchPostById: appActions.fetchPostById,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostByIdContainer)