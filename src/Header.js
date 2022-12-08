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
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3"></div>
      <div className={isDarkMode ? "col-md-6 headerD" : "col-md-6 headerL"}>
        <img id="logo" alt="Crypto Finder App" src="https://raw.githubusercontent.com/danielpaulwill/crypto-info-app/main/Assets/AppFinder.gif"></img>
        <p id="title" className="h4">Crypto Finder</p>
      </div>
      <div className="col-md-3"></div>
    </div>
    <div /*className={isDarkMode ? "darkModeContainerL" : "darkModeContainerD"}*/ className="row">
      <div className="col-md-3"></div>
      <div className="col-md-3 centered">
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onChange={e => console.log("changed!")} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
      <div className="col-md-3 centered">
        <p>Prices update in <b>{countDown}</b></p>
      </div>
      <div className="col-md-3"></div>
    </div>
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-2">
            <p className="name"><b>Name</b></p>
          </div>
          <div className="col-2">
            <p className="ticker"><b>Ticker</b></p>
          </div>
          <div className="col-2">
            <p className="change"><b>Price Change</b></p>
          </div>
          <div className="col-2"></div>
          <div className="col-2">
            <p className="current"><b>Current Price</b></p>
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>
  )
};

export default Header;