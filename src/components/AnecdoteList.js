import React from "react"
import { connect } from 'react-redux'
import { incVote } from "../reducers/anecdoteReducer"
import { createNotification } from '../reducers/notificationReducer'

const AnecdoteList = ( props ) => {
  //const store = props.store
  console.log('anecdotelistissä props on ', props)
  const anecdotes = props.anecdotes
    .filter(anecdote => anecdote.content.toLocaleLowerCase()
    .includes(props.filter.toLocaleLowerCase()))
    .sort((x, y) => y.votes - x.votes)

  const vote = (id) => {

    props.incVote(id)
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    props.createNotification(`You voted for ${anecdote.content}`)
    setTimeout(
      () => props.createNotification(''), 5000)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  incVote,
  createNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList
