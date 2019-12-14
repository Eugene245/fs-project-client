import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './styles/App.css'
import NavBarContainer from './containers/NavBarContainer'
import NotFound from './components/NotFound'
import Home from './components/Home'
import LoginContainer from './containers/LoginContainer'
import SignUpContainer from './containers/SignUpContainer'
import AddPostContainer from './containers/AddPostContainer'
import PostByIdContainer from './containers/PostByIdContainer'
import UserProfileContainer from './containers/UserProfileContainer'
import FollowingContainer from './containers/FollowingContainer'
import UserPostsContainer from './containers/UserPostsContainer'
import UserLikedPostsContainer from './containers/UserLikedPostsContainer'
import UserFollowingListContainer from './containers/UserFollowingListContainer'
import UserProfileEditContainer from './containers/UserProfileEditContainer'

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
                  <Route path="/feed" component={Home} />
                  <Route path="/login" component={LoginContainer} />
                  <Route path="/signup" component={SignUpContainer} />
                  <Route path="/following" component={FollowingContainer} />
                  <Route path="/profile/edit" component={UserProfileEditContainer} />
                  <Route path="/profile/posts" component={UserPostsContainer} />
                  <Route path="/profile/following" component={UserFollowingListContainer} />
                  <Route path="/profile/liked-posts" component={UserLikedPostsContainer} />
                  <Route path="/users/:name" component={UserProfileContainer} />
                  <Route path="/add-post" component={AddPostContainer} />
                  <Route path="/posts/:id" component={PostByIdContainer} />
                  <Route path="/not-found" component={NotFound} />
                  <Route exact path="/" render={() => <Redirect to="/feed" />} />
                  <Redirect to="/not-found" />
                </Switch>
              </main>
            </BrowserRouter>
          </React.Fragment>
      );
    
  }
}

export default App;