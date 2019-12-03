import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notification extends React.Component {
  constructor(props){
    super(props)
}

  notify = () => toast(
    this.props.children
  );

  render () {
    return (
      <div>
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
        <Button color="danger" onClick={this.notify}>Notify!</Button>
      </div>
    )
  }
}

export default Notification;