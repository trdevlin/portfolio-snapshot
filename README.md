# portfolio-snapshot

One command, all your wallets, one CSV. For people who track crypto in
spreadsheets.

## Usage

```bash
npm install
WALLETS=0xAddr1,0xAddr2 npm start
```

Output (`portfolio.csv`):

```
wallet,chain,symbol,balance,timestamp
0xd8dA...,eth,ETH,4.294,2026-09-04T...
0xd8dA...,polygon,POL,592.719,...
```

Balances via [wallet-watcher](https://www.npmjs.com/package/wallet-watcher) —
public RPCs across Ethereum, Base, Polygon, Arbitrum, Optimism (+ BTC), no
API keys, no signup.

## Why

Spreadsheet people exist. Most portfolio trackers want your exchange API keys
or a signup; this one reads balances from public endpoints and writes a file.
Schedule it with cron for daily snapshots.
