import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Main from './Pages/Main/Main';
import Footer from './Components/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/footer" component={Footer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
