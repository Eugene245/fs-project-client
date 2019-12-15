import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/forms/login-form.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange(event) {
    if (event.target.name === "email") {
      this.setState({ email: event.target.value })
    }
    if(event.target.name === "password") {
      this.setState({password: event.target.value})
    }
  }

  handleSubmit(event) {
    const { onLoginRequest } = this.props
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    onLoginRequest(user)
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-container__title">
          <h2>Log In</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            className="login-form__input" 
            name="email" 
            placeholder="email" 
            onChange={this.handleChange} />
          {' '}
          <input type="password" 
            className="login-form__input" 
            name="password" 
            placeholder="password" 
            onChange={this.handleChange} />
          {' '}
          <button className="login-form__submit-button"  type="submit">Sign in</button>
        </form>
      </div>
    )
  }
}

export default Login;