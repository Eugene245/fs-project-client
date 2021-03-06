import React from 'react'
import {connect} from 'react-redux';
import NavigationBar from '../components/NavigationBar';
import { selectUser } from '../ducks/user/selectors'
import { logoutUser } from '../ducks/app/actions'

const mapStateToProps = (state) => ({
  user: selectUser(state)
})

const mapDispatchToProps = {
  logout: logoutUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationBar)
