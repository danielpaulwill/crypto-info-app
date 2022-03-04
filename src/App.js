import react, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CryptoList from './CryptoList';
import Header from './Header';
import CryptoInfo from './CryptoInfo';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  function handleDarkMode(e) {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <div id='app'>
        <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
        {/* <NavBar /> */}
      {/* <Switch>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/"> */}
          <CryptoList isDarkMode={isDarkMode}/>
        {/* </Route>
        <Route exact path="/info">
          <CryptoInfo />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
