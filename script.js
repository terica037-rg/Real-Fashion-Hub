function paywithPaystack(amount, productName) {
    let handler = PaystackPop.setup({
    key: 'YOUR_PUBLIC_KEY_HERE',
    email: prompt("Enter your email for payment recipt"),
    amount: amount,
    currency: "GHS",
    ref: '' + Math.floor((Math.random()*1000000000)+1),
    callback: function(response){
        alert("Payment Successful!");
    },
    onClose: function() {
        alert("Payment cancelled");
    }
});
handler.openIframe();
}