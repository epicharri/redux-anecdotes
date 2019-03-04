import React from "react"
import { setFilter } from "../reducers/filterReducer"

const Filter = (props) => {
  const store = props.store
  const handleChange = event => {
    event.preventDefault()
    store.dispatch(
      setFilter(
        event.target.value
      )
    )
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter{" "}
      <input onChange={handleChange} />
    </div>
  )
}

export default Filter
