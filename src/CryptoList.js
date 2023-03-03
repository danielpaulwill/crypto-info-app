import { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard"

function CryptoList({ isDarkMode }) {
  const [cryptoData, setCryptoData] = useState([])

  function initFetch() {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h")
    .then((response) => response.json())
    .then((data) => setCryptoData(data));
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
    <div className="container-fluid">
        {cryptoCards}
    </div>
  )
};

export default CryptoList;