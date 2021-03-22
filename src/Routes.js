import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import MainNav from './Components/MainNav';
import SubNav from './Components/SubNav';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/MainNav" component={MainNav} />
          <Route exact path="/SubNav" component={SubNav} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
