import React from "react";

import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

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
      <div>
        <Button color="link" onClick={this.toggle}>Sign up</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            <form className="signUpForm" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="name" name="username" onChange={this.handleChange}/>
              <input type="text" placeholder="e-mail" name="email" onChange={this.handleChange}/>
              <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
              <input className="App-signin-button" type="submit" value="Sign up" />
            </form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default SignUp;