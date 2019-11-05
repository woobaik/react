const redux = require("redux")
const createStore = redux.createStore

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_ONE_COUNTER") {
    return {
      ...state,
      counter: (state.counter += 1)
    }
  } else if (action.type === "ADD_COUNTER_VALUE") {
    return {
      ...state,
      counter: (state.counter += action.type)
    }
  }
}

const rootStore = createStore(reducer)
rootStore.subscribe(() => {
  console.log("[subscribe]", rootStore.getState())
})

rootStore.dispatch({ type: "ADD_ONE_COUNTER" })
rootStore.dispatch({ type: "ADD_COUNTER_VALUE", value: 4 })
