import type {
  InboundAddressResponse,
  ThornodePoolResponse,
} from 'lib/swapper/swappers/ThorchainSwapper/types'

export const btcThornodePool: ThornodePoolResponse = {
  LP_units: '536055974608843',
  asset: 'BTC.BTC',
  balance_asset: '91027798705',
  balance_rune: '935827756491105',
  pending_inbound_asset: '0',
  pending_inbound_rune: '0',
  pool_units: '545894929144923',
  savers_depth: '41416604834',
  savers_units: '41128793233',
  synth_mint_paused: false,
  status: 'Available',
  synth_supply: '44718623180',
  synth_supply_remaining: '8963246519',
  synth_units: '142965023220851',
}

export const ethThornodePool: ThornodePoolResponse = {
  LP_units: '273709963437801',
  asset: 'ETH.ETH',
  balance_asset: '915018987646',
  balance_rune: '618746706022909',
  pending_inbound_asset: '0',
  pending_inbound_rune: '0',
  pool_units: '274245264962453',
  savers_depth: '167028916827',
  savers_units: '165530383978',
  status: 'Available',
  synth_mint_paused: false,
  synth_supply: '218601192670',
  synth_supply_remaining: '183106737474',
  synth_units: '36567637964216',
}

export const jinxThornodePool: ThornodePoolResponse = {
  LP_units: '10015457121887',
  asset: 'ETH.JINX-0XC770EEFAD204B5180DF6A14EE197D99D808EE52D',
  balance_asset: '166650912393467',
  balance_rune: '8838681437152',
  pending_inbound_asset: '0',
  pending_inbound_rune: '0',
  pool_units: '10568061707512',
  savers_depth: '0',
  savers_units: '0',
  status: 'Available',
  synth_mint_paused: false,
  synth_supply: '3126453386967',
  synth_supply_remaining: '161390775916374',
  synth_units: '50300400994',
}

export const usdcThornodePool: ThornodePoolResponse = {
  LP_units: '30018075345020',
  asset: 'ETH.USDC-0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48',
  balance_asset: '290355330190652994811',
  balance_rune: '100000000000000000000',
  pending_inbound_asset: '22020062300',
  pending_inbound_rune: '0',
  pool_units: '31954495292990',
  savers_depth: '0',
  savers_units: '0',
  status: 'Available',
  synth_mint_paused: false,
  synth_supply: '20420358430864',
  synth_supply_remaining: '102379864074658',
  synth_units: '1423205664974',
}

export const thornodePools: ThornodePoolResponse[] = [
  btcThornodePool,
  ethThornodePool,
  jinxThornodePool,
  usdcThornodePool,
]

export const mockInboundAddresses: InboundAddressResponse[] = [
  {
    chain: 'BCH',
    pub_key: 'thorpub1addwnpepqfyppkehky2hn2gy26y8jqyj9fz0rnvau2r7yueawzvc662w0x9s7n4ypra',
    address: 'qp5a6rn8zmamgmsyspqsl0p6ktk4hrheggdjdvntv0',
    halted: false,
    gas_rate: '3',
    gas_rate_units: 'satsperbyte',
    global_trading_paused: false,
    chain_trading_paused: false,
    chain_lp_actions_paused: false,
    outbound_fee: '9000',
    outbound_tx_size: '1500',
  },
  {
    chain: 'BNB',
    pub_key: 'thorpub1addwnpepqfyppkehky2hn2gy26y8jqyj9fz0rnvau2r7yueawzvc662w0x9s7n4ypra',
    address: 'bnb1d8wsuecklw6xupyqgy8mcw4ja4dca72z7nvqzw',
    halted: false,
    gas_rate: '11250',
    gas_rate_units: 'ubnb',
    global_trading_paused: false,
    chain_trading_paused: false,
    chain_lp_actions_paused: false,
    outbound_fee: '22500',
    outbound_tx_size: '1',
  },
  {
    chain: 'BTC',
    pub_key: 'thorpub1addwnpepqfyppkehky2hn2gy26y8jqyj9fz0rnvau2r7yueawzvc662w0x9s7n4ypra',
    address: 'bc1qd8wsuecklw6xupyqgy8mcw4ja4dca72z2dd88d',
    halted: false,
    gas_rate: '18',
    gas_rate_units: 'satsperbyte',
    global_trading_paused: false,
    chain_trading_paused: false,
    chain_lp_actions_paused: false,
    outbound_fee: '33000',
    outbound_tx_size: '1000',
  },
  {
    chain: 'DOGE',
    pub_key: 'thorpub1addwnpepqfyppkehky2hn2gy26y8jqyj9fz0rnvau2r7yueawzvc662w0x9s7n4ypra',
    address: 'DEnrJfAjC4KMsLsGtoTGSmYaFZLPunWw9q',
    halted: false,
    gas_rate: '550384',
    gas_rate_units: 'satsperbyte',
    global_trading_paused: false,
    chain_trading_paused: false,
    chain_lp_actions_paused: false,
    outbound_fee: '1500000000',
    outbound_tx_size: '1000',
  },
  {
    chain: 'ETH',
    pub_key: 'thorpub1addwnpepqfyppkehky2hn2gy26y8jqyj9fz0rnvau2r7yueawzvc662w0x9s7n4ypra',
    address: '0x78e4e10dcacb0a8261eb3d5e57ffb98ae8d4dff1',
    router: '0x3624525075b88B24ecc29CE226b0CEc1fFcB6976',
    halted: false,
    gas_rate: '280',
    gas_rate_units: 'gwei',
    global_trading_paused: false,
    chain_trading_paused: false,
    chain_lp_actions_paused: false,
    outbound_fee: '480000',
    outbound_tx_size: '80000',
  },
  {
    chain: 'LTC',
    pub_key: 'thorpub1addwnpepqfyppkehky2hn2gy26y8jqyj9fz0rnvau2r7yueawzvc662w0x9s7n4ypra',
    address: 'ltc1qd8wsuecklw6xupyqgy8mcw4ja4dca72zw3hrla',
    halted: false,
    gas_rate: '60',
    gas_rate_units: 'satsperbyte',
    global_trading_paused: false,
    chain_trading_paused: false,
    chain_lp_actions_paused: false,
    outbound_fee: '99750',
    outbound_tx_size: '250',
  },
  {
    address: 'cosmos1euskj33zyqcysvn252qvwkkurkd72gvnv30h4d',
    chain: 'GAIA',
    chain_lp_actions_paused: false,
    chain_trading_paused: false,
    gas_rate: '450000',
    gas_rate_units: 'uatom',
    global_trading_paused: false,
    halted: false,
    outbound_fee: '900000',
    outbound_tx_size: '1',
    pub_key: 'sthorpub1addwnpepqdn3p3y3ctnr4sqdr0wswmn665asezx3c5yxags7y5ctxs5j42q278pj7fc',
  },
  {
    address: '0x8d6ed3bcdafc38214af914b08bc47ce36802c87c',
    chain: 'AVAX',
    chain_lp_actions_paused: false,
    chain_trading_paused: false,
    gas_rate: '150',
    gas_rate_units: 'nAVAX',
    global_trading_paused: false,
    halted: false,
    outbound_fee: '2400000',
    outbound_tx_size: '80000',
    pub_key: 'sthorpub1addwnpepqdn3p3y3ctnr4sqdr0wswmn665asezx3c5yxags7y5ctxs5j42q278pj7fc',
    router: '0xd6a6c0b3bb4150a98a379811934e440989209db6',
  },
]
