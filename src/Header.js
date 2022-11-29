import react, { useState, useEffect } from "react";
import { Switch } from '@headlessui/react'

function Header({ isDarkMode, handleDarkMode }) {
  const [countDown, setCountDown] = useState(60)
  const [enabled, setEnabled] = useState(false)


  function timer() {
    if (countDown < 2) {
      setCountDown(60)
    } else {
      setCountDown(countDown => countDown - 1)
    }
  };

  useEffect(() => {
    setTimeout(() => timer(), 1000)
  }, [countDown])
  
  return (
  <div>
    <div id={isDarkMode ? "headerL" : "headerD"}>
      <img id="logo" alt="Crypto Finder App" src="https://raw.githubusercontent.com/danielpaulwill/crypto-info-app/main/Assets/AppFinder.gif"></img>
      <h1 id="title">Crypto Finder</h1>
    </div>
    <div className={isDarkMode ? "darkModeContainerL" : "darkModeContainerD"}>

        <p>Dark Mode</p>
      
      <label className="switch">
        <input type="checkbox" onClick={handleDarkMode}></input>
        <span className="slider round"></span>
      </label>

        <p>Prices update in <b>{countDown}</b></p>
      
    </div>
    <div className={isDarkMode ? "labelBarL" : "labelBarD"}>
     <p className="first"><b>Name</b></p>
     <p className="ticker"><b>Ticker</b></p>
     <p className="change"><b>Price Change</b></p>
     <p className="current"><b>Current Price</b></p>
    </div>
  </div>
  )
};

export default Header;