import React from 'react'
import { connect } from 'react-redux'

const Notification = ( props ) => {
  

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (props.notification.length === 0){
    return null
  }

  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  
}

const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps)(Notification)
export default ConnectedNotification


