// import { useState, useEffect } from "react";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';

function Header({ isDarkMode, handleDarkMode }) {
  // const [countDown, setCountDown] = useState(60)

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (countDown < 2) {
  //       setCountDown(60)
  //     } else {
  //       setCountDown(countDown => countDown - 1)
  //     }
  //   }, 1000)
  // }, [countDown])

  
  return (
  <div>
    <div>
      <div className={isDarkMode ? "headerD" : "headerL"}>
        <img id="logo" alt="Crypto Finder App" src="assets/images/AppFinder.gif"></img>
        <p id="title" className="h4">Crypto Finder</p>
      </div>
    </div>
    <div>
      <div className={isDarkMode ? "darkModeContainerD" : "darkModeContainerL"}>
        <p onClick={handleDarkMode}>{isDarkMode ? "light mode" : "dark mode"}</p>
      </div>
      {/* <div className={isDarkMode ? "col-md-12 col-sm-6 col-6 darkModeContainerD" : "col-md-12 col-sm-6 col-6 darkModeContainerL"}>
        <p>Prices update in <b>{countDown}</b></p>
      </div> */}
    </div>
  </div>
  )
};

export default Header;