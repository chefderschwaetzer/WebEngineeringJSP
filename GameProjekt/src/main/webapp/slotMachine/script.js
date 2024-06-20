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
    fetch("/GameProjekt/slotMachine/CoinServlet", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "action=addBet&amount=" + amount + "&totalMoney=" + localStorage.getItem("coins") + "&currentBet=" + bet
    })
    .then(response => response.json())
    .then(data => {
		console.log(data);
        y = data.currentBet;
        localStorage.setItem("bet", y);
        localStorage.setItem("coins", data.totalMoney)
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
        body: "action=resetBet&currentBet=" + localStorage.getItem("bet") + "&totalMoney=" + localStorage.getItem("coins")
    })
    .then(response => response.json())
    .then(data => {
        y = data.currentBet;
        localStorage.setItem("coins", data.totalMoney);
        localStorage.setItem("bet", parseInt(y))
        document.getElementById("message2").innerHTML = "Now Betting: " + y + " Coins";
        document.getElementById("message1").innerHTML = "Money: " + localStorage.getItem("coins") + " Coins";
    })
    .catch(error => console.error('Error:', error));
}

// Start
function gamble() {
	var pattern;
    if (action) {
        return null;
    }
    action = true;

	if(y > x){
		document.getElementById("status").innerHTML = "Not enough funds."
		y = 0;
		document.getElementById("message2").innerHTML =  "Now Betting: €" + y
		action = false;
	} else {
		var numChanges = randomInt(1,4)*7
		var numberSlot1 = numChanges+randomInt(1,7)
		var numberSlot2 = numChanges+2*7+randomInt(1,7)
		var numberSlot3 = numChanges+4*7+randomInt(1,7)

		var i1 = 0;
		var i2 = 0;
		var i3 = 0;
		status.innerHTML = "SPINNING"
		slot1 = setInterval(spin1, 50);
		slot2 = setInterval(spin2, 50);
		slot3 = setInterval(spin3, 50);
	}
	
	    //Animationen
	function spin1(){
		i1++;
		if (i1>=numberSlot1){
			clearInterval(slot1);
			return null;
		}
		slotTile = document.getElementById("slot1");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin2(){
		i2++;
		if (i2>=numberSlot2){
			
			clearInterval(slot2);
			return null;
		}
		slotTile = document.getElementById("slot2");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin3(){
		i3++;
		if (i3>=numberSlot3){
			
			clearInterval(slot3);
			pattern = testWin();
			fetch("/GameProjekt/slotMachine/CoinServlet", {
        		method: "POST",
        		headers: {
            	"Content-Type": "application/x-www-form-urlencoded"
        	},
        		body: "action=gamble&result=" + y + "&pattern=" + pattern
    		})
    		.then(response => response.json())
    		.then(data => {
        		x = data.totalMoney;
        		document.getElementById("message1").innerHTML = "Money: " + x + " Coins";
        		localStorage.setItem("totalMoney", x + parseInt(localStorage.getItem("bet")))
        		action = false;
    		})
    		.catch(error => console.error('Error:', error));
			return null;
		}
		slotTile = document.getElementById("slot3");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}

		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
}

function testWin(){
	var result = 0;
	var slot1 = document.getElementById("slot1").className
	var slot2 = document.getElementById("slot2").className
	var slot3 = document.getElementById("slot3").className

	if (((slot1 == slot2 == slot3) == "a1")){
		status.innerHTML = "Checkpot!";
		var result = 1;
		
	} else if(slot1 == slot2 == slot3){
        status.innerHTML = "You won!";
		var result = 2;
    } else if((slot1 == slot2) || (slot2 == slot3) || (slot1 == slot3)){
        status.innerHTML = "You won!";
		var result = 3; 
    } else {
		status.innerHTML = "YOU LOSE!"
		var result = 4;
	}
	return result;
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}
