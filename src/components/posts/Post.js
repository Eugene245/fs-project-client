import React from 'react';
import '../../styles/post.css';
import ReadMoreAndLess from 'react-read-more-less';
import { Redirect } from 'react-router-dom'

class Post extends React.Component{
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = { redirect: false, id: null }
    }

    postRedirect() {
      if(this.state.redirect)
        return <Redirect to={`/posts/${this.state.id}`} />
    }

    clickHandler(e) {
      e.preventDefault();
      this.setState({ redirect: true, id: e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id') })
    }

    render() {
        return <>
        {this.postRedirect()}
          <div id="wrapper">
            <div class="post" id={this.props.id}>
              <div class="post-content">
                <div class="post-content_user">
                  <div class="post-content_user-avatar">
                    <img src="https://image.flaticon.com/icons/svg/126/126486.svg" />
                  </div>
                  <div class="post-content_user-name">
                    <span>{this.props.author}</span>
                  </div>
                </div>
                <div class="post-content_text">
                  <div class="post-content_text-title">
                      <span class="post-content_text-title-text" onClick={this.clickHandler}>{this.props.title}</span>
                  </div>
                  <div class="post-content_content">
                    <span class="post-content_content-text">
                      <ReadMoreAndLess
                          ref={this.ReadMore}
                          className="read-more-content"
                          charLimit={140}
                          readMoreText="more"
                          readLessText="...less"
                      >
                          {this.props.text}
                      </ReadMoreAndLess>
                    </span>
                    <div className="post-content_img">
                      <img src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg" />
                    </div>
                  </div>
                </div>
                <div class="post-info">
                  <div class="post-info_date">
                    <span>{this.props.date}</span>
                  </div>
                  <div class="post-info_likes">
                    <button class="post-info_like-button" onClick={this.props.onIncrement}>
                      <span>❤</span>
                      <span class="post-info_like-button-counter">{this.props.likes}</span>
                    </button>
                    <div className="comments-qty">
                      <svg viewBox="0 0 24 24" width="24" height="24"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                      <span>{this.props.commentsQty}</span>
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