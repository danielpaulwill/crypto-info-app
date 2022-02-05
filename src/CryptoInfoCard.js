import react, { useEffect, useState } from "react";

function CryptoInfoCard({ coin }) {
  const [cryptoInfo, setCryptoInfo] = useState([])

  console.log(cryptoInfo)

useEffect(() => {
  fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
  .then(res => res.json())
  .then(data => console.log(data))
}, [])


const var1 = `<div>${cryptoInfo.description.en}</div>`
 

return (
  <div>
    <h1>noom</h1>
    {/* <img className="image" src={cryptoInfo.image.thumb}></img>
    <h3>{cryptoInfo.name}</h3>
    <p dangerouslySetInnerHTML={{ __html: `${var1}` }}></p> */}
  </div>
)}


export default CryptoInfoCard;