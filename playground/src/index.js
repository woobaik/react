import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import axios from 'axios';

//Components

import CommentDetail from './CommentDetail'


class App extends React.Component {


  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term }
      headers: { Authorization: 'Client-ID 8525e3c123cdc5072887b640ef000f8077610996ef8eeea3d2708f22e298af51'
      }
    });
  }


  render() {
    return (
      <div className="ui comments">``
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
`````
