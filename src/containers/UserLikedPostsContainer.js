import React from 'react'
import {connect} from 'react-redux';
import UserLikedPosts from '../components/profile/UserLikedPosts';
import { selectUser, selectUserStatus } from '../ducks/user/selectors'
import { selectPostStatus } from '../ducks/post/selectors'

const mapStateToProps = (state) => ({
  likedPosts: selectUser(state).user.liked_posts,
  user: selectUser(state),
  userStatus: selectUserStatus(state),
  postStatus: selectPostStatus(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLikedPosts)
