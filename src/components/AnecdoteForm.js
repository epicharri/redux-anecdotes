import React, { useState } from "react"
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'
 

const AnecdoteForm = ( props ) => {
  
  //const store = props.store

  const [newAnecdote, setAnecdote] = useState('')

  const addAnecdote = event => {
    event.preventDefault()
    props
      .createAnecdote(
        event.target.anecdote.value
      )
    
    props.createNotification(`You added a new anecdote: ${event.target.anecdote.value}`)
    setTimeout(
      () => props.createNotification(''), 5000)
    event.target.anecdote.value = ''
    setAnecdote('')
  }


  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input
            type="text"
            value={newAnecdote}
            name="anecdote"
            onChange={({ target }) =>
              setAnecdote(target.value)
            }
          />
        </div>
        <button>create</button>
      </form>
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
  createAnecdote,
  createNotification
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm


