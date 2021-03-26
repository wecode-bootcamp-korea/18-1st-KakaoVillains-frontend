import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Character from './Pages/Category/Character/Character';
import Main from './Pages/Main/Main';
import MainNav from './Components/MainNav';
import SubNav from './Components/SubNav';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import SearchResult from './Pages/Category/SearchResult/SearchResult';
import Footer from './Components/Footer';
import Products from '../src/Pages/Products/Products';
import Feed from './Pages/Main/Feed';
import Finish from './Components/Finish';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/category/character" component={Character} />
          <Route exact path="/" component={Main} />
          <Route exact path="/MainNav" component={MainNav} />
          <Route exact path="/SubNav" component={SubNav} />
          <Route exact path="/Search" component={SearchResult} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/feed/:id" component={Feed} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/product/:id" component={Products} />
          <Route exact path="/finish" component={Finish} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
