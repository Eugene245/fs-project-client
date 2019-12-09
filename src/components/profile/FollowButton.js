import React from 'react'
import { Button } from 'reactstrap'

class FollowButton extends React.Component {
  constructor(props) {
    super(props)
    this.followHandler = this.followHandler.bind(this);
    this.unfollowHandler = this.unfollowHandler.bind(this);
  }

  followHandler(event) {
    const { onFollow, userName } = this.props
    event.preventDefault();
    const followData = {
      userName: this.props.user.user.name,
      followToUser: userName,
    }
    onFollow(followData)
  }

  unfollowHandler(event) {
    const { onUnfollow, userName } = this.props
    event.preventDefault();
    const unfollowData = {
      userName: this.props.user.user.name,
      unfollowToUser: userName,
    }
    onUnfollow(unfollowData)
  }

  render() {
    const { following } = this.props.user.user
    const { userName } = this.props

    if(Object.keys(this.props.user.user).length !== 0) {
      if(following.includes(userName)) {
        return (
          <Button color="secondary" onClick={this.unfollowHandler}>Unfollow</Button>
        ) 
      }else {
        return (
          <Button color="primary" onClick={this.followHandler}>Follow</Button>
        ) 
      }
    }else {
      return (
        <div>You need to login</div>
      ) 
    }
  }
}

export default FollowButton