import type { Tx } from '../../../index'
import { mempoolMock } from './mempoolMock'

const erc1155: Tx = {
  txid: '0x714f2a09d30788767afc34ecc8ca54f237c0ba1ad2152af69c81c96aad0bc2e9',
  blockHash: '0x101cc6b1d74b29303a3347d02d4cc188f336aedcd906b44b915e3a7e49b22ed9',
  blockHeight: 29847029,
  timestamp: 1683738998,
  status: 1,
  from: '0xD9e686e69131E4068a3dd381F4C4cafe3759AE3F',
  to: '0xa695ea0C90D89a1463A53Fa7a02168Bc46FbBF7e',
  confirmations: 727,
  value: '0',
  fee: '8660269633799979',
  gasLimit: '193470',
  gasUsed: '63947',
  gasPrice: '135428865057',
  inputData:
    '0xf242432a000000000000000000000000d9e686e69131e4068a3dd381f4c4cafe3759ae3f0000000000000000000000000219985af43434a342eec137141247333a275f3000000000000000000000000000000000000000000000000000000000000002b2000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000',
  tokenTransfers: [
    {
      contract: '0xa695ea0C90D89a1463A53Fa7a02168Bc46FbBF7e',
      decimals: 18,
      name: '',
      symbol: '',
      type: 'ERC1155',
      from: '0xD9e686e69131E4068a3dd381F4C4cafe3759AE3F',
      to: '0x0219985aF43434a342eec137141247333A275F30',
      value: '1',
      id: '690',
    },
  ],
  internalTxs: [],
}

export default {
  tx: erc1155,
  txMempool: mempoolMock(erc1155),
}