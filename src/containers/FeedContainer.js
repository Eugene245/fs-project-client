import React from 'react';
import FeedComponent from '../components/FeedComponent'

class FeedContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {isLogged: false, arr: []}
  }

  render() {
    return (
      <FeedComponent articleList={this.state.arr}/>
    );
  }

}
export default FeedContainer;