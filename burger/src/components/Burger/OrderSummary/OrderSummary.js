import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

  let ingredientSummary = Object.keys(props.ingredient)
      .map(igKey=> {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span></li>
      })
  return(
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredient:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total: {props.price.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
};

export default orderSummary;
