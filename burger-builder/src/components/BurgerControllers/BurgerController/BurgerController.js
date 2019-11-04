import React from "react"
import classes from "./BurgerController.module.css"

const BurgerController = props => {
  return (
    <div className='BurgerController'>
      <label className={classes.label}>{props.type.toUpperCase()}</label>
      <button
        className={classes.minus}
        onClick={() => props.onMinus(props.type)}
      >
        -
      </button>
      <p className={classes.quantity}>{props.quantity}</p>
      <button className={classes.plus} onClick={() => props.onPlus(props.type)}>
        +
      </button>
    </div>
  )
}

export default BurgerController
