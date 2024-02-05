# Advanced Solana Bootcamp - Week 1 Assignment: Solana Wallet Operations

### Features

1. **Create a New Solana Wallet:** Creates a new wallet on the Solana devnet network and saves the information to the wallet.json file.
    ```bash
    node wallet.js new
    ```

2. **Airdrop SOL to Wallet:** Drops an airdrop of SOL to the wallet in wallet.json in the amount of ```amount```.
    ```bash
    node wallet.js airdrop <amount>
    ```

3. **Check Wallet Balance:** Displays the balance of the wallet in the wallet.json file.
    ```bash
    node wallet.js balance
    ```

4. **Transfer SOL to Another Wallet:** Transfers the specified amount of SOL from the wallet in the ```wallet.json``` file to the ```otherPublicKey``` wallet.
    ```bash
    node wallet.js transfer <otherPublicKey> <amount>
    ```

5. **Get Block Height:** Displays the current block height of the Solana devnet network.
    ```bash
    node wallet.js block-height
    ```