import react, { useEffect, useState } from "react";

function CryptoInfoCard({ coin }) { 

return (
  <div>
    <h1>noom</h1>
    <img className="image" src={coin.image.thumb}></img>
    <h3>{coin.name}</h3>
    {/* <p dangerouslySetInnerHTML={{ __html: `${var1}` }}></p> */}
  </div>
)}


export default CryptoInfoCard;