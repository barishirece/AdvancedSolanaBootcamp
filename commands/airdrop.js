const fs = require('fs');
const web3 = require('@solana/web3.js');

async function airdrop(airdropAmount) {
  const walletData = fs.readFileSync("./wallet.json", 'utf-8');
  const wallet = JSON.parse(walletData);
  const publicKey = new web3.PublicKey(wallet.publicKey);

  const connection = new web3.Connection('https://api.devnet.solana.com');

  try {
    const signature = await connection.requestAirdrop(publicKey, airdropAmount * 10**9);
    console.log(`Transaction completed. Sign: ${signature}`);
  } catch (error) {
    console.error('Hata:', error);
  }
}

module.exports = airdrop; 
