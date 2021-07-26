import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerList from './CustomerList';
import MovieList from './MovieList';
import CustomerView from './CustomerView';
import MovieView from './MovieView';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/customers' exact={true} component={CustomerList}/>
          <Route path='/movies' exact={true} component={MovieList}/>
          <Route path='/customer/:id' exact={true} component={CustomerView}/>
          <Route path='/movie/:id' exact={true} component={MovieView}/>
        </Switch>
      </Router>
    )
  }
}

export default App;