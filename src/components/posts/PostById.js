import React from 'react'
import CommentList from './CommentList'
import { Link } from 'react-router-dom'
import '../../styles/post/post-page.css'
import DateConverter from '../DateConverter'
import LikeButtonContainer from '../../containers/LikeButtonContainer'
import AddCommentContainer from '../../containers/AddCommentContainer'

class PostById extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    const { post, postStatus } = this.props
    console.log(this.props)
    return(
      <>
      {
        (() => {
          if(postStatus === 'responded' && post !== undefined) {
            return (
              <div id="wrapper">
            <div class="post-page" id={post._id}>
              <div class="post-content">
                <div class="post-content__user">
                  <div class="post-content__user-avatar">
                    <img src="https://image.flaticon.com/icons/svg/126/126486.svg" />
                  </div>
                  <div class="post-content__user-name">
                    <Link to={`/users/${post.userName}`}>
                      <span>{post.userName}</span>
                    </Link>
                  </div>
                </div>
                <div class="post-content__text">
                  <div class="post-content__text-title">
                      <span class="post-content__text-title-text" onClick={this.clickHandler}>{post.title}</span>
                  </div>
            <div className="post-content__content">
              <div className="post-content__content-text">
                <p>{post.postText}</p>
              </div>
            </div>
          </div>
          <div class="post-info">
              <div class="post-info__date">
                <DateConverter date={post.creation_date} type={'date-time'} />
              </div>
              <div className="post-info-footer">
                <div className="post-info-footer__comment-add-form">
                  <AddCommentContainer postId={post._id}/>
                </div>
                <div class="post-info-footer__likes">
                <LikeButtonContainer postId={post._id}/>
                  <div className="post-info-footer__comments-qty">
                    <svg viewBox="0 0 24 24" width="24" height="24"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                    <span>{post.comments.length}</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="comment-list">
          <CommentList postId={post._id} comments={post.comments}/>
        </div>
      </div>
    </div>
            )
          }else if(post === undefined){
            return (
              <div className="empty-page-info">
                <span>Post not found</span>
              </div>
            )
          }else {
            return <div className="loader"></div>
          }
        })()
      }
      </>
    )
  }
}

export default PostById;