import react, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CryptoList from './CryptoList';
import Header from './Header';
import NavBar from './NavBar';
import Comments from './Comments';
import CryptoInfo from './CryptoInfo';

function App() {



  return (
    <div id='app'>
        <Header />
        <NavBar />
      <Switch>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/">
          <CryptoList />
        </Route>
        <Route exact path="/info">
          <CryptoInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
