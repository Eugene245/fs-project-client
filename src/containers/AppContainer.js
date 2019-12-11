import React from 'react'
import {connect} from 'react-redux';
import App from '../App';
import { selectUser } from '../ducks/user/selectors'
import { AuthUser } from '../ducks/app/actions'

const mapStateToProps = (state) => ({
  user: selectUser(state)
})

const mapDispatchToProps = {
  AuthUser: AuthUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
