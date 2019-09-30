import React from 'react';
import './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";


const BuildControls = props => {

    let controls = Object.keys(props.ingredients).map(ingredient=> {
        return <BuildControl
            key={ingredient}
            type={ingredient}
            added={() => props.ingredientAdded(ingredient)}
            removed={() => props.ingredientRemoved(ingredient)}
            disabled={props.disabled[ingredient]}/>
    });


  return (
      <div className="build-controls">
          <p>Price: {props.price}</p>
          {controls}
          <button className="OrderButton" disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
      </div>
  );
};

export default BuildControls;
