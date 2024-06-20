package beans;

import java.util.ArrayList;
import java.util.List;

public class GameStats {
    private int totalMoney;
    private int currentBet;
    private List<Integer> results;

    public GameStats() {
        this.currentBet = 0;
        this.results = new ArrayList<>();
    }

    public int getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(int totalMoney) {
        this.totalMoney = totalMoney;
    }

    public int getCurrentBet() {
        return currentBet;
    }

    public void setCurrentBet(int currentBet) {
        this.currentBet = currentBet;
    }

    public List<Integer> getResults() {
        return results;
    }

    public void addResult(int result) {
        results.add(result);
    }
    
    public String toJson() {
        StringBuilder json = new StringBuilder();
        json.append("{");
        json.append("\"totalMoney\":").append(totalMoney).append(",");
        json.append("\"currentBet\":").append(currentBet).append(",");
        json.append("\"results\":[");
        for (int i = 0; i < results.size(); i++) {
            json.append(results.get(i));
            if (i < results.size() - 1) {
                json.append(",");
            }
        }
        json.append("]}");
        return json.toString();
    }
}
