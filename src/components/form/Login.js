import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'reactstrap'
import '../../styles/form.css'


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
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            name="email" 
            placeholder="email" 
            onChange={this.handleChange} />
          {' '}
          <input type="password" 
            className="inputPass" 
            name="password" 
            placeholder="password" 
            onChange={this.handleChange} />
          {' '}
          <Button color="primary" type="submit">Sign in</Button>
        </form>
      </div>
    )
  }
}

export default Login;