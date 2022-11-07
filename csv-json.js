//import a file from the file system
var fs = require('fs');
//import the csvtojson converter
var csv = require("csvtojson");

csv().fromFile("trans.csv").then((jsonObj)=>{
    //console.log(jsonObj);
    //write to a file
    //pick a random number between 1 and 3  
    const filtered = jsonObj.filter(obj => obj['id']);
    console.log(filtered)
    //limit the number of records in filtered array
    // pick a random between 1
    const statuses = ['pending', 'succeeded', 'failed', 'uncaptured', 'cancelled', 'refunded'];
    fs.writeFile("stripe_transactions.json", JSON.stringify(filtered.slice(0, 500).map(r => {
        const rand = Math.floor(Math.random() * 6);
        const amount = r.Amount.replace(',', '.');
        const created = new Date(r["Created (UTC)"]).toISOString();
        return {
            transactionId: r.id,
            amount: Number(amount).toFixed(2),
            currency: r.currency,
            fee: r.Fee,
            customer: r["purchaser_first_name (metadata)"] + " " + r["purchaser_last_name (metadata)"],
            email: r["Customer Email"],
            origin: r["payment_channel (metadata)"],
            created,
            status: statuses[rand].toUpperCase(),
            statusReason: `${statuses[rand]} because of reason`,
        }
    }),null, 2), (err)=>{
        if(err){
            console.log(err);
        }
    });
});
