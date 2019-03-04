  export const setFilter = (text) => {
    return { 
      type: 'FILTER',
      data: {
        text: text
      }
    }
  }

  
  const filterReducer = (state = '', action) => {
  
    switch (action.type) {
  
      case 'FILTER':
  
        const text = action.data.text
        return text

      default:
        return state
    }
  }
  
  export default filterReducer