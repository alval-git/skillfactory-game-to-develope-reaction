const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  $('.game-field').removeClass("miss");
  $('.game-field').removeClass("target").text(null);
  let divSelector = randomDivId();
  $(divSelector).addClass("target").text(hits+1);
  if (hits === 1){
    firstHitTime = getTimestamp();
  }
  if (hits === maxHits) {
    $("#button-start").toggleClass('d-none');
    endGame();
  }
  
}
console.log(firstHitTime);

function endGame() {
  $("#game-board").addClass("d-none");
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event){
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();    
  }
  else{
    $(event.target).addClass("miss")
  }
}
function init() {  
  $("#button-start").click(function(){
    round()
  });  
  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}
$(document).ready(init);
