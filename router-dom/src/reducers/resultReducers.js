const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_RESULT":
      return {
        ...state,
        results: state.results.concat({ value: action.payload, id: new Date() })
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
