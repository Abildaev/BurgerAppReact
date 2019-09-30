import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 5,
    bacon: 30,
    cheese: 20,
    meat: 50,
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 20,
        purchasable: false,
        purchasing: false
    };
    addIngredientHandler = (type) => {
        let ingredientCount = this.state.ingredients[type];
        ingredientCount++;
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredientCount;

        const priceAddition = INGREDIENT_PRICES[type];
        let totalPrice = this.state.totalPrice;
        totalPrice += priceAddition;

        this.updatePurchaseState(ingredients);
        this.setState({ingredients, totalPrice});
    };

    removeIngredientHandler = (type) => {
        let ingredientCount = this.state.ingredients[type];
        if (ingredientCount <= 0) return;
        ingredientCount--;
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredientCount;

        const priceAddition = INGREDIENT_PRICES[type];
        let totalPrice = this.state.totalPrice;
        totalPrice = totalPrice - priceAddition;
        this.updatePurchaseState(ingredients);
        this.setState({ingredients, totalPrice});
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el
        }, 0)

        this.setState({
            purchasable: sum > 0
        })
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})

    }

    purchaseCancelled = () => {
        this.setState({purchasing: false})
    }
    purchaseContinue = () => {
        const queryParams = [];

        for(let key in this.state.ingredients) {
            queryParams.push(encodeURIComponent(key) + '='
                + encodeURIComponent(this.state.ingredients[key]));
        }

        queryParams.push('price=' + this.state.totalPrice);

        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })

    }


    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredients={this.state.ingredients}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}/>
                <Modal show={this.state.purchasing}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        cancel={this.purchaseCancelled}
                        continue={this.purchaseContinue}
                    />
                </Modal>

            </>
        )
    }
}

export default BurgerBuilder;
