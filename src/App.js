import react, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CryptoList from './CryptoList';
import Header from './Header';
import CryptoInfo from './CryptoInfo';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleDarkMode(e) {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <div /*id='app'*/>
      <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
      <CryptoList isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
