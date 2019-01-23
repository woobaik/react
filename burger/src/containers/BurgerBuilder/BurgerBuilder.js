import React, { Component } from 'react';


import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


  const INGREDIENT_PRICE = {
    salad: 0.3,
    bacon: 1.3,
    cheese: 0.7,
    meat: 2
  }

class BurgerBuilder extends Component {

  state = {
    ingredient: {
      salad: 3,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
    totalPrice: 100,
    purchaseable: false,
    purchasing: false
  }

  updatePurchaseState = (ingredient) => {

    let sum = Object.keys(ingredient).map(ingKey => {
      return ingredient[ingKey];
    }).reduce((prev,current)=> {
      return prev + current
    },0);
    this.setState({purchaseable: sum > 0});

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
    this.updatePurchaseState(updatedIngredient)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredient[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = this.state.ingredient[type] - 1;
    const updatedIngredient = {
      ...this.state.ingredient
    }
    updatedIngredient[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - INGREDIENT_PRICE[type]
    this.setState({ingredient:updatedIngredient, totalPrice:updatedPrice})
    this.updatePurchaseState(updatedIngredient)
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    alert('You Continue!')
  }


  render() {
    const disabledInfo = {
      ...this.state.ingredient
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            <OrderSummary
              ingredient={this.state.ingredient}
              purchaseCanceled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}/>
        </Modal>
        <Burger ingredient={this.state.ingredient}/>
        <BuildControls add={this.addIngredientHandler}
                       remove={this.removeIngredientHandler}
                       disabled={disabledInfo}
                       totalPrice={this.state.totalPrice}
                       purchaseable={this.state.purchaseable}
                       ordered={this.purchaseHandler}/>
      </Aux>
    );
  }
}


export default BurgerBuilder;
