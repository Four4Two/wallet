import type { TradeQuote2 } from 'lib/swapper/api'

export const lifiQuote: TradeQuote2 = {
  id: '0x5ba393814e096f79f4316615b82462eaaee2cf4e1c935d35624a6390bc932b83',
  rate: '51.34579860391078801712',
  affiliateBps: undefined,
  receiveAddress: '0x31b5c4ab7d020de87901c736535aeb4769806947',
  minimumCryptoHuman: '0.01000010000100001',
  steps: [
    {
      allowanceContract: '0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE',
      accountNumber: 0,
      buyAmountBeforeFeesCryptoBaseUnit: '1.0269262412379365425e+21',
      buyAsset: {
        assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
        chainId: 'eip155:1',
        name: 'JINX on Ethereum',
        precision: 18,
        color: '#3761F9',
        icon: 'https://assets.coincap.io/assets/icons/256/jinx.png',
        symbol: 'JINX',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      feeData: {
        protocolFees: {},
        networkFeeCryptoBaseUnit: '7543572217388900',
      },
      rate: '51.34579860391078801712',
      sellAmountIncludingProtocolFeesCryptoBaseUnit: '20000200',
      sellAsset: {
        assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chainId: 'eip155:1',
        name: 'USD Coin on Ethereum',
        precision: 6,
        color: '#2373CB',
        icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
        symbol: 'USDC',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      sources: [
        {
          name: '0x (LI.FI)',
          proportion: '1',
        },
      ],
    },
  ],
}

export const thorQuote: TradeQuote2 = {
  id: 'f4636745-bf07-4799-9efb-c056691b652f',
  rate: '39.23942597524024759752',
  receiveAddress: '0x31b5c4ab7d020de87901c736535aeb4769806947',
  affiliateBps: '30',
  minimumCryptoHuman: '5.201707582929838658388',
  recommendedSlippage: '0.00001',
  steps: [
    {
      rate: '39.23942597524024759752',
      sellAmountIncludingProtocolFeesCryptoBaseUnit: '20000200',
      buyAmountBeforeFeesCryptoBaseUnit: '1013948034150000000000',
      sources: [
        {
          name: 'THORChain',
          proportion: '1',
        },
      ],
      buyAsset: {
        assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
        chainId: 'eip155:1',
        name: 'JINX on Ethereum',
        precision: 18,
        color: '#3761F9',
        icon: 'https://assets.coincap.io/assets/icons/256/jinx.png',
        symbol: 'JINX',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      sellAsset: {
        assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chainId: 'eip155:1',
        name: 'USD Coin on Ethereum',
        precision: 6,
        color: '#2373CB',
        icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
        symbol: 'USDC',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      accountNumber: 0,
      allowanceContract: '0xD37BbE5744D730a1d98d8DC97c42F0Ca46aD7146',
      feeData: {
        networkFeeCryptoBaseUnit: '1873039322000000',
        protocolFees: {
          'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d': {
            amountCryptoBaseUnit: '226109822660000000000',
            requiresBalance: false,
            asset: {
              assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
              chainId: 'eip155:1',
              name: 'JINX on Ethereum',
              precision: 18,
              color: '#3761F9',
              icon: 'https://assets.coincap.io/assets/icons/256/jinx.png',
              symbol: 'JINX',
              explorer: 'https://etherscan.io',
              explorerAddressLink: 'https://etherscan.io/address/',
              explorerTxLink: 'https://etherscan.io/tx/',
            },
          },
          'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
            amountCryptoBaseUnit: '58315.259280195801954911697',
            requiresBalance: false,
            asset: {
              assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
              chainId: 'eip155:1',
              name: 'USD Coin on Ethereum',
              precision: 6,
              color: '#2373CB',
              icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
              symbol: 'USDC',
              explorer: 'https://etherscan.io',
              explorerAddressLink: 'https://etherscan.io/address/',
              explorerTxLink: 'https://etherscan.io/tx/',
            },
          },
        },
      },
    },
  ],
}

export const oneInchQuote: TradeQuote2 = {
  id: '89654b4f-c90b-4578-bb9f-7c93e7ad227d',
  rate: '51.63754486526613135844',
  affiliateBps: undefined,
  receiveAddress: '0x31b5c4ab7d020de87901c736535aeb4769806947',
  minimumCryptoHuman: '1.00001000010000100001',
  steps: [
    {
      allowanceContract: '0x1111111254eeb25477b68fb85ed929f73a960582',
      rate: '51.63754486526613135844',
      buyAsset: {
        assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
        chainId: 'eip155:1',
        name: 'JINX on Ethereum',
        precision: 18,
        color: '#3761F9',
        icon: 'https://assets.coincap.io/assets/icons/256/jinx.png',
        symbol: 'JINX',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      sellAsset: {
        assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chainId: 'eip155:1',
        name: 'USD Coin on Ethereum',
        precision: 6,
        color: '#2373CB',
        icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
        symbol: 'USDC',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      accountNumber: 0,
      buyAmountBeforeFeesCryptoBaseUnit: '1032761224814295680395',
      sellAmountIncludingProtocolFeesCryptoBaseUnit: '20000200',
      feeData: {
        protocolFees: {},
        networkFeeCryptoBaseUnit: '5746091301638380',
      },
      sources: [
        {
          name: '1INCH',
          proportion: '1',
        },
      ],
    },
  ],
}

export const cowQuote: TradeQuote2 = {
  id: '220858750',
  rate: '51.86127422365727736757',
  affiliateBps: undefined,
  receiveAddress: '0x31b5c4ab7d020de87901c736535aeb4769806947',
  minimumCryptoHuman: '20.0002000020000200002',
  steps: [
    {
      allowanceContract: '0xc92e8bdf79f0507f65a392b0ab4667716bfe0110',
      rate: '51.86127422365727736757',
      feeData: {
        networkFeeCryptoBaseUnit: '0',
        protocolFees: {
          'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
            amountCryptoBaseUnit: '6421720',
            requiresBalance: false,
            asset: {
              assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
              chainId: 'eip155:1',
              name: 'USD Coin on Ethereum',
              precision: 6,
              color: '#2373CB',
              icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
              symbol: 'USDC',
              explorer: 'https://etherscan.io',
              explorerAddressLink: 'https://etherscan.io/address/',
              explorerTxLink: 'https://etherscan.io/tx/',
            },
          },
        },
      },
      sellAmountIncludingProtocolFeesCryptoBaseUnit: '20000200',
      buyAmountBeforeFeesCryptoBaseUnit: '1039167423885457658942',
      sources: [
        {
          name: 'CoW Swap',
          proportion: '1',
        },
      ],
      buyAsset: {
        assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
        chainId: 'eip155:1',
        name: 'JINX on Ethereum',
        precision: 18,
        color: '#3761F9',
        icon: 'https://assets.coincap.io/assets/icons/256/jinx.png',
        symbol: 'JINX',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      sellAsset: {
        assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chainId: 'eip155:1',
        name: 'USD Coin on Ethereum',
        precision: 6,
        color: '#2373CB',
        icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
        symbol: 'USDC',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      accountNumber: 0,
    },
  ],
}

export const zrxQuote: TradeQuote2 = {
  id: 'dfb5f2e6-9cb9-4865-9ef5-6b54d203affa',
  rate: '51.603817692372651273',
  affiliateBps: undefined,
  receiveAddress: '0x31b5c4ab7d020de87901c736535aeb4769806947',
  minimumCryptoHuman: '1.00001000010000100001',
  steps: [
    {
      allowanceContract: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
      buyAsset: {
        assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
        chainId: 'eip155:1',
        name: 'JINX on Ethereum',
        precision: 18,
        color: '#3761F9',
        icon: 'https://assets.coincap.io/assets/icons/256/jinx.png',
        symbol: 'JINX',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      sellAsset: {
        assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chainId: 'eip155:1',
        name: 'USD Coin on Ethereum',
        precision: 6,
        color: '#2373CB',
        icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
        symbol: 'USDC',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      accountNumber: 0,
      rate: '51.603817692372651273',
      feeData: {
        networkFeeCryptoBaseUnit: '3506329610784000',
        protocolFees: {},
      },
      buyAmountBeforeFeesCryptoBaseUnit: '1032086674610991500000',
      sellAmountIncludingProtocolFeesCryptoBaseUnit: '20000200',
      sources: [
        {
          name: 'Uniswap_V2',
          proportion: '1',
        },
      ],
    },
  ],
}

export const quotes: TradeQuote2[] = [lifiQuote, thorQuote, zrxQuote, cowQuote, oneInchQuote]
