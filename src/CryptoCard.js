function CryptoCard({ cryptoCoin, isDarkMode }) {

  const changeStatus = Math.sign(cryptoCoin.price_change_percentage_24h_in_currency)

  return (
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className={isDarkMode ? "row cardD" : "row cardL"} >

          <div className="col-2">
            <img className="image" src={cryptoCoin.image} alt="cryptocurrency thumbnail" ></img>
          </div>
          <div className="col-2">
            <p className="name"><b>{cryptoCoin.name}</b></p>
          </div>
          <div className="col-2">
            <p className="ticker">{cryptoCoin.symbol}</p>
          </div>
          <div className="col-3">
            <p className={changeStatus === 1 ? "arrowUp" : "arrowDown"}>{changeStatus === 1 ? "▲" : "▼"}</p>
            <p className={changeStatus === 1 ? "positive" : "negative"}>
              {changeStatus === 1 ? "+" : "-"}
              ${changeStatus === 1 ? cryptoCoin.price_change_24h.toFixed(2) : Math.abs(cryptoCoin.price_change_24h.toFixed(2))}
              <br></br>({cryptoCoin.price_change_percentage_24h.toFixed(2)}%)
            </p>  
          </div>
          <div className="col-3">
            <p className="child">${cryptoCoin.current_price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  )
};

export default CryptoCard;