import React from "react"
import classes from "./BurgerController.module.css"

const BurgerController = props => {
  return (
    <div className='BurgerController'>
      <label className={classes.label}>{props.type.toUpperCase()}</label>
      <button className={classes.minus}>-</button>
      <p className={classes.quantity}>{props.quantity}</p>
      <button className={classes.plus}>+</button>
    </div>
  )
}

export default BurgerController
