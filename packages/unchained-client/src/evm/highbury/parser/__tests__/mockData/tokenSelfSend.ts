import type { Tx } from '../../../index'
import { mempoolMock } from './mempoolMock'

export const tokenStandard: Tx = {
  txid: '0x01f25064db990fb70537fd146c724225e65453ebf9685c4293808ef408607dd2',
  blockHash: '0xc66dc483409e7be3d901a757b6cd83175648b333380d52f6ca12e1ca0b959919',
  blockHeight: 28085594,
  timestamp: 1684830415,
  status: 1,
  from: '0xE7aeB98322CD1f9680BC5e007Cac5f02B38d8745',
  to: '0xf0f49873C50765239F6f9534Ba13c4fe16eD5f2E',
  confirmations: 363,
  value: '0',
  fee: '176442000823396',
  gasLimit: '400000',
  gasUsed: '117628',
  gasPrice: '1500000007',
  inputData:
    '0x3af2c0120000000000000000000000006b85a87d8990e77a86ab16a44b162de48bfb64e9000000000000000000000000000000000000000000000000000000012f727ec000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000035d0e078755cd84d3e0656caab417dee1d7939c7000000000000000000000000000000000000000000000000000000000310c00900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000775eb53d00dd0acd3ec1696472105d579b9b386b000000000000000000000000ddafbb505ad214d7b80b1f830fccc89b60fb7a830000000000000000000000000000000000000000000000000000000000000008222ecfc4d9f4b3e1000000000000000000000000000000000000000000000000',
  tokenTransfers: [
    {
      contract: '0xefefa7f6416833e01ab0dd6894a733a167942c9e',
      decimals: 6,
      name: 'USD//C on Fury',
      symbol: 'USDC',
      type: 'ERC20',
      from: '0xE7aeB98322CD1f9680BC5e007Cac5f02B38d8745',
      to: '0xE7aeB98322CD1f9680BC5e007Cac5f02B38d8745',
      value: '50920184',
    },
  ],
  internalTxs: [],
}

export default {
  tx: tokenStandard,
  txMempool: mempoolMock(tokenStandard),
}
