function CryptoCard({ cryptoCoin, isDarkMode }) {

  const changeStatus = Math.sign(cryptoCoin.price_change_percentage_24h_in_currency)


  return (
    <div className="cardD">
      Hello World!
    </div>
  )
};

export default CryptoCard;
