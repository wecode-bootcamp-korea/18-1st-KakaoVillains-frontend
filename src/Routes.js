import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Pages/Search/Search';
import Test from './Pages/Search/Test';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/category/subject/:id" component={Test} />
          <Route exact path="/category/character/:id" component={Test} />
          <Route exact path="/product/:id" component={Test} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
