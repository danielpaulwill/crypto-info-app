import react, { useState } from "react";

function CryptoCard({ cryptoCoin, isDarkMode }) {
  const [isHidden, setIsHidden] = useState(true)

  const changeStatus = Math.sign(cryptoCoin.market_data.price_change_24h_in_currency.usd)

  function handleClick() {
    setIsHidden(isHidden => !isHidden)
  }

  return (
    <div /*className={isDarkMode ? "cardL" : "cardD"}*/ className="row" onClick={handleClick}>
      <div className="col-md-3 red"></div>
      <div className="col-md-6 red">
        <div className="col-md-1">
          <img className="image blue" src={cryptoCoin.image.thumb}></img>
        </div>
        <div className="col-md-1">
          <p className="child"><b>{cryptoCoin.name}</b></p>
        </div>
        <p className="ticker">{cryptoCoin.symbol.toUpperCase()}</p>
        <p className={changeStatus === 1 ? "arrowUp" : "arrowDown"}>{changeStatus === 1 ? "▲" : "▼"}</p>
        <p className={changeStatus === 1 ? "positive" : "negative"}>
          {changeStatus === 1 ? "+" : "-"}
          ${changeStatus === 1 ? cryptoCoin.market_data.price_change_24h_in_currency.usd : Math.abs(cryptoCoin.market_data.price_change_24h_in_currency.usd)}
          <br></br>({cryptoCoin.market_data.price_change_percentage_24h_in_currency.usd}%)
        </p>
        <p className="child">${cryptoCoin.market_data.current_price.usd}</p>
      </div>
    </div>
  )
};

export default CryptoCard;