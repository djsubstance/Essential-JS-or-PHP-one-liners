
░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓██████████████▓▒░░▒▓███████▓▒░       ░▒▓█▓▒░      ░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓███████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░       ░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░ ░▒▓██████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓████████▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░  
                                                                                                                              
                                                                                                                              

// Filename dumplinks.js

paste into console to dump all links in DOM:
document.querySelectorAll('a').forEach(a => console.log(a.href));

Explanation:
-> document.querySelectorAll('a'): This selects all <a> elements (hyperlinks) in the document.
-> .forEach(a => console.log(a.href)): For each of these elements, it logs the value of the href attribute to the console.

output:
2VM468:1 https://exchange.coinbase.com/trade/BTC-USD
VM468:1 https://coinmarketcap.com/exchanges/okx/
2VM468:1 https://www.okx.com/trade-spot/btc-usdt?channelid=43776722
VM468:1 https://coinmarketcap.com/exchanges/bybit/
2VM468:1 https://www.bybit.com/en-US/trade/spot/BTC/USDT
VM468:1 https://coinmarketcap.com/exchanges/kraken/
2VM468:1 https://pro.kraken.com/app/trade/xbt-usd
VM468:1 https://coinmarketcap.com/exchanges/binance/
2VM468:1 https://www.binance.com/en/trade/ETH_BTC?ref=40896146
VM468:1 https://coinmarketcap.com/exchanges/binance/
2VM468:1 https://www.binance.com/en/trade/BTC_USDC?ref=40896146
VM468:1 https://coinmarketcap.com/exchanges/kraken/
2VM468:1 https://pro.kraken.com/app/trade/xbt-eur
VM468:1 https://coinmarketcap.com/exchanges/binance/
2VM468:1 https://www.binance.com/en/trade/BTC_TUSD?ref=40896146
2VM468:1 
VM468:1 https://coinmarketcap.com/currencies/[...cryptocurrencySlug]?page=2
VM468:1 https://coinmarketcap.com/currencies/[...cryptocurrencySlug]?page=3
VM468:1 https://coinmarketcap.com/currencies/[...cryptocurrencySlug]?page=4
VM468:1 
VM468:1 https://coinmarketcap.com/currencies/[...cryptocurrencySlug]?page=595
VM468:1 https://coinmarketcap.com/currencies/[...cryptocurrencySlug]?page=2
2VM468:1 
VM468:1 https://coinmarketcap.com/currencies/[...cryptocurrencySlug]?page=2
VM468:1 https://coinmarketcap.com/currencies/[...cryptocurrencySlug]?page=3
VM468:1 https://coinmarketcap.com/currencies/[...cryptocurrencySlug]?page=4
VM468:1 
VM468:1 https://coinmarketcap.com/currencies/[...cryptocurrencySlug]?page=595
VM468:1 https://coinmarketcap.com/currencies/[...cryptocurrencySlug]?page=2
VM468:1 https://coinmarketcap.com/affiliate-disclosure/
VM468:1 https://coinmarketcap.com/alexandria/article/an-intro-to-bitcoin
VM468:1 https://coinmarketcap.com/alexandria/article/what-are-cryptocurrencies
VM468:1 https://coinmarketcap.com/alexandria/glossary/whitepaper
VM468:1 https://coinmarketcap.com/alexandria/article/who-is-satoshi-nakamoto
VM468:1 https://coinmarketcap.com/alexandria/article/what-is-bitcoin
VM468:1 https://coinmarketcap.com/alexandria/article/how-long-does-a-bitcoin-transaction-take
VM468:1 https://coinmarketcap.com/alexandria/article/a-beginner-s-guide-to-investing-in-cryptocurrencies
VM468:1 https://coinmarketcap.com/alexandria/glossary/blockchain
VM468:1 https://coinmarketcap.com/alexandria/glossary/genesis-block
VM468:1 https://coinmarketcap.com/
VM468:1 https://coinmarketcap.com/alexandria/article/what-are-cryptocurrencies
VM468:1 https://coinmarketcap.com/alexandria/glossary/market-capitalization-market-cap-mcap
VM468:1 https://coinmarketcap.com/alexandria/article/how-to-use-a-bitcoin-wallet
VM468:1 https://coinmarketcap.com/alexandria/article/what-is-tokenomics
VM468:1 https://coinmarketcap.com/alexandria/article/how-long-does-it-take-to-mine-one-bitcoin
VM468:1 https://coinmarketcap.com/halving/bitcoin/
VM468:1 https://coinmarketcap.com/alexandria/article/how-to-mine-bitcoin
VM468:1 https://coinmarketcap.com/alexandria/article/how-long-does-it-take-to-mine-one-bitcoin
VM468:1 https://coinmarketcap.com/alexandria/
VM468:1 https://coinmarketcap.com/alexandria/article/bitcoin-halvings-what-they-are-why-they-happen-and-why-you-should-care
VM468:1 https://coinmarketcap.com/alexandria/glossary/sha-256
VM468:1 https://coinmarketcap.com/currencies/bitcoin-cash/
VM468:1 https://coinmarketcap.com/alexandria/glossary/satoshi-sats
VM468:1 https://coinmarketcap.com/alexandria/glossary/hard-fork-blockchain
VM468:1 https://coinmarketcap.com/alexandria/glossary/soft-fork-blockchain
VM468:1 https://coinmarketcap.com/alexandria/article/what-is-bitcoin-cash
VM468:1 https://coinmarketcap.com/alexandria/article/ethereum-vs-ethereum-classic
VM468:1 https://coinmarketcap.com/alexandria/article/bitcoin-vs-bitcoin-cash-vs-bitcoin-sv
VM468:1 https://coinmarketcap.com/alexandria/glossary/soft-fork-blockchain
VM468:1 https://coinmarketcap.com/alexandria/glossary/multisignature
VM468:1 https://coinmarketcap.com/alexandria/glossary/hodl
VM468:1 https://coinmarketcap.com/alexandria/glossary/smart-contract
VM468:1 https://coinmarketcap.com/alexandria/glossary/defi
VM468:1 https://coinmarketcap.com/currencies/ethereum/
VM468:1 https://coinmarketcap.com/alexandria/article/tesla-has-made-100m-on-bitcoin-already-but-elon-musk-is-being-criticized
VM468:1 https://coinmarketcap.com/alexandria/article/el-salvador-plans-to-make-bitcoin-legal-tender-why-thats-a-big-deal
VM468:1 https://coinmarketcap.com/alexandria/article/bitcoin-atm-set-on-fire-as-el-salvador-marks-independence-day
VM468:1 https://coinmarketcap.com/alexandria/article/bank-of-england-criticizes-el-salvador-over-bitcoin
VM468:1 https://coinmarketcap.com/alexandria/article/imf-warns-that-el-salvadors-plan-to-adopt-bitcoin-has-risks
VM468:1 https://coinmarketcap.com/alexandria/article/reckless-buterin-attacks-el-salvador-s-president
VM468:1 https://coinmarketcap.com/alexandria/article/el-salvador-to-build-world-s-first-bitcoin-city
VM468:1 https://coinmarketcap.com/alexandria/article/mexico-has-no-plans-to-make-bitcoin-legal-tender
VM468:1 https://coinmarketcap.com/alexandria/article/russia-says-it-wont-make-bitcoin-legal-tender-as-media-says-el-salvador-is-making-dangerous-gamble
VM468:1 https://coinmarketcap.com/alexandria/article/bitcoin-price-falls-as-china-declares-all-crypto-transactions-are-illegal
VM468:1 https://ccaf.io/cbeci/mining_map
VM468:1 https://www.binance.com/en/buy-Bitcoin
VM468:1 https://www.binance.com/en/price/bitcoin
VM468:1 https://coinmarketcap.com/exchanges/coinbase-pro/
VM468:1 https://coinmarketcap.com/exchanges/okex/
VM468:1 https://coinmarketcap.com/exchanges/kraken/
VM468:1 https://coinmarketcap.com/exchanges/huobi-global/
VM468:1 https://coinmarketcap.com/exchanges/bitfinex/
VM468:1 https://coinmarketcap.com/alexandria
VM468:1 https://coinmarketcap.com/alexandria/article/how-to-buy-bitcoin
VM468:1 https://blockchain.coinmarketcap.com/chain/bitcoin
VM468:1 https://coinmarketcap.com/how-to-buy-bitcoin/
VM468:1 https://coinmarketcap.com/mobile/
VM468:1 https://coinmarketcap.com/converter/
VM468:1 https://coinmarketcap.com/alexandria/article/if-you-buy-bitcoin-on-paypal-you-didnt-buy-bitcoin-crypto-expert-claims
VM468:1 https://coinmarketcap.com/alexandria/article/what-is-wrapped-bitcoin
VM468:1 https://coinmarketcap.com/alexandria/article/will-bitcoin-volatility-ever-reduce
VM468:1 https://coinmarketcap.com/alexandria/article/how-to-use-a-bitcoin-atm
VM468:1 https://coinmarketcap.com/alexandria/article/best-crypto-cold-wallets
VM468:1 https://coinmarketcap.com/alexandria/article/10-best-crypto-hot-wallets-for-beginners
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/usd/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/eur/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/gbp/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/cny/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/cad/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/aud/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/jpy/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/krw/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/rub/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/inr/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/brl/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/try/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/btc/php/
VM468:1 https://coinmarketcap.com/currencies/ethereum/
VM468:1 https://coinmarketcap.com/currencies/yearn-finance/
VM468:1 https://coinmarketcap.com/currencies/band-protocol/
VM468:1 https://coinmarketcap.com/currencies/gather/
VM468:1 https://coinmarketcap.com/currencies/1irstcoin/
VM468:1 https://coinmarketcap.com/currencies/goldmint/
VM468:1 https://coinmarketcap.com/currencies/uniswap/
VM468:1 https://coinmarketcap.com/currencies/firo/
VM468:1 https://coinmarketcap.com/currencies/chainlink/
VM468:1 https://coinmarketcap.com/currencies/oasis-network/
VM468:1 https://coinmarketcap.com/currencies/dymension/
VM468:1 https://coinmarketcap.com/currencies/chuck-norris/
VM468:1 https://coinmarketcap.com/currencies/orchid/
VM468:1 https://coinmarketcap.com/currencies/pangolin/
VM468:1 https://coinmarketcap.com/currencies/starknet-token/
VM468:1 https://coinmarketcap.com/exchanges/binance/
VM468:1 https://coinmarketcap.com/exchanges/exmarkets/
VM468:1 https://coinmarketcap.com/exchanges/bluebit/
VM468:1 https://coinmarketcap.com/exchanges/okx/
VM468:1 https://coinmarketcap.com/exchanges/bybit/
VM468:1 https://coinmarketcap.com/rankings/exchanges/
VM468:1 https://coinmarketcap.com/
VM468:1 https://coinmarketcap.com/coins/
VM468:1 https://coinmarketcap.com/currencies/bitcoin/
VM468:1 https://coinmarketcap.com/events/cmc-labs/
VM468:1 https://coinmarketcap.com/events/cmc-plugin-chatgpt/
VM468:1 https://coinmarketcap.com/api/
VM468:1 https://coinmarketcap.com/indices/
VM468:1 https://coinmarketcap.com/doodles/
VM468:1 https://coinmarketcap.com/sitemap/cryptocurrencies/
VM468:1 https://coinmarketcap.com/events/advertise/
VM468:1 https://coinmarketcap.com/about/
VM468:1 https://coinmarketcap.com/terms/
VM468:1 https://coinmarketcap.com/privacy/
VM468:1 
VM468:1 https://coinmarketcap.com/cookie-policy/
VM468:1 https://support.coinmarketcap.com/hc/en-us/articles/4412939497755
VM468:1 https://coinmarketcap.com/disclaimer/
VM468:1 https://coinmarketcap.com/methodology/
VM468:1 https://coinmarketcap.com/jobs
2VM468:1 https://coinmarketcap.com/request/
VM468:1 https://coinmarketcap.com/faq/
VM468:1 https://coinmarketcap.com/academy/glossary
VM468:1 https://twitter.com/CoinMarketCap
VM468:1 https://coinmarketcap.com/community/profile/CoinMarketCap/
VM468:1 https://t.me/CoinMarketCapAnnouncements
VM468:1 https://www.instagram.com/coinmarketcap/
VM468:1 https://www.facebook.com/CoinMarketCap
VM468:1 https://www.reddit.com/r/CoinMarketCap/
VM468:1 https://www.linkedin.com/company/coinmarketcap/
VM468:1 https://itunes.apple.com/app/coinmarketcap/id1282107098?ls=1&mt=8
VM468:1 https://play.google.com/store/apps/details?id=com.coinmarketcap.android&hl=en_US

undefined - You may see undefined because nothing was returned
