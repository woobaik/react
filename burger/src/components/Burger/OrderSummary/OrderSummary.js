import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

  let ingredientSummary = Object.keys(props.ingredient)
      .map(igKey=> {
        return <li><span style={{textTransform: 'capitalize'}}>{igKey}</span></li>
      })
  return(
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredient:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Aux>
  )
};

export default orderSummary;
