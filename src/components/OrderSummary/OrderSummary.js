import React from 'react';
import Button from "../UI/Button/Button";

const OrderSummary = (props) => {

    const OrderSummary = Object.keys(props.ingredients).map( igKey => {

        return (
            <ul key={igKey}>
                <li>{igKey}: {props.ingredients[igKey]}</li>
            </ul>
        )
    });


    return (
        <div>
            <h3>Ваш заказ</h3>
            <p>убедитесь что все ингредиенты указаны верно</p>
            {OrderSummary}
            <strong>Итоговая цена: {props.price} KGZ</strong>
            <p>Продолжить заказ?</p>
            <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.continue}>Continue</Button>
        </div>
    );
};

export default OrderSummary;
