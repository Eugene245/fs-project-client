import React from 'react'
import PostById from '../components/posts/PostById'
import {connect} from 'react-redux'
import { fetchPostById } from '../ducks/app/actions'
import * as postSelectors from '../ducks/post/selectors'

class PostListContainer extends React.Component {
  
  componentDidMount() {
    const { fetchPost, hasPosts } = this.props
    if (!hasPosts)
    fetchPost('5de611c811de7d0c9c6e530c')
    
   }

  

  render() {
    const { post, hasPosts } = this.props
    return (
      <PostById
        post={post}
      />
    )
  }
}


const mapStateToProps = state => ({ 
  post: postSelectors.selectPost(state, '5de611c811de7d0c9c6e530c'),
  hasPosts: postSelectors.selectHasPostsStatus(state),
})

const mapDispatchToProps = {
  fetchPost: fetchPostById,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListContainer)