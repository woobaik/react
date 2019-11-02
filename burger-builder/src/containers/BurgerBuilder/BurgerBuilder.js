import React, { Component } from "react"
import Aux from "../../hoc/Aux"
import Burger from "../../components/Burger/Burger"
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 1,
      salad: 0,
      meat: 14,
      cheese: 1
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <div> Burger Controller</div>
      </Aux>
    )
  }
}

export default BurgerBuilder
