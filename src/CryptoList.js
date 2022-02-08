import react from "react";
import CryptoCard from "./CryptoCard"

function CryptoList({ cryptoData }) {

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
      </div>
      <div>
      {cryptoCards}
      </div>
    </div>
  )
};

export default CryptoList;