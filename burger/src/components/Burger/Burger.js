import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
//
// state = {
//   ingredient: {
//     salad: 1,
//     bacon: 1,
//     cheese: 7,
//     meat: 2
//   }
// }

const burger = (props) => {

  let transformIngre = Object.keys(props.ingredient).map(ingKey => {
    return [...Array(props.ingredient[ingKey])].map((_,i) => {
      return <BurgerIngredient key={ingKey + i} type={ingKey} />
    })
  }).reduce((arr,el) => {
    return arr.concat(el)
  },[]);

  if (transformIngre.length === 0) {
    transformIngre = <p>Please start Adding Ingredient</p>
  }

  
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      {transformIngre}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}

export default burger;
