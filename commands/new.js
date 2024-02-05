const fs = require('fs');
const web3 = require('@solana/web3.js');

const connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

async function newWallet() {
    try{
        const wallet = web3.Keypair.generate();

        const balance = await connection.getBalance(wallet.publicKey);
    
        const walletInfo = {
            privateKey: wallet.secretKey.toString(),
            publicKey: wallet.publicKey.toString(),
            balance: balance
        };
    
        fs.writeFileSync('wallet.json', JSON.stringify(walletInfo, null, 2));
        console.log('New wallet created:', walletInfo.publicKey, ', ', balance / 10**9 + ' SOL');
    }
    catch (error) {
        console.error('Error:', error);
    }

}

module.exports = newWallet;
