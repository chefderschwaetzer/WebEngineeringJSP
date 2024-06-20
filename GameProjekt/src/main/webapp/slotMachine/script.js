var action = false;
let status = document.getElementById("status");
var x = localStorage.getItem("coins");
var y = localStorage.getItem("bet");
document.getElementById("message2").innerHTML = "Now Betting: " + y + " Coins";
document.getElementById("message1").innerHTML = "Money: " + x + " Coins";

// Wette hinzufügen
function addBet(amount) {
	y = amount;
	var bet = localStorage.getItem("bet");
	localStorage.setItem("bet", (parseInt(bet) + amount));
    fetch("/GameProjekt/slotMachine/CoinServlet", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "action=addBet&amount=" + amount + "&totalMoney=" + x
    })
    .then(response => response.json())
    .then(data => {
        y = data.currentBet;
        localStorage.setItem("coins", x-y);
        document.getElementById("message2").innerHTML = "Now Betting: " + y + " Coins";
        document.getElementById("message1").innerHTML = "Money: " + localStorage.getItem("coins") + " Coins";
    })
    .catch(error => console.error('Error:', error));
}

function resetBet() {
    fetch("/GameProjekt/slotMachine/CoinServlet", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "action=resetBet"
    })
    .then(response => response.json())
    .then(data => {
        y = data.currentBet;
        localStorage.setItem("coins", (parseInt(localStorage.getItem("coins")) + parseInt(localStorage.getItem("bet"))));
        localStorage.setItem("bet", parseInt(y))
        document.getElementById("message2").innerHTML = "Now Betting: " + y + " Coins";
        document.getElementById("message1").innerHTML = "Money: " + localStorage.getItem("coins") + " Coins";
    })
    .catch(error => console.error('Error:', error));
}

// Start
function gamble() {
	console.log(localStorage.getItem("coins"));
	console.log(localStorage.getItem("bet"));
    if (action) {
        return null;
    }
    action = true;

    fetch("/GameProjekt/slotMachine/CoinServlet", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "action=gamble&result=" + y
    })
    .then(response => response.json())
    .then(data => {
        x = data.totalMoney;
        document.getElementById("message1").innerHTML = "Money: " + x + " Coins";
        localStorage.setItem("totalMoney", x)
        action = false;
    })
    .catch(error => console.error('Error:', error));
}


function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}
