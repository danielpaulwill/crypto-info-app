function CryptoCard({ cryptoCoin, isDarkMode }) {

  console.log(cryptoCoin)

  const changeStatus = Math.sign(cryptoCoin.price_change_percentage_24h_in_currency)


  return (
    <div className="cardD">
      <div className="imgContainer">

      <img src={cryptoCoin.image} className="cardImg"></img>
      </div>
      Hello World!
    </div>
  )
};

export default CryptoCard;
