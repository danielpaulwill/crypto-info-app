import react, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import CryptoInfo from "./CryptoInfo";

function CryptoCard({ cryptoCoin, color }) {

  const changeStatus = Math.sign(cryptoCoin.market_data.price_change_24h_in_currency.usd)

  return (
      <div className={color}>
        <img className="image" src={cryptoCoin.image.thumb}></img>
        <p className="child"><b>{cryptoCoin.name}</b></p>
        <p className="ticker">{cryptoCoin.symbol.toUpperCase()}</p>
        <p className={changeStatus === 1 ? "arrowUp" : "arrowDown"}>{changeStatus === 1 ? "▲" : "▼"}</p>
        <p className={changeStatus === 1 ? "positive" : "negative"}>
          {changeStatus === 1 ? "+" : "-"}
          ${changeStatus === 1 ? cryptoCoin.market_data.price_change_24h_in_currency.usd : Math.abs(cryptoCoin.market_data.price_change_24h_in_currency.usd)}
          <br></br>({cryptoCoin.market_data.price_change_percentage_24h_in_currency.usd}%)
        </p>
        <p className="child">${cryptoCoin.market_data.current_price.usd}</p>
        {/* <CryptoInfo /> */}
      </div>
  )
};

export default CryptoCard;