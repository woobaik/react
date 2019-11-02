import React from "react"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
import classes from "./Burger.module.css"

const burger = props => {
  console.log(props.ingredients)

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'></BurgerIngredient>
      {Object.keys(props.ingredients).map(name => {
        return [...Array(props.ingredients[name])].map((_, i) => {
          return (
            <BurgerIngredient key={name + i} type={name}></BurgerIngredient>
          )
        })
      })}
      <BurgerIngredient type='bread-bottom'></BurgerIngredient>
    </div>
  )
}

export default burger
