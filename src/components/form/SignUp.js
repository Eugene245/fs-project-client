import React from "react";
import UserRedirect from '../UserRedirect'
import '../../styles/forms/register-form.css'
import { ToastContainer, toast } from 'react-toastify';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',email: '', password: '', isSubmitted: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorNotify = this.errorNotify.bind(this);
  }


  validateEmail(email) {
    const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(String(email).toLowerCase());
  }

  errorNotify = (info) => this.toastId = toast(info, {
    autoClose: 3000,
    type: toast.TYPE.ERROR,
  });
  

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
    if(this.validateEmail(this.state.email)) {
      const user = {
        name: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
      onRegisterRequest(user)
    }else {
      this.errorNotify('email is not valid!')
    }
  }

  render() {
    return (
      <>
      <UserRedirect route='signup' />
      <ToastContainer />
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
      </>
    )
  }
}

export default SignUp;