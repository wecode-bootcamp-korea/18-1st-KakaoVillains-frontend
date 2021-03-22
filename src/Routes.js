import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Feed from "./Pages/Comment/Comment";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/today" component={Main} />
          <Route exact path="/today/feed" component={Feed} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
