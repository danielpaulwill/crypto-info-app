import react, { useEffect, useState } from "react";

function CryptoInfo({ cryptoData }) {
  const [coinDescription, setCoinDescription] = useState("")

  console.log(coinDescription)

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}`)
      .then(res => res.json())
      .then(data => setCoinDescription(`${data.description.en}`))
  }, [])

  function handleInfoClick(coin) {
    fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}`)
      .then(res => res.json())
      .then(data => setCoinDescription(`${data.description.en}`))
  }

  

  const alternatingColor = ['card1', 'card2'];

  const cryptoInfoCards = cryptoData.map((cryptoCoin, index) => (
    <div 
      className={alternatingColor[index % alternatingColor.length]} 
      key={cryptoCoin.id}
      onClick={e => handleInfoClick(cryptoCoin)} >
        <h3>{cryptoCoin.name}</h3>
        <p className="hidden">{coinDescription}</p>
    </div> 
  ));

  return (
    <div>
      <h1>CryptoInfo</h1>
      {cryptoInfoCards}
    </div>
  )
};

export default CryptoInfo;