import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import About from './pages/About';
import Main from './pages/Main';
import Stocks from './pages/Stocks';
import ShowStocks from './pages/ShowStock';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/stocks">
        <Stocks />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route 
      path="/showstock/:symbol"
      render={(routerProps) => <ShowStocks {...routerProps} />}
      />
      </Switch>
    </div>
  );
};

export default App;