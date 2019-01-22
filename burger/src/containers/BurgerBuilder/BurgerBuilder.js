import React, { Component } from 'react';


import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


  const INGREDIENT_PRICE = {
    salad: 0.3,
    bacon: 1.3,
    cheese: 0.7,
    meat: 2
  }

class BurgerBuilder extends Component {

  state = {
    ingredient: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
    totalPrice: 100
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredient[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredient
    }
    updatedIngredient[type] = updatedCount;
    const addedPrice = INGREDIENT_PRICE[type];
    const updatedPrice = this.state.totalPrice + addedPrice;
    this.setState({ingredient: updatedIngredient, totalPrice: updatedPrice})

  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredient[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = this.state.ingredient[type] - oldCount;
    const updatedIngredient = {
      ...this.state.ingredient
    }
    updatedIngredient[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - INGREDIENT_PRICE[type]
    this.setState({ingredient:updatedIngredient, totalPrice:updatedPrice})
  }

  render() {
    console.log(this.state);
    return (
      <Aux>
        <Burger ingredient={this.state.ingredient}/>
        <BuildControls add={this.addIngredientHandler} remove={this.removeIngredientHandler}/>
      </Aux>
    );
  }
}


export default BurgerBuilder;
