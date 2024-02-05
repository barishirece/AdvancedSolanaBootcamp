const fs = require('fs');
const web3 = require('@solana/web3.js');

async function balance() {
  const walletData = fs.readFileSync("./wallet.json", 'utf-8');
  const wallet = JSON.parse(walletData);
  const publicKey = new web3.PublicKey(wallet.publicKey);

  const connection = new web3.Connection('https://api.devnet.solana.com');
  const balance = await connection.getBalance(publicKey);

  console.log("Balance:", balance / 10**9);

  wallet.balance = balance/10**9;
  fs.writeFileSync("./wallet.json", JSON.stringify(wallet, null, 2));

  return balance;
}

module.exports = balance;
