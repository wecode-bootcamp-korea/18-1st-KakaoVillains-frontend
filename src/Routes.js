import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
// import Feed from "./Pages/Comment/Comment";
// import Cart from "./Pages/Cart/Cart";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/today" component={Main} />
          {/* <Route exact path="/today/feed" component={Feed} />
          <Route exact path="/cart" component={Cart} /> */}
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
