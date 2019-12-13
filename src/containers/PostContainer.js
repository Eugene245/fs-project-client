import React from 'react'
import Post from '../components/posts/Post'
import {connect} from 'react-redux'
import { selectUser } from '../ducks/user/selectors'
import { deletePost } from '../ducks/app/actions'

const mapStateToProps = (state, ownProps) => ({
  userName: selectUser(state).user.name,
  author: ownProps.post.userName,
  title: ownProps.post.title,
  text: ownProps.post.postText,
  date: ownProps.post.creation_date,
  id: ownProps.post._id,
  commentsQty: ownProps.post.comments.length ,
})

const mapDispatchToProps = {
  deletePost: deletePost
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post)