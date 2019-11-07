const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ONE_TO_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "MINUS_ONE_TO_COUNTER":
      return {
        ...state,
        counter: state.counter - 1
      }

    case "PLUS_TEN":
      return {
        ...state,
        counter: state.counter + action.payload
      }

    case "MINUS_TEN":
      return {
        ...state,
        counter: state.counter - action.payload
      }

    case "SAVE_RESULT":
      return {
        ...state,
        results: state.results.concat({ value: state.counter, id: new Date() })
      }
    case "REMOVE_RESULT":
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.payload)
      }
    default:
      return state
  }
}

export default reducer
