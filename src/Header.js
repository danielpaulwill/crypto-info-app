import { useState, useEffect } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function Header({ isDarkMode, handleDarkMode }) {
  const [countDown, setCountDown] = useState(60)

  useEffect(() => {
    setTimeout(() => {
      if (countDown < 2) {
        setCountDown(60)
      } else {
        setCountDown(countDown => countDown - 1)
      }
    }, 1000)
  }, [countDown])

  // const label = { inputProps: { 'aria-label': 'Switch demo' } };
  
  return (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-1"></div>
      <div className={isDarkMode ? "col-md-10 headerD" : "col-md-10 headerL"}>
        <img id="logo" alt="Crypto Finder App" src="https://raw.githubusercontent.com/danielpaulwill/crypto-info-app/main/Assets/AppFinder.gif"></img>
        <p id="title" className="h4">Crypto Finder</p>
      </div>
      <div className="col-md-1"></div>
    </div>
    <div /*className={isDarkMode ? "darkModeContainerL" : "darkModeContainerD"}*/ className="row">
      <div className="col-md-1"></div>
      <div className={isDarkMode ? "col-md-5 centered darkModeContainerD" : "col-md-5 centered darkModeContainerL"} >
        <div className="form-check form-switch">
          <FormControlLabel control={<Switch />} label={isDarkMode ? "Light Mode" : "Dark Mode"} onChange={e => handleDarkMode()} />
        </div>
      </div>
      <div className={isDarkMode ? "col-md-5 centered darkModeContainerD" : "col-md-5 centered darkModeContainerL"} >
        <p className="centered-text">Prices update in <b>{countDown}</b></p>
      </div>
      <div className="col-md-1"></div>
    </div>
    <div className="row">
      <div className="col-md-1"></div>
      <div className={isDarkMode ? "col-md-6 darkModeContainerD" : "col-md-6 darkModeContainerL"} >
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
      <div className="col-md-1"></div>
    </div>
  </div>
  )
};

export default Header;