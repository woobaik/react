import React from "react"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
import classes from "./Burger.module.css"

const burger = props => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'></BurgerIngredient>
      <BurgerIngredient type='bread-bottom'></BurgerIngredient>
      <BurgerIngredient type='salad'></BurgerIngredient>
    </div>
  )
}

export default burger
