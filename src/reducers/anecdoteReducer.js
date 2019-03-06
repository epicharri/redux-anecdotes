import anecdoteService from "../services/anecdotes"

export const incVote = id => {
  return {
    type: "VOTE",
    data: {
      id: id
    }
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnec = await anecdoteService
    .createNew(
      content
    )
    dispatch({
      type: "NEW",
      data: newAnec
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: "INIT_NEW",
      data: anecdotes
    })
  }
}

const getId = () =>
  (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteReducer = (
  state = [],
  action
) => {
  console.log(
    "anecdoteReducerissa action on: ",
    action
  )

  switch (action.type) {
    case "VOTE":
      const id = action.data.id
      const anecdoteToChange = state.find(
        a => a.id === id
      )

      const votesIncrementedByOne =
        anecdoteToChange.votes + 1

      const changedAnecdote = {
        ...anecdoteToChange,
        votes: votesIncrementedByOne
      }
      return state
        .map(anecdote =>
          anecdote.id === id
            ? changedAnecdote
            : anecdote
        )
        .sort(
          (x, y) => y.votes - x.votes
        )

    case "NEW":
      return [
        ...state,
        asObject(action.data.content)
      ].sort(
        (x, y) => y.votes - x.votes
      )

    case "INIT_NEW":
      return action.data
    /*return [
        ...state,
        asInitObject(action.data)
      ].sort((x, y) => y.votes - x.votes)*/

    default:
      return state
  }
}

export default anecdoteReducer
