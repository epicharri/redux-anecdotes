import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(reducer)

/*
anecdoteService.getAll().then(anecdotes =>
  anecdotes.forEach(anecdote => {
    store.dispatch({ 
      type: 'NEW',
      data: {
        content: anecdote.content
      }
    })
  }))
*/

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
