<!DOCTYPE html>
<head>
    <title>Slot Machine</title>
    <link rel="stylesheet" type="text/css" href="css/browser_reset.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<meta charset="UTF-8">
</head>
<html>
<body>
<main>
	<div class="title" id="status"><p></p></div>
	<div class="slots">
		<div id="slot1" class="a1"></div>
		<div id="slot2" class="a1"></div>
		<div id="slot3" class="a1"></div>
    </div>
	<button type="submit" value="Submit" class="button"  onclick="return gamble(y)" style="vertical-align:middle"><span>SPIN</span></button>
	<button type="reset" value="Reset" class="button" onclick="resetBet()" style="vertical-align:middle"><span>Reset Bet</span></button>
   
<div>
	<input type="image" src="../images/imgCoin/chip10.webp" onCLick="addbet(10)" class="pokerchip" alt="10 poker chip" width="150" height=auto>
	<input type="image" src="../images/imgCoin/chip25.webp" onCLick="addbet(25)" class="pokerchip" alt="25 poker chip" width="150" height=auto>
	<input type="image" src="../images/imgCoin/chip50.webp" onCLick="addbet(50)" class="pokerchip" alt="50 poker chip" width="150" height=auto>
	<input type="image" src="../images/imgCoin/chip100.webp" onCLick="addbet(100)" class="pokerchip" alt="100 poker chip" width="150" height=auto id="chip100">
	
</div>

<div class="status">
<table>
	<tr>
		<td id="message1">Money: 1000 Coins</td>
		<td id="message2">Now Betting: 0 Coins</td>
    </tr>
	</table>
</div>
</main>

<script src="./script.js"></script>
</body>
</html>