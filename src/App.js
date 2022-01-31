import react, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CryptoList from './CryptoList';
import Header from './Header';
import NavBar from './NavBar';
// import SearchBar from './SearchBar';
import Comments from './Comments';

function App() {
  const [countDown, setCountDown] = useState(60)
  
  function timer() {
    if (countDown < 2) {
      setCountDown(60)
    } else {
      setCountDown(countDown => countDown - 1)
    }
  };

  // const updateCountDown = setTimeout(() => timer(), 1000)

  // useEffect(() => {
  //   updateCountDown
  // }, [countDown])

  return (
    <div id='app'>
        <Header />
        <NavBar countDown={countDown} />
      {/* <SearchBar /> */}
      <Switch>
        <Route exact path="/comments">
          <Comments /*updateCountDown={updateCountDown}*/ />
        </Route>
        <Route exact path="/">
          <CryptoList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
