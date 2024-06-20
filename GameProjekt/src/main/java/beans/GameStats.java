package beans;

public class GameStats {
    private int currentBet;
    private int totalMoney;

    public GameStats() {
        this.currentBet = 0;
        this.totalMoney = 0;
    }

    public int addBett(int currentBet, int amount, int totalMoney) {
    	this.totalMoney = 0;
    	this.currentBet = 0;
        this.currentBet += currentBet + amount;
        this.totalMoney = totalMoney;
        return this.currentBet;
    }

    public int resetBet() {
        this.currentBet = 0;
        return this.currentBet;
    }

    public int resetTotal(int currentBet, int totalMoney) {
    	this.totalMoney = 0;
        this.totalMoney = totalMoney;
        return this.totalMoney;
    }

    public void addResult(int pattern, int currentBet, int totalMoney) {
    	this.totalMoney = 0;
    	var test = calcSlotMachineWin(pattern, currentBet);
    	if (test == 0) {
    		this.totalMoney = totalMoney - currentBet;
		} else {
        	this.totalMoney = totalMoney + test + currentBet;
		}
    }

    public int calcSlotMachineWin(int pattern, int currentBet) {
        int winAmount = 0;
        switch (pattern) {
            case 1:
                winAmount = 250;
                break;
            case 2:
                winAmount = 100;
                break;
            case 3:
                winAmount = 50;
                break;
            case 4:
                winAmount = 0;
                break;
        }
        return winAmount;
    }

    // Getters and Setters
    public int getCurrentBet() {
        return currentBet;
    }

    public void setCurrentBet(int currentBet) {
        this.currentBet = currentBet;
    }

    public int getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(int totalMoney) {
        this.totalMoney = totalMoney;
    }
    
    public String toJson() {
        StringBuilder json = new StringBuilder();
        json.append("{");
        json.append("\"totalMoney\":").append(totalMoney).append(",");
        json.append("\"currentBet\":").append(currentBet);
        json.append("}");
        return json.toString();
    }
}
