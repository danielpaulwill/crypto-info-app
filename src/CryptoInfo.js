import { useState, useEffect } from "react";

function CryptoInfo({ coin, isDarkMode}) {
  const [cryptoImage, setCryptoImage] = useState()

  console.log(coin[0])

  let bitcoin = "assets/images/bitcoin.png"
  let ethereum = "assets/images/ethereum.png"
  let tether = "assets/images/tether.png"
  let binancecoin = "assets/images/binancecoin.png"
  let cardano = "assets/images/cardano.png"
  let dogecoin = "assets/images/dogecoin.png"
  let ripple = "assets/images/ripple.png"
  let stakedEther = "assets/images/staked-ether.png"
  let usdCoin = "assets/images/usd-coin.png"
  let avalanche2 = "assets/images/avalanche-2.png"
  let binanceUsd = "assets/images/binance-usd.png"
  let bitcoinCash = "assets/images/bitcoin-cash.png"
  let chainlink = "assets/images/chainlink.png"
  let cosmos = "assets/images/cosmos.png"
  let dai = "assets/images/dai.png"
  let ethereumClassic = "assets/images/ethereum-classic.png"
  let internetComputer = "assets/images/internet-computer.png"
  let leoToken = "assets/images/leo-token.png"
  let litecoin = "assets/images/litecoin.png"
  let maticNetwork = "assets/images/matic-network.png"
  let monero = "assets/images/monero.png"
  let okb = "assets/images/okb.png"
  let polkadot = "assets/images/polkadot.png"
  let shibaInu = "assets/images/shiba-inu.png"
  let solana = "assets/images/solana.png"
  let stellar = "assets/images/stellar.png"
  let openNetwork = "assets/images/the-open-network.png"
  let tron = "assets/images/tron.png"
  let uniswap = "assets/images/uniswap.png"
  let wrappedBitcoin = "assets/images/wrapped-bitcoin.png"

  useEffect(() => {
    if (coin[0].id === "bitcoin") {
      setCryptoImage(bitcoin)
    } else if (coin[0].id === "ethereum") {
      setCryptoImage(ethereum)
    } else if (coin[0].id === "tether") {
      setCryptoImage(tether)
    } else if (coin[0].id === "binancecoin") {
      setCryptoImage(binancecoin)
    } else if (coin[0].id === "cardano") {
      setCryptoImage(cardano)
    } else if (coin[0].id === "dogecoin") {
      setCryptoImage(dogecoin)
    } else if (coin[0].id === "ripple") {
      setCryptoImage(ripple)
    } else if (coin[0].id === "staked-ether") {
      setCryptoImage(stakedEther)
    } else if (coin[0].id === "usd-coin") {
      setCryptoImage(usdCoin)
    } else if (coin[0].id === "avalanche-2") {
      setCryptoImage(avalanche2)
    } else if (coin[0].id === "binance-usd") {
      setCryptoImage(binanceUsd)
    } else if (coin[0].id === "bitcoin-cash") {
      setCryptoImage(bitcoinCash)
    } else if (coin[0].id === "chainlink") {
      setCryptoImage(chainlink)
    } else if (coin[0].id === "cosmos") {
      setCryptoImage(cosmos)
    } else if (coin[0].id === "dai") {
      setCryptoImage(dai)
    } else if (coin[0].id === "ethereum-classic") {
      setCryptoImage(ethereumClassic)
    } else if (coin[0].id === "internet-computer") {
      setCryptoImage(internetComputer)
    } else if (coin[0].id === "leo-token") {
      setCryptoImage(leoToken)
    } else if (coin[0].id === "litecoin") {
      setCryptoImage(litecoin)
    } else if (coin[0].id === "matic-network") {
      setCryptoImage(maticNetwork)
    } else if (coin[0].id === "monero") {
      setCryptoImage(monero)
    } else if (coin[0].id === "okb") {
      setCryptoImage(okb)
    } else if (coin[0].id === "polkadot") {
      setCryptoImage(polkadot)
    } else if (coin[0].id === "shiba-inu") {
      setCryptoImage(shibaInu)
    } else if (coin[0].id === "solana") {
      setCryptoImage(solana)
    } else if (coin[0].id === "stellar") {
      setCryptoImage(stellar)
    } else if (coin[0].id === "the-open-network") {
      setCryptoImage(openNetwork)
    } else if (coin[0].id === "tron") {
      setCryptoImage(tron)
    } else if (coin[0].id === "uniswap") {
      setCryptoImage(uniswap)
    } else if (coin[0].id === "wrapped-bitcoin") {
      setCryptoImage(wrappedBitcoin)
    }
  }, [coin[0].id, bitcoin, ethereum, tether, binancecoin, cardano, dogecoin, ripple, stakedEther, usdCoin, avalanche2, binanceUsd, bitcoinCash, chainlink, cosmos, dai, ethereumClassic, internetComputer, leoToken, litecoin, maticNetwork, monero, okb, polkadot, shibaInu, solana, stellar, openNetwork, tron, uniswap, wrappedBitcoin])



  return (
        <div className="infoBack" onClick={e => console.log(e.target)} >
          {/* Card itself, where the curved grey starts */}
          <div className={isDarkMode ? "infoCardD" : "infoCardL"}>
            <div className="logoContainer">
              <div className="col-3">
                <div className="imgContainer">
                  <img src={cryptoImage} alt="crypto coin logo" className="cardImg"></img>
                </div>
                <div className="textContainer">
                  <p className={isDarkMode ? "cryptoName textD" : "cryptoName textL"}>{coin[0].name}</p>
                </div>
              </div>
            </div>
            <div className="symbolContainer">
              <p className={isDarkMode ? "symbolText textD" : "symbolText textL"}>{coin[0].symbol}</p>
            </div>
            <div className="priceContainer">
              <p className={isDarkMode ? "priceText textD" : "priceText textL"}>formattedPrice</p>
            </div>
            <div className="changeContainer">
              <p className={isDarkMode ? "changeText textD" : "changeText textL"}>24 hr Δ</p>
              <p className={(coin[0].price_change_percentage_24h < 0) ? "negativeChange" : "positiveChange"}>{(coin[0].price_change_percentage_24h < 0) ? "▼" : "▲"} {coin[0].price_change_percentage_24h.toFixed(2)}%</p>
            </div>
          </div>
        </div>




    // <div className="labelBar">
    //     <h3 id="head">Future Functionality</h3>
    //   <div className="card2">
    //     <ul>
    //       <li>Descriptions following click on Crypto card</li>
    //       <li>Chart showing price change history</li>
    //     </ul>
    //   </div>
    //   <div>
    //     <h3 className="head">More info</h3>
    //   </div>
    // </div>
  )
};

export default CryptoInfo;