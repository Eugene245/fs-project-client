import React from 'react'
import {connect} from 'react-redux';
import UserPosts from '../components/profile/UserPosts';
import { selectUser, selectUserStatus } from '../ducks/user/selectors'

const mapStateToProps = (state) => ({
  user: selectUser(state),
  userStatus: selectUserStatus(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPosts)
