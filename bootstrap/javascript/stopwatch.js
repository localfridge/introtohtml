window.onload=function(){
var interval ;
var milliseconds=document.getElementById("milliseconds");
var seconds = document.getElementById("seconds");
var buttonstop = document.getElementById("button-stop");
var buttonstart = document.getElementById("button-start");
var buttonreset = document.getElementById("button-reset");
var appendmilliseconds;
var apendseconds;

buttonstart.onclick=function(){
    clearInterval(interval);
    interval=setinterval(starttimer, 10)
}

buttonstop.onclick = function () {
    clearInterval(interval);
}

buttonreset.onclick = function () {
    clearInterval(interval);
    milliseconds="00";
    seconds="00";
    appendmilliseconds.html=milliseconds;
    apendseconds.html=seconds;
}

function starttimer(){
    milliseconds++;
if (milliseconds<=9){
    appendmilliseconds.html ="0"+milliseconds;
}

if(milliseconds>9){
   appendmilliseconds.html=milliseconds;
}

if(milliseconds>99){
seconds++;

    apendseconds="0"+seconds;
    appendmilliseconds="0";
    appendmilliseconds="0"+milliseconds;
}

if(seconds>9){
   apendseconds.html=seconds; 
}






}
}