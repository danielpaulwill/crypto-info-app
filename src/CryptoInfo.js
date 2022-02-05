import react, { useEffect, useState } from "react";
import CryptoInfoCard from "./CryptoInfoCard"

function CryptoInfo() {
  // const [cryptoInfo, setCryptoInfo] = useState([])

  // const idInfo = ['bitcoin', 'ethereum', 'tether', 'binancecoin', 'usd-coin', 'cardano', 'solana', 'ripple', 'terra-luna', 'polkadot']

  // const infoCards = idInfo.map(coin => {
  //   fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
  //   .then(res => res.json())
  //   .then(data => setCryptoInfo(data))
  //   return (
  //   <CryptoInfoCard key={coin} coin={cryptoInfo} />
  // )})



  return (

    <div className="labelBar">
        <h3>Future Functionality</h3>
      <div className="card2">
        <ul>
          <li>Descriptions following click on Crypto card</li>
          <li>Chart showing price change history</li>
        </ul>
      </div>
    </div>
  )
};

export default CryptoInfo;