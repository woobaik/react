const initialState = {
  results:[]
}

const resultReducer = ( state=initialState, action ) => {
  switch (action.type) {

    case ('STORE_RESULT') :
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result})
      }

    case ('DELETE_RESULT') :
        const updatedResults = state.results.filter(result => result.id !== action.id)

        return {
          ...state,
          results: updatedResults
        }

    default:
      return state
  }
};

export default resultReducer;
