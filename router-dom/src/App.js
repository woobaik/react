import React from "react"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
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
              <Link to='/about'>About</Link>
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
