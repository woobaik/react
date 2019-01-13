import { combineReducers } from 'redux';

const AddressList = () => {
  return {name: 'Haram', number: '415-766-1431'},
         {name: 'Zico', number: '472-208-2402'},
         {name: 'lovm', number: '725-324-6927'}
}

const SelectPerson = (previousPerson = null,action) => {
  if (action.type === 'SELECT_PERSON') {
    return action.payload
  }

  return previousPerson
}

const reducers = combineReducers({
    Addresses : AddressList,
    SelectPerson: SelectPerson
})

export default reducers
