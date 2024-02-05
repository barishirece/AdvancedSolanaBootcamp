const fs = require('fs');
const web3 = require('@solana/web3.js');

async function transfer(recipientKey, amount) {
  try {
    let connection = new web3.Connection(web3.clusterApiUrl("devnet"));
    const lamports = amount * web3.LAMPORTS_PER_SOL;
    const wallet = JSON.parse(fs.readFileSync("./wallet.json", 'utf-8'));

    const sender = new web3.PublicKey(wallet.publicKey);
    const receiver = new web3.PublicKey(recipientKey);

    const transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
          fromPubKey: sender,
          toPubKey: receiver,
          lamports: lamports,
      }),
      );
      
      web3.sendAndConfirmTransaction(connection, transaction, [wallet]);
      
      console.log(`Transfer completed. ${amount} SOL sent to ${recipientKey}`);
  } catch (err) {
    console.error(err);
  }
}
module.exports = transfer;
