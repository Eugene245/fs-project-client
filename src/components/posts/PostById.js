import React from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

class PostById extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    const { post, user } = this.props
    return(
      <div id="wrapper">
      <div class="post-page" id={post._id}>
        <div class="info">
          <div class="user">
            <div class="avatar">
              <img src="https://image.flaticon.com/icons/svg/126/126486.svg" />
            </div>
            <div class="name">
              <span>{post.userName}</span>
            </div>
          </div>
          <div class="text">
            <div class="title">
                <span class="title-text">{post.title}</span>
            </div>
            <div class="content">
              <span class="content-text">
                {post.postText}
              </span>
              <img src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg" />
            </div>
          </div>
          <div class="post-info">
            <div class="date">
              <span>{post.creation_date}</span>
            </div>
            <div class="likes">
              <button class="like-button">
                <span>❤</span>
                <span class="counter">{post.likes}</span>
              </button>
              <button class="like-button">
                <span class="counter">dislike</span>
              </button>
            </div>
          </div>
          <div>
            <span class="comments-qty">{post.comments.length} comments</span>
            <AddComment postId={post._id} userName={user.user.name} onSendComment={this.props.onSendComment}/>
            <div class="comment-list">
              <CommentList comments={post.comments}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default PostById;