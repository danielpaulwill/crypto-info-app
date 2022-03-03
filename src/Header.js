import react, { useState, useEffect } from "react";

function Header() {
  const [countDown, setCountDown] = useState(60)

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
    <div id="header">
      <img id="logo" alt="Crypto Finder App" src="https://lh3.googleusercontent.com/pw/AM-JKLX1SnTe11oqSOkI-fXtnB0UwM6LGeBJGcA8H9xHSWKdlaGoa6afIJ_CgRFjFkSkltDaC50mQJV1eD3wQ7nwEQaXoGFPQapvoj1yR0X7VE5miO3j7fwKdJRYkaRCqGY2-ri_6Qlpd0ZEDcOwOgfckFn_bg=w300-h200-no?authuser=0"></img>
      <h1 id="title">Crypto Finder</h1>
    </div>
    <div>
      <p>Dark Mode</p>
      <p className="space"></p>
      <p className="space"></p>
      <p className="space"></p>
      <p className="space"></p>
      <p className="space"></p>


      <p>Prices update in <b>{countDown}</b></p>
    </div>
    <div className="labelBar">
     <p className="first"><b>Name</b></p>
     <p className="ticker"><b>Ticker</b></p>
     <p className="change"><b>Price Change</b></p>
     <p className="current"><b>Current Price</b></p>
    </div>
  </div>
  )
};

export default Header;