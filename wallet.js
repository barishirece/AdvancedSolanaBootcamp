const { Command } = require('commander');
const newWallet = require('./commands/new');
const airdrop = require('./commands/airdrop');
const balance = require('./commands/balance'); 
const transfer = require('./commands/transfer'); 
const blockHeight = require('./commands/blockHeight'); 

const program = new Command();

program
  .version('1.0.0')

program
  .command('new')
  .action(() => {
    newWallet();
  });

program
  .command('airdrop <amount>')
  .action((amount) => {
    airdrop(amount);
  });

program
  .command('balance')
  .action(() => {
    balance(); 
  });

program
  .command('transfer <recipientKey> <amount>')
  .action((recipientKey, amount) => {
    transfer(recipientKey, amount);
  });

program
  .command('block-height')
  .action(() => {
    blockHeight(); 
  });
  
program.parse(process.argv);