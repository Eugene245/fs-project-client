import React from 'react'

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
          <button className="follow-button follow-button_unfollow" onClick={this.unfollowHandler}>Unfollow</button>
        ) 
      }else {
        return (
          <button className="follow-button follow-button_follow" onClick={this.followHandler}>Follow</button>
        ) 
      }
    }else {
      return (
        <button className="follow-button" disabled="disabled" contextmenu="edit">Follow</button>
      ) 
    }
  }
}

export default FollowButton