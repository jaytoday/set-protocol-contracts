/**
 *
 * The keys are numerical network ids to avoid confusion between multiple contract
 * staging environments on the same Ethereum network (main-staging, main-production)
 *
 * 1 = main net
 * 3 = ropsten
 * 42 = kovan
 * 531 = Set's test-rpc (5 = S, 3 = E, 1 = T)
 *
 */

export default {
  WBTC: {
    1: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    42: '0x595f8DaB94b9c718cbf5c693cD539Fd00b286D3d',
  },
  WETH: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    42: '0x4C5E0CAbAA6B376D565cF2be865a03F43E361770',
  },
  DAI: {
    1: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
    42: '0xF091720Dea579d7Eec922d8B2A3A67ba522CCf6D',
  },
  ZERO_EX_EXCHANGE: {
    1: '0x4F833a24e1f95D70F028921e27040Ca56E09AB0b',
    42: '0x35dD2932454449b14Cee11A94d3674a936d5d7b2',
    50: '0x48BaCB9266a570d521063EF5dD96e61686DbE788',
  },
  ZERO_EX_PROXY: {
    1: '0x2240Dab907db71e64d3E0dbA4800c83B5C502d4E',
    42: '0xF1eC01d6236D3CD881a0bF0130eA25fe4234003E',
    50: '0x1dC4c1cEFEF38a777b15aA20260a54E584b16C48',
  },
  ZERO_EX_ZRX: {
    1: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
    42: '0x2002D3812F58e35F0EA1fFbf80A75a38c32175fA',
    50: '0x871DD7C2B4b25E1Aa18728e9D5f2Af4C4e431f5c',
  },
  KYBER_PROXY: {
    1: '0x818E6FECD516Ecc3849DAf6845e3EC868087B755',
    3: '0x818e6fecd516ecc3849daf6845e3ec868087b755',
    42: '0x7e6b8b9510D71BF8EF0f893902EbB9C865eEF4Df',
    50: '0x371b13d97f4bF77d724E78c16B7dC74099f40e84',
  },
  WBTC_MEDIANIZER: {
    1: '0x064409168198A7E9108036D072eF59F923dEDC9A',
    42: '0x02186378d8e723e11643b4cd520E31655be3B0E9',
  },
  WETH_MEDIANIZER: {
    1: '0x729D19f657BD0614b4985Cf1D82531c67569197B',
    42: '0x9Fe0D478D0E290d50EF8DFc08760C4ad9D2C7AE9',
  },
  INFURA_SUBDOMAIN: {
    1: 'https://mainnet.infura.io',
    42: 'https://kovan.infura.io',
  },
  HUMAN_FRIENDLY_NAMES: {
    1: 'main-net',
    42: 'kovan',
    50: 'test-rpc'
  }
};

