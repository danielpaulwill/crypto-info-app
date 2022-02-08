import react, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CryptoList from './CryptoList';
import Header from './Header';
import NavBar from './NavBar';
import Comments from './Comments';
import CryptoInfo from './CryptoInfo';

function App() {
  const [cryptoData, setCryptoData] = useState([])

  function initFetch() {
    fetch('https://api.coingecko.com/api/v3/coins')
    .then(res =>res.json())
    .then(data => setCryptoData(data))
  }
  
  useEffect(() => {
    initFetch()
    setInterval(initFetch, [60000])
  }, [])


  return (
    <div id='app'>
        <Header />
        <NavBar />
      <Switch>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/">
          <CryptoList cryptoData={cryptoData} />
        </Route>
        <Route exact path="/info">
          <CryptoInfo cryptoData={cryptoData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
