import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Character from './Pages/Category/Character/Character';
import Subject from './Pages/Category/Subject/Subject';
import Category from './Pages/Category/Category';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/category/character" component={Character} />
          <Route
            exact
            path="/category/character/:character"
            component={Character}
          />
          <Route
            exact
            path="/category/character/:character/:sort"
            component={Character}
          />
          <Route exact path="/category/subject" component={Subject} />
          <Route exact path="/category/subject/:subject" component={Subject} />
          <Route
            exact
            path="/category/subject/:subject/:subcategory"
            component={Subject}
          />
          <Route
            exact
            path="/category/subject/:subject/:subcategory/:character"
            component={Subject}
          />
          <Route
            exact
            path="/category/subject/:subject/:subcategory/:character/:sort"
            component={Subject}
          />
          <Route exact path="/" component={Category} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
