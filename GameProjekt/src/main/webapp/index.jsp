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
            <img src="images/icons/slotmachine.jpg" alt="Spiel 1">
            <p>Spiel 1</p>
        </div>
        <div class="game" onclick="window.location.href='minispiel2.jsp'">
            <img src="images/game2.jpg" alt="Spiel 2">
            <p>Spiel 2</p>
        </div>
        <div class="game" onclick="window.location.href='minispiel3.jsp'">
            <img src="images/game3.jpg" alt="Spiel 3">
            <p>Spiel 3</p>
        </div>
        <div class="game" onclick="window.location.href='minispiel4.jsp'">
            <img src="images/game4.jpg" alt="Spiel 4">
            <p>Spiel 4</p>
        </div>
    </div>
</body>
</html>