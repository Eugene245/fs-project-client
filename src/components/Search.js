import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' }; 
    this.handleChange = this.handleChange.bind(this);
}

  handleChange(event) {
    const { searchUsers, resetFoundUsers } = this.props
    
    if(event.target.value !== '')
      searchUsers(event.target.value)
    else
      resetFoundUsers()
  } 

  render() {
    const { foundUsers } = this.props
    return (
      <div className="search-container">
        <input type="text" 
          className="search__input" 
          name="search" 
          placeholder="search" 
          onChange={this.handleChange} />
        <ul className="search-results">
          {
            foundUsers.length !== 0 && foundUsers.map(user => (
              <li className="search-results__item">
                <Link to={`/users/${user}`}>
                  <span>{user}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Login;