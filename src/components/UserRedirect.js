import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { selectUser, selectUserStatus } from '../ducks/user/selectors'
import { selectPostStatus } from '../ducks/post/selectors'

class UserRedirect extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { route, postStatus, user, userStatus } = this.props
    if(userStatus === '' || userStatus === 'pending' || userStatus === 'failed') {
      return <Redirect to={`/${route}`}/>
    }else {
      return <Redirect to='/feed'/>
    }

  }
}

const mapStateToProps = state => ({
  postStatus: selectPostStatus(state),
  user: selectUser(state),
  userStatus: selectUserStatus(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserRedirect)
