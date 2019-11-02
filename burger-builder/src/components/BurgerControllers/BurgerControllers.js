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
            key={ig}
            type={ig}
            quantity={props.ingredients[ig]}
          ></BurgerController>
        )
      })}
    </div>
  )
}

export default BurgerControllers
