import React from 'react'
import {connect} from 'react-redux';
import UserLikedPosts from '../components/profile/UserLikedPosts';
import { selectUser } from '../ducks/user/selectors'

const mapStateToProps = (state) => ({
  likedPosts: selectUser(state).user.liked_posts,
  user: selectUser(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLikedPosts)
