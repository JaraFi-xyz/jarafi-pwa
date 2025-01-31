import { celo, mainnet } from "viem/chains";
export const cUsd = {
  ...celo,
  id: 1,
  name: "cUSD",
  decimals: 18,
  nativeCurrency: { symbol: "cUSD" },
  network: { name: "Celo" },
  icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/7236.png",
  address: "0x765de816845861e75a25fca122bb6898b8b1282a",
};

export const cEUR = {
  ...celo,
  id: 2,
  name: "cEUR",
  decimals: 18,
  nativeCurrency: { symbol: "cEUR" },
  network: { name: "Celo" },
  icon: "https://static.coinpaprika.com/coin/ceur-celo-euro/logo.png?rev=10657677",
  address: "0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73",
};

export const cREAL = {
  ...celo,
  id: 3,
  name: "cREAL",
  decimals: 18,
  nativeCurrency: { symbol: "cREAL" },
  network: { name: "Celo" },
  icon: "https://static.coinpaprika.com/coin/creal-celo-brazilian-real/logo.png?rev=",
  address: "0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787",
};

export const celoToken = {
  ...celo,
  id: 4,
  name: "Celo",
  decimals: 18,
  nativeCurrency: {
    symbol: "CELO",
  },
  icon: "https://cryptologos.cc/logos/celo-celo-logo.png?v=040",
  address: "0x471EcE3750Da237f93B8E339c536989b8978a438",
};

export const commons = {
  ...celo,
  id: 5,
  name: "Commons",
  decimals: 18,
  nativeCurrency: { symbol: "$COMMONS" },
  network: { name: "Celo" },
  icon: "https://www.commonsprotocol.xyz/_next/image?url=%2Fcommons-logo.jpg&w=128&q=75",
  address: "0x7b97031b6297bc8e030B07Bd84Ce92FEa1B00c3e",
}