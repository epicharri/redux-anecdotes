import React from "react"
import { connect } from "react-redux"
import { incVote } from "../reducers/anecdoteReducer"
import { createNotification } from "../reducers/notificationReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteList = props => {
  //const store = props.store
  console.log(
    "anecdotelistissä props on ",
    props
  )
  // const anecdotes = props.anecdotes
  // .filter(anecdote => anecdote.content.toLocaleLowerCase()
  //.includes(props.filter.toLocaleLowerCase()))
  //.sort((x, y) => y.votes - x.votes)

  const vote = anecdote => {
    props.incVote(anecdote)
    /*const anecdote = props.anecdotes.find(
      anecdote => anecdote.id === id
    )*/

    props.setNotification(`you voted '${anecdote.content}'`, 5)

    /*
    props.createNotification(
      `You voted for ${
        anecdote.content
      }`
    )
    setTimeout(
      () =>
        props.createNotification(""),
      5000
    )*/
  }

  return (
    <div>
      {props.anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => {
                vote(anecdote)
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

const anecdotesToShow = props => {
  console.log('anecdotesToShowssa props on ', props)
  return props.anecdotes
    .filter(anecdote =>
      anecdote.content
        .toLocaleLowerCase()
        .includes(
          props.filter.toLocaleLowerCase()
        )
    )
    .sort((x, y) => y.votes - x.votes)
}

const mapStateToProps = state => {
  return {
    anecdotes: anecdotesToShow(state)
    //notification: state.notification,
    //filter: state.filter
  }
}

const mapDispatchToProps = {
  incVote,
  createNotification,
  setNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdoteList
