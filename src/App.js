import React, { Component } from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';

import Login from './pages/login'
import HomeScreen from './pages/HomeScreen'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={HomeScreen} />
        </Switch>
      </Router>
    );
  }
}

export default App;
