import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "../Landing";
//import History from "../History";
import Vendors from "../Vendors";
import Carts from "../Carts";

const Contact = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/History" component={History} />
    <Route path="/contact" component={Contact} />
    <Route path="/Vendors" component={Vendors} />
    <Route path="/Carts" component={Carts} />
  </Switch>
);

export default Contact;
