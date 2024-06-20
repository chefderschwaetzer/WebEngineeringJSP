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
    <button class="button" onclick="window.location.href='../index.jsp'" id="back">Back</button>
    <div class="title" id="status"><p></p></div>
    <div class="slots">
        <div id="slot1" class="a1"></div>
        <div id="slot2" class="a1"></div>
        <div id="slot3" class="a1"></div>
    </div>
    <button type="submit" class="button" onclick="return gamble()" style="vertical-align:middle"><span>SPIN</span></button>
    <button type="reset" class="button" onclick="resetBet()" style="vertical-align:middle"><span>Reset Bet</span></button>
    <div>
        <input type="image" src="../images/imgCoin/chip10.webp" onclick="addBet(10)" class="pokerchip" alt="10 poker chip" width="150" height="auto">
        <input type="image" src="../images/imgCoin/chip25.webp" onclick="addBet(25)" class="pokerchip" alt="25 poker chip" width="150" height="auto">
        <input type="image" src="../images/imgCoin/chip50.webp" onclick="addBet(50)" class="pokerchip" alt="50 poker chip" width="150" height="auto">
        <input type="image" src="../images/imgCoin/chip100.webp" onclick="addBet(100)" class="pokerchip" alt="100 poker chip" width="150" height="auto">
    </div>
    <div class="status">
        <table>
            <tr>
                <td id="message1">Money: </td>
                <td id="message2">Now Betting: </td>
            </tr>
        </table>
    </div>
</main>

<script src="./script.js"></script>
</body>
</html>