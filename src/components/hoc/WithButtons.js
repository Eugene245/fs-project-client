import React from 'react'

export default function WithButtons(WrappedComponent, data) {
  class WithButtons extends React.Component {
    render() {
      return (
        <WrappedComponent buttons={data.buttons} {...this.props}/>
      )
    }
  }
  WithButtons.displayName = `WithButtons(${WrappedComponent})`
  return WithButtons
} 