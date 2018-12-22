import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

//Components

import CommentDetail from './CommentDetail'


class App extends React.Component {

  render() {

    return (
      <div className="ui comments">
        <CommentDetail avatar={faker.internet.avatar()}
                       userName={faker.internet.userName()}
                       commentText={faker.lorem.sentence()}/>

        <CommentDetail avatar={faker.internet.avatar()}
                       userName={faker.internet.userName()}
                       commentText={faker.lorem.sentence()}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))

if (module.hot) {
  module.hot.accept()
}
