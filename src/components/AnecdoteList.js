import React from "react"
import { incVote } from "../reducers/anecdoteReducer"
import { createNotification } from '../reducers/notificationReducer'

const AnecdoteList = ( props ) => {
  const store = props.store
  console.log('AnecdoteListissä store.getState() on ', store.getState())
  const anecdotes = store.getState().anecdotes




  const vote = (id) => {

    store.dispatch(incVote(id))
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    store.dispatch(createNotification(`You voted for ${anecdote.content}`))
    setTimeout(
      () => store.dispatch(createNotification('')
      ), 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => {
                  vote(anecdote.id)
                }
              }
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
