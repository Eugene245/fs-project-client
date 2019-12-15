import React from 'react'

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
    const { postId, userName, onAddComment } = this.props
    event.preventDefault();
    const comment = {
      id: postId,
      userName: userName,
      commentText: this.state.comment
    }
    if(this.state.comment !== '')
      onAddComment(comment)
  }
  
  render(){
    const { userName } = this.props
    return(
      <div class="add-comment-form-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            name="comment" 
            placeholder="comment" 
            onChange={this.handleChange} />
          {
            (() => {
              if(!userName || this.state.comment === '') {
                return (
                  <button className="add-comment-form__button_disabled" type="submit" disabled="disabled">Send</button>
                )
              }else {
                return (
                  <button className="add-comment-form__button" type="submit">Send</button>
                )
              }
            })()
          }
        </form>
      </div>
    )
  }
}

