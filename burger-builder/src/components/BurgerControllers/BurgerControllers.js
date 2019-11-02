import React from "react"
import BurgerController from "./BurgerController/BurgerController"
import classes from "./BurgerControllers.module.css"

const BurgerControllers = props => {
  const ingredients = Object.keys(props.ingredients)

  return (
    <div className={classes.BurgerControllers}>
      {ingredients.map(ig => {
        return (
          <BurgerController
            onMinus={props.onMinus}
            key={ig}
            type={ig}
            quantity={props.ingredients[ig]}
          ></BurgerController>
        )
      })}
      <div>Total Price : {props.totalPrice.toFixed(2)}</div>
    </div>
  )
}

export default BurgerControllers
