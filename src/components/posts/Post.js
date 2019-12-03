import React from 'react';
import '../../styles/post.css';
import ReadMoreAndLess from 'react-read-more-less';
import store from '../../store/index'

class Post extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return <div id="wrapper">
  <div class="post" id={`post-${this.props.id}`}>
    
    <div class="info">
      <div class="user">
        <div class="avatar">
          <img src="https://image.flaticon.com/icons/svg/126/126486.svg" />
        </div>
        <div class="name">
          <span>{this.props.author}</span>
        </div>
      </div>
      <div class="text">
        <div class="title">
            <span class="title-text">{this.props.title}</span>
        </div>
        <div class="content">
          <span class="content-text">
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
          <img src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg" />
        </div>
      </div>
      <div class="post-info">
        <div class="date">
          <span>{this.props.date}</span>
        </div>
        <div class="likes">
          <button class="like-button" onClick={this.props.onIncrement}>
            <span>❤</span>
            <span class="counter">{this.props.likes}</span>
          </button>
          <button class="like-button" onClick={this.props.onDecrement}>
            <span class="counter">dislike</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    }    
}

export default Post;