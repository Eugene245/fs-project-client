import React from 'react'
import Post from '../components/posts/Post'
import {connect} from 'react-redux'
import * as types from '../ducks/post/types'

export class PostContainer extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <div>      
        <Post 
          author={this.props.post.userName}
          title={this.props.post.title}
          text={this.props.post.postText}
          date={this.props.post.creation_date}
          id={this.props.post._id}
          likes={this.props.post.likes}
          commentsQty={this.props.post.comments.length} 
        />
      </div>
    );
  }
}

export default connect (
  null,
  dispatch => {
    return {
      
    }
  })(PostContainer)

