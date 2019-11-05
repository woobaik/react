import React from "react"
import { Link, useRouteMatch, Switch, Route } from "react-router-dom"
import User from "./User"

const Users = () => {
  let match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <h2>Users Page</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props V State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:userId`}>
          <User></User>
        </Route>
        <Route path={`${match.path}`}>
          <div>Please click one of it</div>
        </Route>
      </Switch>
    </div>
  )
}

export default Users
