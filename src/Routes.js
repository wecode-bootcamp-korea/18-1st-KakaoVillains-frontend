import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import MainNav from './Components/MainNav';
import SubNav from './Components/SubNav';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Search from './Pages/Search/Search';
import Footer from './Components/Footer';
import Products from '../src/Pages/Products/Products';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/product" component={Products} />
          <Route exact path="/product/:id" component={Products} />
          <Route exact path="/" component={Main} />
          <Route exact path="/MainNav" component={MainNav} />
          <Route exact path="/SubNav" component={SubNav} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
