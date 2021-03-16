import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPageFeed from './Components/MainFeed/mainPageFeed';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPageFeed} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
