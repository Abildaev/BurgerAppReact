import React, {Component, Fragment} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        price: 0
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for (let param of query) {
            if(param[0] === 'price') {
                price = parseInt(param[1], 10);
            }else {
                ingredients[param[0]] = param[1];
            }
        }

        this.setState({ingredients,price});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }
    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <Fragment>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancel={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}/>
                 <Route
                     path={this.props.match.path + '/contact-data'}
                     render={(props) => (<ContactData ingredients = {this.state.ingredients} price={this.state.price}{...props}/>)}/>
            </Fragment>
        );
    }
};

export default Checkout;
