const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('INC_COUNTER') : {
      return {
        ...state,
        counter: state.counter + 1
      }
    }

    case ('ADD_COUNTER') : {
      return {
        ...state,
        counter: state.counter + action.value
      }
    }
    default: state
  }

  return state;
}

// Store
const store = createStore(rootReducer)
console.log(store.getState());

// Disaptching Action
store.dispatch({type:'INC_COUNTER'});
console.log(store.getState());
store.dispatch({type:'ADD_COUNTER', value: 9});
console.log(store.getState());
//Subscription
