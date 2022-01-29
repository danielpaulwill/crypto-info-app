import react, { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard"

function CryptoList() {
  const [cryptoData, setCryptoData] = useState([])
  const [countDown, setCountDown] = useState(10)

  console.log(countDown)

  function initFetch() {
    fetch('https://api.coingecko.com/api/v3/coins')
    .then(res =>res.json())
    .then(data => setCryptoData(data))
  }
  
  function timer() {
    if (countDown < 1) {
      setCountDown(10)
    } else {
      setCountDown(countDown => countDown - 1)
    }
  };
  

  useEffect(() => {
    initFetch()
    setInterval(timer, [1000])
    // setInterval(initFetch, [10000])
  }, [])
  
  const cryptoCards = cryptoData.map((cryptoCoin) => (
    <CryptoCard key={cryptoCoin.id} cryptoCoin={cryptoCoin}/>
  ));

  return (
    <div>
       <div id="inner">
        <p className="first"><b>Name</b></p>
        <p className="ticker"><b>Ticker</b></p>
        <p className="change"><b>Price Change</b></p>
        <p className="arrowUp"></p>
        <p className="child"><b>Current Price</b></p>
        {/* <CryptoInfo /> */}
      </div>
      {cryptoCards}
    </div>
  )
};

export default CryptoList;