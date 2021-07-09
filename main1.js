x=localStorage.getItem("player1login");
y=localStorage.getItem("player2login");
p1score=0;
p2score=0;
function a(){
document.getElementById("player1_name").innerHTML=x+":";
document.getElementById("player2_name").innerHTML=y+":";
document.getElementById("player1score").innerHTML=p1score;
document.getElementById("player2score").innerHTML=p2score;
document.getElementById("questionturn").innerHTML="question turn-"+x;
document.getElementById("answerturn").innerHTML="answer turn-"+y;
}
function send(){
  a=document.getElementById("word").value;
  lower=a.toLowerCase();
  console.log("word in lower case is-",lower);
  firstdash=lower.charAt(1);
  console.log(firstdash);
  removedecimal=Math.floor(lower.length/2);
  seconddash=lower.charAt(removedecimal);
  console.log(seconddash);
  lengthminus=lower.length-1;
  thirddash=lower.charAt(lengthminus);
  console.log(thirddash);
  replacefirstdash=lower.replace(firstdash,"_");
  console.log(replacefirstdash);
  replaceseconddash=replacefirstdash.replace(seconddash,"_");
  console.log(replaceseconddash);
  replacethirddash=replaceseconddash.replace(thirddash,"_");
  console.log(replacethirddash); 
  question="<h4>Q."+replacethirddash+"</h4>";
  input="<br>Answer-<input id='box'>";
  btn="<br><br><button class='btn btn-info' onclick='add()'>Check</button>";
  v=question+input+btn;
  document.getElementById("output").innerHTML=v;
  document.getElementById("word").value="";
}
questionturn="player1";
answerturn="player2";
function add(){
  b=document.getElementById("box").value;
  c=b.toLowerCase();
  console.log(c);
  if(c==lower){
    if(answerturn="player1"){
      p1score=p1score+1;
      document.getElementById("player1score").innerHTML=p1score;
    }
    else{
      p2score=p2score+1;
      document.getElementById("player2score").innerHTML=p2score;
    }
  }
  if(questionturn=="player1"){
    questionturn="player2";
    document.getElementById("questionturn").innerHTML="questionturn:-"+y;
  }
else{
  questionturn="player1";
  document.getElementById("questionturn").innerHTML="questionturn:-"+x;
}
if(answerturn=="player1"){
  answerturn="player2";
  document.getElementById("answerturn").innerHTML="answerturn:-"+y;
}
else{
answerturn="player1";
document.getElementById("answerturn").innerHTML="answerturn:-"+x;
}
document.getElementById("output").innerHTML="";
}