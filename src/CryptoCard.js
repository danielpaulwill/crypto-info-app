import react, { useState } from "react";

function CryptoCard({ cryptoCoin, isDarkMode }) {
  const [isHidden, setIsHidden] = useState(true)

  const changeStatus = Math.sign(cryptoCoin.market_data.price_change_24h_in_currency.usd)

  function handleClick() {
    setIsHidden(isHidden => !isHidden)
  }

  return (
    <div className="row" onClick={handleClick}>
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className={isDarkMode ? "row cardD" : "row cardL"} >

          <div className="col-2">
            <img className="image" src={cryptoCoin.image.thumb}></img>
          </div>
          <div className="col-2">
            <p className="name"><b>{cryptoCoin.name}</b></p>
          </div>
          <div className="col-2">
            <p className="ticker">{cryptoCoin.symbol.toUpperCase()}</p>
          </div>
          <div className="col-3">
            <p className={changeStatus === 1 ? "arrowUp" : "arrowDown"}>{changeStatus === 1 ? "▲" : "▼"}</p>
            <p className={changeStatus === 1 ? "positive" : "negative"}>
              {changeStatus === 1 ? "+" : "-"}
              ${changeStatus === 1 ? cryptoCoin.market_data.price_change_24h_in_currency.usd.toFixed(2) : Math.abs(cryptoCoin.market_data.price_change_24h_in_currency.usd.toFixed(2))}
              <br></br>({cryptoCoin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%)
            </p>  
          </div>
          <div className="col-3">
            <p className="child">${cryptoCoin.market_data.current_price.usd.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  )
};

export default CryptoCard;