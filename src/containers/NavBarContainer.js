import React from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../components/NavigationBar';


class NavBarContainer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <NavigationBar user={this.props.user} />
      </div>
    );
  }

}

export default connect ( state => {
  return { user: state.user }
})(NavBarContainer)