var SPC = 0;
var SPS = 0;
//Points changer
function points()
{
    document.getElementById(click).innerHtml +SPC;
};
var scoreCounter = document.getElementById(click).valve;
points(scoreCounter);
//ScorePerSec
setTimeout(function(){
    if(SPC > 0){
        points(SPC);
    }
},1000);
//Bonuses
if(upgrA == 1){
    SPC + 1;
    upgr = 0;
};
if(upgrB == 1){
    SPS + 0,1;
    upgrB = 0;
};
