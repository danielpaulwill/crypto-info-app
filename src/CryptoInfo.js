import react from "react";

function CryptoInfo({ cryptoCoin }) {
  return (
    <div>
      <h1>CryptoInfo</h1>
      <p>{cryptoCoin.last_updated}</p>
    </div>
  )
};

export default CryptoInfo;