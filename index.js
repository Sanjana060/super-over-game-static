let strikeButton = document.getElementById("strike");
let resetButton = document.getElementById("reset");

let scoreTeam1 = document.getElementById("scoreTeam1");
let wicketTeam1 = document.getElementById("wickets-team1");

let scoreTeam2 = document.getElementById("scoreTeam2");
let wicketTeam2 = document.getElementById("wickets-team2");

let team1Score = 0;
let team2Score = 0;
let team1Wickets = 0;
let team2Wickets = 0;

let turn = 1;
let team1Ball=0;
let team2Ball=0;

let possibleOutcomes = [0,1,2,3,4,6,"W"];

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");


function updateScore(){
  scoreTeam1.textContent = team1Score;
  wicketTeam1.textContent =  team1Wickets
  scoreTeam2.textContent = team2Score;
  wicketTeam2.textContent =  team2Wickets
}
function gameOver(){
  gameOverAudio.play()
  if(team1Score>team2Score) alert("Team one wins");
  if(team2Score>team1Score) alert("Team two wins");
  if(team1Score==team2Score) alert("It's a Draw");

}
function resetGame(){

  window.location.reload()
}


  resetButton.addEventListener("click",function(){
    resetGame()
  })

function strikeGame(){

  strikeAudio.play()
  let randomElement = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
  
  if(turn==1){
    team1Ball++;
    document.querySelector(`#team1-superover divnth-child(${team1Ball})`).textContent =  randomElement

    if(team1Ball==6 || team1Wickets==2){
      turn =2 ;

    }
    if(randomElement=="W"){
    team1Wickets++;
   }
   else{
    team1Score+=randomElement;
  }
}

if(turn==2){
  team2Ball++;
  document.querySelector(`#team1-superover divnth-child(${team2Ball})`).textContent =  randomElement

  if(team2Ball==6 || team2Wickets==2 || team2Score>team1Score){
    turn =3 ;
    gameOver();

  }
  if(randomElement=="W"){
  team2Wickets++;
 }
 else{
  team2Score+=randomElement;
}
}
updateScore();
}
