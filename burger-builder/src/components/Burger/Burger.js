import React from "react"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
import classes from "./Burger.module.css"

const burger = props => {
  const array = Object.keys(props.ingredients).map(name => {
    return [...Array(props.ingredients[name])]
      .reduce((arr, el) => {
        return arr.concat(el)
      }, [])
      .map((_, i) => {
        return <BurgerIngredient key={name + i} type={name}></BurgerIngredient>
      })
  })

  console.log(props)

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'></BurgerIngredient>
      {props.emptyIngredient ? <div>Please Add ingredient</div> : array}
      <BurgerIngredient type='bread-bottom'></BurgerIngredient>
    </div>
  )
}

export default burger
