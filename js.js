var clicks = 0;
var nolif = 0;
var per = 0;
function Click(number){
	per = nolif * 1
    clicks = clicks + number;
	document.getElementById("Click").innerHTML = clicks;
};
function nolife(){
    var Cost = Math.floor(10 * Math.pow(1.1,nolif));
    if(clicks >= Cost){
        nolif = nolif + 1;
    	clicks = clicks - Cost;
        document.getElementById('nolife').innerHTML = nolif;
        document.getElementById('Click').innerHTML = clicks;
    };
    var koszt = Math.floor(10 * Math.pow(1.1,nolif));
    document.getElementById('koszt').innerHTML = koszt;
};
