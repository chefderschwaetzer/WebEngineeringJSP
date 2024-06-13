<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Online Casino</title>
    <link href="./styles.css">
</head>
<body>
    <h1>Willkommen im Online Casino</h1>
    <p>Wähle ein Spiel, um zu beginnen:</p>
    <div class="container">
        <div class="game" onclick="window.location.href='./slotMachine/slotmachine.jsp'">
            <img src="../images/icons/slotmachine.jpg" alt="Spiel 1">
            <p>Slot Machine</p>
        </div>
        <div class="game" onclick="window.location.href='./blackJack/blackjack.jsp'">
            <img src="../images/icons/blackjack.jpg" alt="Spiel 2">
            <p>Black Jack</p>
        </div>
        <div class="game" onclick="window.location.href='./roulette/minispiel3.jsp'">
            <img src="images/icons/roulette.jpg" alt="Spiel 3">
            <p>Roulette</p>
        </div>
        <div class="game" onclick="window.location.href='./spinningWheel/minispiel4.jsp'">
            <img src="images/icons/spinningwheel.jpg" alt="Spiel 4">
            <p>Spinning Wheel</p>
        </div>
    </div>
</body>
</html>