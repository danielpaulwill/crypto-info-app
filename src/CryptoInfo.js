// import react from "react";

function CryptoInfo() {

  const idInfo = [{
      key: 'bitcoin',
      image: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
      url: 'https://bitcoin.org/en/'
    }, 
    {
      key: 'ethereum',
      image: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880",
      url: 'https://ethereum.org/en/'
    },
    {
      key: 'tether',
      image: "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707",
      url: 'https://tether.to/en/'
    },
    {
      key: 'binancecoin',
      image: "https://assets.coingecko.com/coins/images/825/thumb/binance-coin-logo.png?1547034615",
      url: 'https://www.binance.com/en'
    },
    {
      key: 'usd-coin',
      image: "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389",
      url: 'https://www.circle.com/en/usdc'
    },
    {
      key: 'cardano',
      image: "https://assets.coingecko.com/coins/images/975/thumb/cardano.png?1547034860",
      url: 'https://cardano.org/'
    },
    {
      key: 'solana',
      image: "https://assets.coingecko.com/coins/images/4128/thumb/solana.png?1640133422",
      url: 'https://solana.com/'
    },
    {
      key: 'ripple',
      image: "https://assets.coingecko.com/coins/images/44/thumb/xrp-symbol-white-128.png?1605778731",
      url: 'https://ripple.com/xrp/'
    },
    {
      key: 'terra-luna',
      image: "https://assets.coingecko.com/coins/images/8284/thumb/luna1557227471663.png?1567147072",
      url: 'https://www.terra.money/'
    },
    {
      key: 'polkadot',
      image: "https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png?1639712644",
      url: 'https://polkadot.network/'
    }];

  const infoCards = idInfo.map(coin => (
    <div className="linkCards" key={coin.key} onClick={e => window.location.href = `${coin.url}`}>
      <img className="linkImage" src={coin.image}></img>
    </div>
  ))

  return (
    <div className="labelBar">
        <h3 id="head">Future Functionality</h3>
      <div className="card2">
        <ul>
          <li>Descriptions following click on Crypto card</li>
          <li>Chart showing price change history</li>
        </ul>
      </div>
      <div>
        <h3 className="head">More info</h3>
        {infoCards}
      </div>
    </div>
  )
};

export default CryptoInfo;