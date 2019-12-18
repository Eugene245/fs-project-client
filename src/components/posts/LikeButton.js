import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.likeHandler = this.likeHandler.bind(this);
    this.unlikeHandler = this.unlikeHandler.bind(this);
    this.likeWarningNotify = this.likeWarningNotify.bind(this);
  }

  likeWarningNotify = () => toast("You need to log in", {
    autoClose: 1000,
    type: toast.TYPE.ERROR,
  });

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
    const { userStatus } = this.props
    const { liked_posts } = this.props.user.user
    const { postId, post } = this.props

    if(userStatus === 'responded' && Object.keys(this.props.user.user).length !== 0) {
      if(liked_posts.includes(postId)) {
        return (
          <button className="post-info__like-button post-info__like-button_liked" onClick={this.unlikeHandler}>
            <svg viewBox="0 0 28 28" width="20" height="20" className="post-info__like-button-svg_liked"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path></g></svg>
        {(() => {
          if(post === undefined){
              return <></>
          }else {
            return <span className="post-info__like-button-counter">{post.likes}</span>
          }
        })()}
          </button>
        ) 
      }else {
        return (
          <button className="post-info__like-button" onClick={this.likeHandler}>
            <svg viewBox="0 0 28 28" width="20" height="20" className="post-info__like-button-svg_unliked"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
        {(() => {
          if(post === undefined){
            return <></>
          }else {
            return <span className="post-info__like-button-counter">{post.likes}</span>
          }
        })()}
          </button>
        ) 
      }
    }else {
      return (
        <>
        
        <button style={{marginTop: "0px"}} className="post-info__like-button" onClick={this.likeWarningNotify}>
          <svg viewBox="0 0 28 28" width="20" height="20" className="post-info__like-button-svg_unliked"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
      {(() => {
        if(post === undefined){
          return <></>
        }else {
          return <span className="post-info__like-button-counter">{post.likes}</span>
        }
      })()}
        </button>
        <ToastContainer />
        </>
      )
    }
  }
}

export default LikeButton