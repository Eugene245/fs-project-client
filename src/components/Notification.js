import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notification extends React.Component {
  constructor(props){
    super(props)
}

toastId = null;

notify = (info) => this.toastId = toast(info, {
  autoClose: 3000,
  type: toast.TYPE.ERROR,
});

  render () {
    const { error } = this.props
    return (
      <>
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} onload={this.notify(error)}/>
      </>
    )
  }
}

export default Notification;