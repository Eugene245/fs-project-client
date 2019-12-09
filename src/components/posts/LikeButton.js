import React from 'react'

class FollowButton extends React.Component {
  constructor(props) {
    super(props)
    this.likeHandler = this.likeHandler.bind(this);
    this.unlikeHandler = this.unlikeHandler.bind(this);
  }

  likeHandler(event) {
    const { onLike, postId } = this.props
    event.preventDefault();
    const likeData = {
      userName: this.props.user.user.name,
      postId: postId,
    }
    onLike(likeData)
  }

  unlikeHandler(event) {
    const { onUnlike, postId } = this.props
    event.preventDefault();
    const unlikeData = {
      userName: this.props.user.user.name,
      postId: postId,
    }
    onUnlike(unlikeData)
  }

  render() {
    const { liked_posts } = this.props.user.user
    const { postId, post } = this.props

    if(Object.keys(this.props.user.user).length !== 0 ) {
      if(liked_posts.includes(postId)) {
        return (
          <button class="post-info__like-button post-info__like-button_liked" onClick={this.unlikeHandler}>
            <span>❤</span>
        <span class="post-info__like-button-counter">{post.likes}</span>
          </button>
        ) 
      }else {
        return (
          <button class="post-info__like-button" onClick={this.likeHandler}>
            <span>❤</span>
        <span class="post-info__like-button-counter">{post.likes}</span>
          </button>
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