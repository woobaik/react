import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//Component
import Home from './components/Home';
import Artist from './components/Artist';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' component={Home} />
        <Route path='/artist/:artistid' component={Artist} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
