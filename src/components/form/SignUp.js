import React from "react";
import '../../styles/forms/register-form.css'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',email: '', password: '', isSubmitted: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange(event) {
    if (event.target.name === "username") {
      this.setState({username: event.target.value})
    }
    if (event.target.name === "email") {
      this.setState({email: event.target.value})
    }
    if (event.target.name === "password") {
      this.setState({password: event.target.value})
    }
  }

  handleSubmit(event) {
    const { onRegisterRequest } = this.props
    event.preventDefault();
    const user = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    onRegisterRequest(user)
  }

  render() {
    return (
      <div className="signup-form-container">
        <div className="signup-form-container__title">
          <h2>Sign Up</h2>
        </div>
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <input type="text" className="signup-form__input"  placeholder="name" name="username" onChange={this.handleChange}/>
          <input type="text" className="signup-form__input"  placeholder="e-mail" name="email" onChange={this.handleChange}/>
          <input type="password" className="signup-form__input"  placeholder="password" name="password" onChange={this.handleChange}/>
          <input className="signup-form__submit-button" type="submit" value="Sign up" />
        </form>
      </div>
    )
  }
}

export default SignUp;