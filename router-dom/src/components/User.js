import React from "react"
import { useRouteMatch } from "react-router-dom"

const User = props => {
  const match = useRouteMatch()
  console.log(match)
  return <div>User Id is {match.params.userId}</div>
}

export default User
