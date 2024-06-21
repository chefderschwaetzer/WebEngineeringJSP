if((localStorage.getItem("coins") == null) || (localStorage.getItem("bet") == null)){
	localStorage.setItem("coins", 1000);
	localStorage.setItem("bet", 0);
}