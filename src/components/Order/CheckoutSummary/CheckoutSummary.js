import React from 'react';
import './CheckoutSummary.css';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>Все ингредиенты указаны верно?</h1>
            <div style={{width: '100%', margin: 'auto'}}></div>
            <Burger ingredients={props.ingredients}/>
            <Button btnType="Danger" clicked={props.checkoutCancel}>CANCEl</Button>
            <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
        </div>
    );
};

export default CheckoutSummary;
