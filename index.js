// portfolio-snapshot — dump all chain balances to CSV.
const fs = require("fs");
const { getBalances } = require("./balance");

const WALLETS = (process.env.WALLETS || "0xd8dA6BF26964aF9D7eEd9e03e53415D37aA96045").split(",").map(s=>s.trim());

(async () => {
  const rows = [["wallet","chain","symbol","balance","timestamp"]];
  for (const w of WALLETS) {
    const b = await getBalances(w);
    for (const [chain, info] of Object.entries(b)) {
      if (!info.error) rows.push([w, chain, info.symbol, info.balance, new Date().toISOString()]);
    }
  }
  const csv = rows.map(r => r.join(",")).join("\n");
  fs.writeFileSync("portfolio.csv", csv);
  console.log(`wrote portfolio.csv (${rows.length - 1} rows)`);
})();
