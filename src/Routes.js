import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Comment from './Pages/Comment/Comment';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/comment" component={Comment} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
