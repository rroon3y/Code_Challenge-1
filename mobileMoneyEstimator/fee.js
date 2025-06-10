function estimateTransactionFee() {
    
    const feePercentage = 0.015;
    const minFee = 10; 
    const maxFee = 70; 
    
    
    let amountToSend = prompt("Unatuma Ngapi? (KES)");
    amountToSend = Number(amountToSend);
    
    
    let transactionFee = amountToSend * feePercentage;
    
    
    if (transactionFee < minFee) {
        transactionFee = minFee;
    } else if (transactionFee > maxFee) {
        transactionFee = maxFee;
    }
    

    let totalDebit = amountToSend + transactionFee;
    
    
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalDebit}`);
    console.log("Send Money Securely!");
}


estimateTransactionFee();