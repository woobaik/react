import React, { Component } from "react"
import Aux from "../../hoc/Aux"
import Burger from "../../components/Burger/Burger"
import BurgerControllers from "../../components/BurgerControllers/BurgerControllers"
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 1,
      salad: 2,
      meat: 1,
      cheese: 1
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BurgerControllers
          ingredients={this.state.ingredients}
        ></BurgerControllers>
      </Aux>
    )
  }
}

export default BurgerBuilder
