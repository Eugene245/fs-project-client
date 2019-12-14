import React from "react";
import { Redirect } from 'react-router-dom'
import '../../styles/forms/add-post-form.css'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', text: '', isSubmitted: false, redirect: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setRedirect = (bool) => {
    this.setState({
      redirect: bool
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Posts' />
    }else {
      return <Redirect to='/add-post' />
    }
  }

  handleChange(event) {
    if (event.target.name === "title") {
      this.setState({title: event.target.value})
    }
    if (event.target.name === "text") {
      this.setState({text: event.target.value})
    }
  }

  handleSubmit(event) {
    if (this.state.title !== '' && this.state.text !== ''){
      this.setState({ redirect: true })
    }
    const { userSelect, onAddPost } = this.props
    event.preventDefault();
    const post = {
      userName: userSelect.user.name,
      userIdString: userSelect.user.id,
      avatar_url: userSelect.user.avatar_url,
      title: this.state.title,
      postText: this.state.text,
    }
    onAddPost(post)
  }

  render() {
    return (
      <div className="add-post-form-container">
        {this.renderRedirect()}
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="add-post-form__input" placeholder="Title" name="title" onChange={this.handleChange}/>
          <input type="text" className="add-post-form__input" placeholder="text" name="text" onChange={this.handleChange}/>
          <button className="add-post-form__submit-button" type="submit">Create Post</button>
        </form>
      </div>
    )
  }
}

export default SignUp;