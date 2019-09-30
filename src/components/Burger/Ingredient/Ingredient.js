import React from 'react';
import './Ingredient.css';

const Ingredient = props => {
    switch (props.type) {
        case 'bread-bottom':
            return <div className="bread-bottom"/>;
        case 'bread-top':
            return <div className="bread-top">
                <div className="seeds1"></div>
                <div className="seeds2"></div>
            </div>;
        case 'salad':
            return <div className="salad"/>;
        case 'bacon':
            return <div className="bacon"/>;
        case 'cheese':
            return <div className="cheese"/>;
        case 'meat':
            return <div className="meat"/>;
        default:
            return null;

    }

};

export default Ingredient;
