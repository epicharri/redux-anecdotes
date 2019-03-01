import React from 'react'
import { incVote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'


const App = (props) => {

 // const [newAnecdote, setAnecdote] = useState('')
  
  const store = props.store
  const anecdotes = props.store.getState()
  //console.log('Appissa props.store.getState() ', props.store.getState())


  const vote = (id) => {
    console.log('vote', id)
    store.dispatch(
      incVote(id)
    )
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


      <AnecdoteForm store={store} />


    </div>
  )
}

export default App
