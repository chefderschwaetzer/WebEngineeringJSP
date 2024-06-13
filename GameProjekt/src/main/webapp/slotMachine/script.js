var action = false;
let status = document.getElementById("status")
var x = 1000;
var y = 0;

//Wette hinzufügen
function addbet(amount){

	if (y > x) {
		y = 0;
		document.getElementById("status").innerHTML = "Not enough funds."
	} else {
		if( amount == "10"){
			y = y + 10;
		}
		else if (amount == "25") { 
			y = y + 25;
		} else if (amount == "50"){
			y = y + 50;
		} else if (amount == "100"){
			y = y + 100;
		}
	}
		document.getElementById("message2").innerHTML = "Now Betting: €" + y
		return y
	}
function resetBet(){
	y = 0;
	document.getElementById("message2").innerHTML = "Now Betting: €" + y
	return y
}

//start
function gamble(y){
	if (action){return null;}
	action = true;

	if (y > x) {
		document.getElementById("status").innerHTML = "Not enough funds."
		y = 0;
		document.getElementById("message2").innerHTML =  "Now Betting: €" + y
		action = false;
		return y
	}else{
		var numChanges = randomInt(1,4)*7
		var numberSlot1 = 20+numChanges+randomInt(1,7)
		var numberSlot2 = 40+numChanges+2*7+randomInt(1,7)
		var numberSlot3 = 60+numChanges+4*7+randomInt(1,7)

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
			testWin();
			return null;
		}
		slotTile = document.getElementById("slot3");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}

		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
}

//Ermitteln des ergebnises
function testWin(){
	var slot1 = document.getElementById("slot1").className
	var slot2 = document.getElementById("slot2").className
	var slot3 = document.getElementById("slot3").className

	if (((slot1 == slot2 == slot3) == "a1")){
		status.innerHTML = "Checkpot!";
		var result = ~y + 1; //negative value
		
	} else if(slot1 == slot2 == slot3){
        status.innerHTML = "You won!";
		var result = ~y + (y/2); //negative value
    } else if((slot1 == slot2) || (slot2 == slot3) || (slot1 == slot3)){
        status.innerHTML = "You won!";
		var result = ~y + (y/4); 
    } else {
		status.innerHTML = "YOU LOSE!"
		var result = y; //positive value
	}
	x = x - result;
	if (x <= 0) { 
			x = 0;
	}
	document.getElementById("message1").innerHTML = "Money: $" + x	
	action = false;
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}