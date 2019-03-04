
const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET':
          return action.data.content
        default:
          return state
    }
}



export const createNotification = (content) => {
    return {
            type: 'SET',
            data: {
              content
            }
        }
}

export const unsetMessage = () => {
  return {
    type: 'UNSET'
  }
}

export default notificationReducer
