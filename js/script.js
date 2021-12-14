$(".play").click(function() {
  let order = $("input").val();
  $(".userChoice").append("<p>" + order + "</p>");
  let list = Math.random();
  console.log(list);
  if (list < 0.33) $(".computerChoice").append("<p>" + "rock" + "</p>");
  else if (list < 0.66) $(".computerChoice").append("<p>" + "paper" + "</p>");
  else if (list > 0.66) $(".computerChoice").append("<p>" + "scissors" + "</p>");
  

  if ( order.toLowerCase() === "rock" ()&& list < 0.66) {$(".result").text("Computer Wins!");}
  
  else if ( order.toLowerCase() === "paper" && list < 0.66) {$(".result").text("Tie");}
  
  else if ( order.toLowerCase() === "scissors" && list < 0.66) {$(".result").text("Player Wins!");}
  
  else if ( order.toLowerCase() === "rock"&& list < 0.33) {$(".result").text("Tie");}

  
  else if ( order.toLowerCase()=== "paper"&& list < 0.33) {$(".result").text("Player Wins!");}
   
  
  else if ( order.toLowerCase()=== "scissors" && list < 0.33) {$(".result").text("Computer Wins!");}
   
  
  else if ( order.toLowerCase()=== "rock" && list > 0.66) {$(".result").text("Player Wins!");}
 
  
  else if ( order.toLowerCase()=== "paper"&& list > 0.66) {$(".result").text("Computer Wins!");}

  
  else if( order.toLowerCase()=== "scissors" && list > 0.66) {$(".result").text("Tie!");}
   
  
  else(
 $(".result").text("Please re-enter your choice")
)
});

//if (userChoice === "paper" && computerChoice === "rock") {
// user wins
//} else if (userChoice === "paper" && computerChoice === "scissors") {
// computer wins
//}//
