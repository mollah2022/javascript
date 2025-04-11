
 
 const offerEnds = " 5 nov 2025";
 
 function countdown () {
       const offerDate = new Date(offerEnds);
       const currentDate = new Date();
       
       const totalSeconds = ( offerDate - currentDate ) / 1000;

       const Days = Math.floor( totalSeconds / (24*60*60));
       const Hours = Math.floor( totalSeconds % (3600*24) / 3600 );
       const Minutes = Math.floor( totalSeconds % 3600 / 60 );
       const Second  = Math.floor( totalSeconds % 60 );

       document.getElementById("days").innerText = formatTime(Days);
       document.getElementById("hours").innerText = formatTime(Hours);
       document.getElementById("minutes").innerText = formatTime(Minutes);
       document.getElementById("second").innerText = formatTime(Second);
}

function formatTime(time){
       return time < 10 ? (`0${time}`) : time
}


countdown()
setInterval(countdown,1000)