import './App.css';
import { useState } from 'react'
import CryptoList from './CryptoList';
import Header from './Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  console.log(isDarkMode)

  function handleDarkMode(e) {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <div id={isDarkMode ? "appD" : "appL"}>
      <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
      <CryptoList isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;