
var buttonColours=['red', 'blue', 'green', 'yellow'];
var gamePattern=[];


function nextSequence(){
  
  var randomNumber =Math.random();
  randomNumber=Math.floor(randomNumber*buttonColours.length);
  console.log(randomNumber);
  var randomChosenColour = buttonColours
  [randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
  $(".btn").click(function(){
    var audio=new Audio("sounds/"+randomChosenColour+".mp3");
    audio.play();
  });
  
}




nextSequence();