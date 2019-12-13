import React from 'react'
import {connect} from 'react-redux';
import UserPosts from '../components/profile/UserPosts';
import { selectUser } from '../ducks/user/selectors'

const mapStateToProps = (state) => ({
  user: selectUser(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPosts)
