import React from "react"
import { connect } from "react-redux"

const counters = props => {
  let lists = props.results.map(result => {
    return (
      <li key={result.id} onClick={() => props.removeResult(result.id)}>
        {result.value}
      </li>
    )
  })
  return (
    <div>
      <h2>Counter Page</h2>
      <h4>Current counter is {props.cnt} </h4>
      <button onClick={props.addOne}>Add One</button>
      <button onClick={props.minusOne}>Minus One</button>
      <button onClick={props.plusTen}>Add Ten</button>
      <button onClick={props.minusTen}>Minus Ten</button>

      <div>
        RESULTS :<ul>{lists}</ul>
      </div>
      <button onClick={props.addResult}>SAVE RESULT</button>
    </div>
  )
}

const mapStateToProps = state => {
  return { cnt: state.counter, results: state.results }
}

const mapDispatchToProps = dispatch => {
  return {
    addOne: () => dispatch({ type: "ADD_ONE_TO_COUNTER" }),
    minusOne: () => dispatch({ type: "MINUS_ONE_TO_COUNTER" }),
    minusTen: () => dispatch({ type: "MINUS_TEN", payload: 10 }),
    plusTen: () => dispatch({ type: "PLUS_TEN", payload: 10 }),
    addResult: () => dispatch({ type: "SAVE_RESULT" }),
    removeResult: id => dispatch({ type: "REMOVE_RESULT", payload: id })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(counters)
