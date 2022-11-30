import react, { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard"

function CryptoList({ isDarkMode }) {
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

  const cryptoCards = cryptoData.map((cryptoCoin, index) => (
          <CryptoCard 
            key={cryptoCoin.id} 
            cryptoCoin={cryptoCoin} 
            isDarkMode={isDarkMode}
          />
          ))

  return (
    <div>
      {cryptoCards}
    </div>
  )
};

export default CryptoList;