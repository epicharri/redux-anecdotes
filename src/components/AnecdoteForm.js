import React, { useState } from "react"
import { createAnecdote } from '../reducers/anecdoteReducer'
 

const AnecdoteForm = ( props ) => {
  
  const store = props.store

  const [newAnecdote, setAnecdote] = useState('')

  const addAnecdote = event => {
    event.preventDefault()
    store.dispatch(
      createAnecdote(
        event.target.anecdote.value
      )
    )

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

export default AnecdoteForm
