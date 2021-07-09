function enter(){
first=document.getElementById("player1").value;
second=document.getElementById("player2").value;
localStorage.setItem("player1login",first);
localStorage.setItem("player2login",second);
window.location="index1.html";
}
