$(".play").click(function() {
  let order = $("input").val();
  $(".userChoice").append("<p>" + order + "</p>");
});

$(".play").click(function() {
  let list = Math.random();
  console.log(list);
  if (list < 0.33) $(".computerChoice").append("<p>" + "rock" + "</p>");
  else if (list < 0.66) $(".computerChoice").append("<p>" + "paper" + "</p>");
  else if (list > 0.66)
    $(".computerChoice").append("<p>" + "scissors" + "</p>");

  let order = $("input").val();
  let list = Math.random();

  if (order === "rock"&& list < 0.66) 
  {$(".result").text("user picked rock")}
  else if (order === "paper") {$(".result").text("user picked paper");
  } else if (list < 0.66) $(".result").text("Tie");
  else if (order === "scissors") {
  } else if (list < 0.66) $(".result").text("Player Wins!");
  else if (order === "rock") {
  } else if (list < 0.33) $(".result").text("Tie");
  else if (order === "paper") {
  } else if (list < 0.33) $(".result").text("Player Wins!");
  else if (order === "scissors") {
  } else if (list < 0.33) $(".result").text("Computer Wins!");
  else if (order === "rock") {
  } else if (list > 0.66) $(".result").text("Player Wins!");
  else if (order === "paper") {
  } else if (list > 0.66) $(".result").text("Computer Wins!");
  else if (order === "scissors") {
  } else if (list > 0.66) $(".result").text("Computer Wins!");
});

//if (userChoice === "paper" && computerChoice === "rock") {
// user wins
//} else if (userChoice === "paper" && computerChoice === "scissors") {
// computer wins
//}//
