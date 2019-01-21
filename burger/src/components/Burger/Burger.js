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
      return <BurgerIngredient keys={ingKey + i} type={ingKey} />
    })
  })

  console.log(transformIngre);
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      {transformIngre}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}

export default burger;
