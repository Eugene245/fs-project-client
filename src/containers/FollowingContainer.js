import React from 'react'
import {connect} from 'react-redux';
import Following from '../components/Following';
import { selectUserFollowing, selectUser } from '../ducks/user/selectors'

const mapStateToProps = (state) => ({
  userFollowing: selectUserFollowing(state),
  user: selectUser(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Following)
