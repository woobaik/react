const selectPerson = (name, number) => {
  return {
    type: 'SELECT_PERSON',
    payload: {
      name: name,
      number: number
    }
  }
}
