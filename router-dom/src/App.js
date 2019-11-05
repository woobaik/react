import React from "react"
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  NavLink
} from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import About from "./components/About"
import Users from "./components/Users"

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
