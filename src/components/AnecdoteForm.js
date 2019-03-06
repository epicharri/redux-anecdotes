import React, { useState } from "react"
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = ( props ) => {
  
  //const store = props.store

  const [newAnecdote, setAnecdote] = useState('')

  const addAnecdote = async (event) => {
    event.preventDefault()
    const element = event.target
    const content = element.anecdote.value
    await anecdoteService.createNew(content)
    .then(props
      .createAnecdote(
        content
      ))
    
    props.createNotification(`You added a new anecdote!`)
    setTimeout(
      () => props.createNotification(''), 5000)
    element.anecdote.value = ''
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


