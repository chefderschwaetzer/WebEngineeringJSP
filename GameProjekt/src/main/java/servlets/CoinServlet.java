package servlets;

import java.io.IOException;

import beans.GameStats;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/slotMachine/CoinServlet")
public class CoinServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        GameStats gameStats = (GameStats) request.getSession().getAttribute("gameStats");

        if (gameStats == null) {
            gameStats = new GameStats();
            request.getSession().setAttribute("gameStats", gameStats);
        }

        if ("addBet".equals(action)) {
            int amount = Integer.parseInt(request.getParameter("amount"));
            int totalMoney = Integer.parseInt(request.getParameter("totalMoney"));
            int currentBet = Integer.parseInt(request.getParameter("currentBet"));
            if (totalMoney >= amount + currentBet) {
            	gameStats.addBett(currentBet, amount, totalMoney);
            }
        } else if ("resetBet".equals(action)) {
            int currentBet = Integer.parseInt(request.getParameter("currentBet"));
            int totalMoney = Integer.parseInt(request.getParameter("totalMoney"));
            gameStats.resetTotal(currentBet, totalMoney);
            gameStats.resetBet();
        } else if ("gamble".equals(action)) {
            int pattern = Integer.parseInt(request.getParameter("pattern"));
            int currentBet = Integer.parseInt(request.getParameter("currentBet"));
            int totalMoney = Integer.parseInt(request.getParameter("totalMoney"));
            gameStats.addResult(pattern, currentBet, totalMoney);
        }

        response.setContentType("application/json");
        response.getWriter().write(gameStats.toJson());
    }
}
