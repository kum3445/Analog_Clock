const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
    console.log(date);
    let hr =date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hours: " + hr + " Minutes: " + min + " Seconds: " + sec );

    let hrPosition = hr*360/12 + (min*(360/60)/12);
    let minPosition = min*360/60 + (sec*(360/60)/60);
    let secPosition =sec*360/60;

function runTheClock(){
    hrPosition= hrPosition +3/360;
    minPosition= minPosition + 6/60;
    secPosition= secPosition +6;


    HOURHAND.style.transform = "rotate("+ hrPosition +"deg)";
    MINUTEHAND.style.transform = "rotate("+ minPosition +"deg)";
    SECONDHAND.style.transform = "rotate("+ secPosition +"deg)"; 
}



var interval = setInterval(runTheClock,1000);
var dc =document.getElementById("#aa")
function time(){
    var date = new Date();
    let hr =date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if(hr<=12){
        tt= "AM"
    } else{
        hr=hr-12
        tt="PM"
    }
    if(min<=9){
        min="0"+min
    }
    if (sec<=9){
        sec="0"+sec
    }
    dc.innerHTML=  "Time " + hr + ":" + min + ":" + sec + " " + tt ;
}
var interval2 = setInterval(time,1000);

