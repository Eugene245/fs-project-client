import React from 'react'
import { Button } from 'reactstrap'

export default class AddComment extends React.Component {
  constructor(props){
    super(props)
    this.state = { comment: '' }; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ comment: event.target.value })
  }

  handleSubmit(event) {
    const { postId, userName, onSendComment } = this.props
    event.preventDefault();
    const comment = {
      id: postId,
      userName: userName,
      commentText: this.state.comment
    }
    onSendComment(comment)
  }
  
  render(){
    return(
      <div class="add-comment-block">
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            name="comment" 
            placeholder="comment" 
            onChange={this.handleChange} />
          <Button color="primary" type="submit">Send</Button>
        </form>
      </div>
    )
  }
}

