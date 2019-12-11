import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './styles/App.css'
import NavBarContainer from './containers/NavBarContainer'
import NotFound from './components/NotFound'
import Home from './components/Home'
import PostListContainer from './containers/PostListContainer'
import LoginContainer from './containers/LoginContainer'
import FeedContainer from './containers/FeedContainer'
import SignUpContainer from './containers/SignUpContainer'
import AddPostContainer from './containers/AddPostContainer'
import PostByIdContainer from './containers/PostByIdContainer'
import UserProfileContainer from './containers/UserProfileContainer'

class App extends React.Component {

  componentDidMount() {
    const { AuthUser, user } = this.props
    if(localStorage.getItem('token') !== null && Object.keys(user.user).length === 0) {
      AuthUser({ token: localStorage.getItem('token') })
    }
  }

  render() { 
      return (
        <React.Fragment>
          <BrowserRouter>
            <NavBarContainer />
              <main className="container">        
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/posts" exact component={PostListContainer} />
                  <Route path="/login" component={LoginContainer} />
                  <Route path="/signup" component={SignUpContainer} />
                  <Route path="/list" component={FeedContainer} />
                  <Route path="/profile/:name" component={UserProfileContainer} />
                  <Route path="/add-post" component={AddPostContainer} />
                  <Route path="/posts/:id" component={PostByIdContainer} />
                  <Route path="/not-found" component={NotFound} />
                  <Route path="/" component={false ? Home : NotFound} />
                  <Redirect to="/not-found" />
                </Switch>
              </main>
            </BrowserRouter>
          </React.Fragment>
      );
    
  }
}

export default App;