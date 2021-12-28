const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    Account,
   } = require("@solana/web3.js");

   const getWalletBalance = async () => {
    try {
        
        
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const myWallet = Keypair.fromSecretKey(secretKey);
        const walletBalance = await connection.getBalance(
         new PublicKey(myWallet.publicKey)
);
console.log(`=> For wallet address ${publicKey}`);
console.log(`   Wallet balance: ${parseInt(walletBalance)/LAMPORTS_PER_SOL}SOL`);   

    } catch (err) {
        console.log(err);
    }
};

const airDropSOl = async =>{

    try{
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const walletKeyPair = Keypair.fromSecretKey(secretKey);
        console.log(`-- Airdropping 2 SOL --`)
        const fromAirDropSignature = connection.requestAirdrop(
          new PublicKey(walletKeyPair.publicKey),
          2 * LAMPORTS_PER_SOL
       
     
        );
        connection.confirmTransaction(fromAirDropSignature);

    }
    catch(err){console.log(err);
    }
};   

const driverFunction = async () => {
    await getWalletBalance();
    await airDropSOl();
    await getWalletBalance();

}

driverFunction();



const newPair = new Keypair();
console.log(newPair);
   const publicKey = new PublicKey(newPair._keypair.publicKey).toString();
   const secretKey = newPair._keypair.secretKey
   
