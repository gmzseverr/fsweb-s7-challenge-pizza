import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Success from "./components/Complated";
import SiparisFormu from "./components/OrderPizzaComponents/SiparisFormu";
import OrderPizza from "./pages/OrderPizza";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order-page" component={OrderPizza} />
        <Route path="/success-page" component={Success} />
      </Switch>
    </Router>
  );
}

export default App;
