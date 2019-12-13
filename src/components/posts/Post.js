import React from 'react';
import '../../styles/post.css';
import ReadMoreAndLess from 'react-read-more-less';
import { Link } from 'react-router-dom'
import LikeButtonContainer from '../../containers/LikeButtonContainer'

class Post extends React.Component{
  constructor(props) {
    super(props)
    this.deletePostHandler = this.deletePostHandler.bind(this);
  }

  deletePostHandler() {
    const { deletePost, id } = this.props
    const token = localStorage.getItem('token')
    deletePost(id, { token: token })
  }

    render() {
      const { author, title, text, date, id, commentsQty, userName } = this.props
        return <>
          <div id="wrapper">
            <div className="post" id={id}>
              <div className="post-content">
                <div className="post-content__user">
                  <div className="post-content__user-avatar">
                    <img src="https://image.flaticon.com/icons/svg/126/126486.svg" />
                  </div>
                  <div className="post-content__user-name">
                    <Link to={`/users/${author}`}>
                      <span>{author}</span>
                    </Link>
                  </div>
                </div>
                {
                  (() => {
                    if(userName === author)
                      return (
                        <div className="post-actions">
                          <span>{userName}</span>
                          <div className="post-actions-content">
                            <div onClick={this.deletePostHandler}>Delete</div>
                          </div>
                        </div>
                      )
                  })()
                }
                <div className="post-content__text">
                  <div className="post-content__text-title">
                  <Link to={`/posts/${id}`}>
                    <span className="post-content__text-title-text">{title}</span>
                  </Link>
                  </div>
                  <div className="post-content__content">
                    <span className="post-content__content-text">
                      <ReadMoreAndLess
                          ref={this.ReadMore}
                          className="read-more-content"
                          charLimit={140}
                          readMoreText="more"
                          readLessText="...less"
                      >
                          {text}
                      </ReadMoreAndLess>
                    </span>
                    <div className="post-content__img">
                      {/* <img src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg" /> */}
                    </div>
                  </div>
                </div>
                <div className="post-info">
                  <div className="post-info__date">
                    <span>{date}</span>
                  </div>
                  <div className="post-info__likes">
                    <LikeButtonContainer postId={id}/>
                    <div className="comments-qty">
                      <svg viewBox="0 0 24 24" width="24" height="24"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                      <span>{commentsQty}</span>
                    </div>
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
</>
    }    
}

export default Post;