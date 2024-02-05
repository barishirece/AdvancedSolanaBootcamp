const web3 = require('@solana/web3.js');

async function blockHeight() {
  try {
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

    console.log('Slot:', await connection.getSlot());
    console.log('Block Height:', await connection.getBlockHeight());

  } catch (error) {
    console.error('Error:', error.message);
  }
}

module.exports = blockHeight;