let playerScore = 0;
let computerScore = 0;




$(".play").click(function() {
  let order = $("input").val();
  $(".userChoice").prepend("<p>" + order + "</p>");
  let list = Math.random();
  console.log(list);
 
  
  if (list < 0.33) $(".computerChoice").prepend("<p>" + "rock" + "</p>");
  
  else if (list < 0.66) $(".computerChoice").prepend("<p>" + "paper" + "</p>");
  
  else if (list > 0.66) $(".computerChoice").prepend("<p>" + "scissors" + "</p>");
  

     if ( order.toLowerCase() === "rock" && list < 0.33) {tie();}

  else if ( order.toLowerCase()=== "paper" && list < 0.33) {playerW();}
   
  else if ( order.toLowerCase()=== "scissors" && list < 0.33) {computerW();}
  
 else if ( order.toLowerCase() === "rock" && list < 0.66) {computerW();}
  
  else if ( order.toLowerCase() === "paper" && list < 0.66) {tie();}
  
  else if ( order.toLowerCase() === "scissors" && list < 0.66) {playerW();}
  
   
  else if ( order.toLowerCase()=== "rock" && list > 0.66) {playerW();}
 
  else if ( order.toLowerCase()=== "paper"&& list > 0.66) {computerW();}

  else if( order.toLowerCase()=== "scissors" && list > 0.66) {tie();}
   
  else(
 $(".result").text("Please re-enter your choice")
  )
scoreboard();  
});
function computerW(){
  $(".result").text("Computer Wins!");
  computerScore +=1;

}
function playerW(){
  $(".result").text("Player Wins!");
  playerScore +=1;
}
function tie(){
  $(".result").text("Tie");
}

function scoreboard(){
  $(".scoreBoardDisplay").text(`${playerScore}`);
   $(".scoreBoardDisplayTwo").text(`${computerScore}`);
}


scoreboard()