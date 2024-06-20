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
            gameStats.setTotalMoney(totalMoney);
            if (totalMoney >= amount) {
                gameStats.setCurrentBet(gameStats.getCurrentBet() + amount);
            }
        } else if ("resetBet".equals(action)) {
            gameStats.setCurrentBet(0);
        } else if ("gamble".equals(action)) {
            int result = Integer.parseInt(request.getParameter("result"));
            gameStats.addResult(result);
            gameStats.setTotalMoney(gameStats.getTotalMoney() - result);
            if (gameStats.getTotalMoney() < 0) {
                gameStats.setTotalMoney(0);
            }
        }

        response.setContentType("application/json");
        response.getWriter().write(gameStats.toJson());
    }
}
