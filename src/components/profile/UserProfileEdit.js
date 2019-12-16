import React from 'react';
import '../../styles/forms/profile-edit-form.css'

class UserProfileEdit extends React.Component{
constructor(props) {
  super(props)
  this.state = { email: this.props.user.email, description: this.props.user.description }; 
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  if(event.target.name === "email") {
    this.setState({email: event.target.value})
  }
  if(event.target.name === "description") {
    this.setState({description: event.target.value})
  }
}

handleSubmit(event) {
  const { editUser } = this.props
  event.preventDefault();
  const user = {
    email: this.state.email,
    description: this.state.description,
    token: localStorage.getItem('token')
  }
  editUser(user)
}

  render() {
    const { user } = this.props
    console.log(this.state)
      if(Object.keys(user).length !== 0) {
      return (
        <div className="profile-edit-container">
          <h2>Change Your Profile</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" 
              className="profile-edit__input"
              name="email" 
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange} />
            {' '}
            <textarea type="text" 
              className="profile-edit__text-area"
              name="description" 
              placeholder="description"
              value={this.state.description}
              onChange={this.handleChange} />
            {' '}
            <button className="profile-edit__submit-button" type="submit">Save</button>
          </form>
        </div>
      )
    }else {
      return (
        <>
          <div className="loader"></div>
          <span>You need to log in</span>
        </>
      )
    }
  }
}

export default UserProfileEdit;