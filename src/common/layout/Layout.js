import React, { Component } from "react";
import { Route, Switch } from "react-router";
import AboutUs from "../../component/aboutUs";
import Home from "../../component/Home";
import Product from "../../component/product";

export default class Layout extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="*" component={Home}></Route>
        <Route exact path="/product" component={Product}></Route>
        <Route exact path="/aboutUs" component={AboutUs}></Route>
      </Switch>
    );
  }
}
