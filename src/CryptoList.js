import react, { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard"

function CryptoList() {
  const [cryptoData, setCryptoData] = useState([])

  
  function initFetch() {
    fetch('https://api.coingecko.com/api/v3/coins')
    .then(res =>res.json())
    .then(data => setCryptoData(data))
  }
  
  useEffect(() => {
    initFetch()
    setInterval(initFetch, [60000])
  }, [])

  const alternatingColor = ['card1', 'card2'];
  
  const cryptoCards = cryptoData.map((cryptoCoin, index) => (
    <CryptoCard 
      key={cryptoCoin.id} 
      cryptoCoin={cryptoCoin} 
      color={alternatingColor[index % alternatingColor.length]} 
    />
  ));

  return (
    <div>
       <div>
         <div className="labelBar">
          <p className="first"><b>Name</b></p>
          <p className="ticker"><b>Ticker</b></p>
          <p className="change"><b>Price Change</b></p>
          <p className="current"><b>Current Price</b></p>
         </div>
        {/* <CryptoInfo /> */}
      </div>
      <div>
      {cryptoCards}
      </div>
    </div>
  )
};

export default CryptoList;