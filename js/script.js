function updateClock(){

const now = new Date();

const sec = now.getSeconds() * 6;
const min = now.getMinutes() * 6;
const hr = now.getHours() * 30 + now.getMinutes()/2;

document.getElementById("second").style.transform =
`translate(-50%, -100%) rotate(${sec}deg)`;

document.getElementById("minute").style.transform =
`translate(-50%, -100%) rotate(${min}deg)`;

document.getElementById("hour").style.transform =
`translate(-50%, -100%) rotate(${hr}deg)`;

}

setInterval(updateClock,1000);
updateClock();
