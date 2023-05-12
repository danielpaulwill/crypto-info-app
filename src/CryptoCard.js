import { useEffect, useState } from "react"

function CryptoCard({ cryptoCoin, isDarkMode }) {
  const [cryptoImage, setCryptoImage] = useState()

  console.log(cryptoCoin.id)

  const changeStatus = Math.sign(cryptoCoin.price_change_percentage_24h_in_currency)

  let bitcoin = "assets/images/bitcoin.png"
  let ethereum = "assets/images/ethereum.png"
  let tether = "assets/images/tether.png"
  let binancecoin = "assets/images/binancecoin.png"
  let cardano = "assets/images/cardano.png"
  let dogecoin = "assets/images/dogecoin.png"
  let ripple = "assets/images/ripple.png"
  let stakedEther = "assets/images/staked-ether.png"
  let usdCoin = "assets/images/usd-coin.png"


  useEffect(() => {
    if (cryptoCoin.id === "bitcoin") {
      setCryptoImage(bitcoin)
    } else if (cryptoCoin.id === "ethereum") {
      setCryptoImage(ethereum)
    } else if (cryptoCoin.id === "tether") {
      setCryptoImage(tether)
    } else if (cryptoCoin.id === "binancecoin") {
      setCryptoImage(binancecoin)
    } else if (cryptoCoin.id === "cardano") {
      setCryptoImage(cardano)
    } else if (cryptoCoin.id === "dogecoin") {
      setCryptoImage(dogecoin)
    } else if (cryptoCoin.id === "ripple") {
      setCryptoImage(ripple)
    } else if (cryptoCoin.id === "staked-ether") {
      setCryptoImage(stakedEther)
    } else if (cryptoCoin.id === "usd-coin") {
      setCryptoImage(usdCoin)
    // } else if (cryptoCoin.id === "usd-coin") {
    //   setCryptoImage(usdCoin)

    }
  }, [])

/*
"id": "filecoin"
"image": "https://assets.coingecko.com/coins/images/12817/large/filecoin.png?1602753933"

"id": "true-usd"
"image": "https://assets.coingecko.com/coins/images/3449/large/tusd.png?1618395665"

"id": "hedera-hashgraph"
"image": "https://assets.coingecko.com/coins/images/3688/large/hbar.png?1637045634"

"id": "aptos"
"image": "https://assets.coingecko.com/coins/images/26455/large/aptos_round.png?1666839629"

"id": "crypto-com-chain"
"image": "https://assets.coingecko.com/coins/images/7310/large/cro_token_logo.png?1669699773"

"id": "lido-dao"
"image": "https://assets.coingecko.com/coins/images/13573/large/Lido_DAO.png?1609873644"

"id": "quant-network"
"image": "https://assets.coingecko.com/coins/images/3370/large/5ZOu7brX_400x400.jpg?1612437252"

"id": "near"
"image": "https://assets.coingecko.com/coins/images/10365/large/near.png?1677061777"

"id": "arbitrum"
"image": "https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg?1680097630"

"id": "vechain"
"image": "https://assets.coingecko.com/coins/images/1167/large/VET_Token_Icon.png?1680067517"

"id": "apecoin"
"image": "https://assets.coingecko.com/coins/images/24383/large/apecoin.jpg?1647476455"

"id": "algorand"
"image": "https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725"

"id": "pepe"
"image": "https://assets.coingecko.com/coins/images/29850/large/pepe-token.jpeg?1682922725"

"id": "the-graph"
"image": "https://assets.coingecko.com/coins/images/13397/large/Graph_Token.png?1608145566"

"id": "fantom"
"image": "https://assets.coingecko.com/coins/images/4001/large/Fantom_round.png?1669652346"

"id": "eos"
"image": "https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481"

"id": "paxos-standard"
"image": "https://assets.coingecko.com/coins/images/6013/large/Pax_Dollar.png?1629877204"

"id": "blockstack"
"image": "https://assets.coingecko.com/coins/images/2069/large/Stacks_logo_full.png?1604112510",

"id": "the-sandbox"
"image": "https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg?1597397942",

"id": "edgecoin-2",
"image": "https://assets.coingecko.com/coins/images/14409/large/edgecoin_bank_logo-4_%281%29.png?1673251201",
*/


  return (
    <div className="cardD">
      <div className="imgContainer">

      <img src={cryptoImage} alt="crypto coin logo" className="cardImg"></img>
      </div>
      Hello World!
    </div>
  )
};

export default CryptoCard;
