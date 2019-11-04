import React, { Component } from "react"
import Aux from "../../hoc/Aux"
import Burger from "../../components/Burger/Burger"
import BurgerControllers from "../../components/BurgerControllers/BurgerControllers"

const INGREDIENTPRICE = {
  bacon: 1.4,
  salad: 1,
  meat: 2,
  cheese: 1.1
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      salad: 0,
      meat: 0,
      cheese: 0
    },
    totalPrice: 4
  }

  handleMinusBtn = type => {
    const updatedState = { ...this.state }
    if (updatedState.ingredients[type] <= 0) {
      return
    }
    updatedState.ingredients[type] -= 1
    let deductPrice = INGREDIENTPRICE[type]
    updatedState.totalPrice = updatedState.totalPrice - deductPrice
    this.setState({ ...updatedState })
  }

  hanglePlusBtn = type => {
    const updatedState = { ...this.state }
    updatedState.ingredients[type] += 1
    updatedState.totalPrice += INGREDIENTPRICE[type]
    this.setState(updatedState)
  }
  render() {
    return (
      <Aux>
        <Burger
          ingredients={this.state.ingredients}
          emptyIngredient={this.state.totalPrice === 4.0}
        ></Burger>
        <BurgerControllers
          onMinus={this.handleMinusBtn}
          onPlus={this.hanglePlusBtn}
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
        ></BurgerControllers>
      </Aux>
    )
  }
}

export default BurgerBuilder
