function updateClock(){

const now = new Date();

let sec = now.getSeconds() * 6;
let min = now.getMinutes() * 6;
let hr = now.getHours() * 30 + now.getMinutes()/2;

document.getElementById("second").style.transform =
`translateX(-50%) rotate(${sec}deg)`;

document.getElementById("minute").style.transform =
`translateX(-50%) rotate(${min}deg)`;

document.getElementById("hour").style.transform =
`translateX(-50%) rotate(${hr}deg)`;

}

/* gears move every second */
setInterval(()=>{
updateClock();

document.querySelectorAll(".gear").forEach(g=>{
    let r = (parseInt(g.dataset?.r || 0) + 6);
    g.dataset.r = r;
    g.style.transform = `rotate(${r}deg)`;
});

},1000);

updateClock();
