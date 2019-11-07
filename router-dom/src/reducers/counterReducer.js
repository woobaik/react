const initialState = {
  counter: 0
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
    default:
      return state
  }
}

export default reducer
