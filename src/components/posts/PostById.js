
import React from 'react'

export default class PostById extends React.Component {
  constructor(props){
    super(props)
  }


  
  render(){
    
    console.log(this.props.post)
    return(
    <div >Post id: </div>
    )
  }
}

