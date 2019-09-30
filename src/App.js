import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./components/Layaout/Layout";

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={BurgerBuilder}/>
                    <Route path="/checkout" component={Checkout}/>
                </Switch>
            </Layout>

        );
    }
}

export default App;
