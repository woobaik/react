const redux = require("redux")
const createStore = redux.createStore

const initialState = {
  counter: 0
}
const rootReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT_COUNTER") {
    return {
      ...state,
      counter: (state.counter += 1)
    }
  } else if (action.type === "ADD_VALUE") {
    return {
      ...state,
      counter: (state.counter += action.value)
    }
  }
}
const store = createStore(rootReducer)
store.subscribe(() => {
  console.log("[subscribe]", store.getState())
})
//reducer

//action

store.dispatch({ type: "INCREMENT_COUNTER" })
store.dispatch({ type: "ADD_VALUE", value: 4 })
