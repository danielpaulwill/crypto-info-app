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
      <img id="logo" alt="Crypto Finder App" src="https://lh3.googleusercontent.com/pw/AM-JKLX1SnTe11oqSOkI-fXtnB0UwM6LGeBJGcA8H9xHSWKdlaGoa6afIJ_CgRFjFkSkltDaC50mQJV1eD3wQ7nwEQaXoGFPQapvoj1yR0X7VE5miO3j7fwKdJRYkaRCqGY2-ri_6Qlpd0ZEDcOwOgfckFn_bg=w300-h200-no?authuser=0"></img>
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