import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route} from 'react-router-dom';


//Components

import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles';


const App = () => {
  return (
      <MemoryRouter>
        <div>
          <div>
            Header
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/posts" component={Posts}/>
          <Route path="/profile" component={Profiles} />
        </div>
      </MemoryRouter>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
