import react, { useEffect, useState } from "react";
// import CryptoInfoCard from "./CryptoInfoCard"

function CryptoInfo({ idList }) {

  // const idInfo = ['bitcoin', 'ethereum', 'tether', 'binancecoin', 'usd-coin', 'cardano', 'solana', 'ripple', 'terra-luna', 'polkadot']

  // const infoCards = idInfo.map(coin => (
  //   <CryptoInfoCard key={coin} coin={coin} />
  // ))


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