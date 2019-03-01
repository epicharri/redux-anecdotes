import React, { useState } from 'react'

const App = (props) => {

  const [newAnecdote, setAnecdote] = useState('')
  
  const store = props.store
  const anecdotes = props.store.getState()
  console.log('Appissa props.store.getState() ', props.store.getState())
  const vote = (id) => {
    console.log('vote', id)
    store.dispatch({ 
      type: 'VOTE',
      data: {
        id: id
    } })
  }
  
  const addAnecdote = event => {
    event.preventDefault()
    console.log(event.target.value)
    store.dispatch({ 
      type: 'NEW',
      data: {
        content: newAnecdote
    } })
    setAnecdote('')
  }  
  
  

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input
            type="text"
            value={newAnecdote}
            name="Anecdote"
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

export default App
