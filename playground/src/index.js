import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
                  list: {
                      item1: { id: 1,
                               title: 'Zico is old enough.',
                               favorite: "true"},

                      item2: { id :2,
                               title: 'React is hard to learn.',
                               favorite: "false"},

                      item3 : { id: 3,
                               title: 'I am hungry haha',
                               favorite: "true"}
                  },
                }
  }

  render() {
    const listss = this.state.list.map(item => <TodoItem/>)

    return(
      <div>
        { listss }
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))

if (module.hot) {
  module.hot.accept();
}
