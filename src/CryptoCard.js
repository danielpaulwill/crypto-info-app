import { useEffect, useState } from "react"

function CryptoCard({ cryptoCoin, isDarkMode }) {
  const [cryptoImage, setCryptoImage] = useState()

  console.log(cryptoCoin.id)

  const changeStatus = Math.sign(cryptoCoin.price_change_percentage_24h_in_currency)

  let bitcoin = "assets/bitcoin.png"
  let ethereum = "assets/ethereum.png"
  let tether = "assets/tether.png"


  useEffect(() => {
    if (cryptoCoin.id === "bitcoin") {
      setCryptoImage(bitcoin)
    } else if (cryptoCoin.id === "ethereum") {
      setCryptoImage(ethereum)
    } else if (cryptoCoin.id === "tether") {
      setCryptoImage(tether)
    } else setCryptoImage(tether)
    //  else if (cryptoCoin.id === "x") {
    //   setCryptoImage(x)
    // } else if (cryptoCoin.id === "x") {
    //   setCryptoImage(x)
    // } else if (cryptoCoin.id === "x") {
    //   setCryptoImage(x)
    // } else if (cryptoCoin.id === "x") {
    //   setCryptoImage(x)
    // } else if (cryptoCoin.id === "x") {
    //   setCryptoImage(x)
    // } else if (cryptoCoin.id === "x") {
    //   setCryptoImage(x)
    // }
  }, [])

/*
"id": "dogecoin"
"image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256"

"id": "matic-network"
"image": "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"

"id": "solana"
"image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422"

"id": "polkadot"
"image": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644"

"id": "tron"
"image": "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066"

"id": "litecoin"
"image": "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"

"id": "binance-usd"
"image": "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766"

"id": "shiba-inu"
"image": "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446"

"id": "avalanche-2"
"image": "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1670992574"

"id": "dai"
"image": "https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734"

"id": "wrapped-bitcoin"
"image": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744"

"id": "uniswap"
"image": "https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604"

"id": "chainlink"
"image": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700"

"id": "leo-token"
"image": "https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1558326215"

"id": "cosmos"
"image": "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960"

"id": "the-open-network"
"image": "https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1670498136"

"id": "monero"
"image": "https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729"

"id": "okb"
"image": "https://assets.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png?1642471050"

"id": "ethereum-classic"
"image": "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169"

"id": "stellar"
"image": "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157"

"id": "internet-computer"
"image": "https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1620703073"

"id": "bitcoin-cash"
"image": "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492"

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
      {/* Hello World! */}
    </div>
  )
};

export default CryptoCard;
