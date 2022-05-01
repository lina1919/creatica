//var json = require('../../assets/tips.json');
//var document.getElementById = require('jquery');
//console.log(json);

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('li a').forEach(link => {
    if (link.href.include(`${activePage}`)){
        link.classList.add('active');
    }
})

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var pm = document.getElementById('p_mins');
var ps = document.getElementById('p_secs');
// console.log("Minutes " + pm);
// console.log("Seconds " + ps);
var sm = document.getElementById('s_mins');
var ss = document.getElementById('s_secs');

var lm = document.getElementById('l_mins');
var ls = document.getElementById('l_secs');
 
var startTimer;
var cycles = 0;

var tips = [
    "Repeat a positive affirmation",
    "Practice mindful relationships",
    "Listen to people",
    "Pay attention to your surroundings",
    "Slow down",
    "Focus on the moment",
    "Focus on an object and pay attention to your breathing",
    "Close your eyes and focus on your breathing",
    "Focus on the body",
    "Go for a short nature walk",
    "Switch off your phone for 5 minutes and dedicate this time to yourself",
    "Practice mindful breathing",
    "Keep a daily journal",
    "Trust in yourself and your feelings",
    "Be receptive and open to what you are thinking, feeling or seeing, and accept it.",
    "Let it go, let it be."
]; 

// allTips = document.getElementById('tip-id');
// allTips.innerHTML = "Hello World";
//document.getElementById("tip-id").innerHTML = "Hello World!";
//$('#tip-id').text('Hello World');

start.addEventListener('click', function () {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } 
    else {
        alert("Timer is already running");
    }
})

stop.addEventListener('click', function () {
    stopInterval()
    startTimer = undefined;
})

// set all timers to default values
reset.addEventListener('click', function(){
    pm.innerText = 25;
    ps.innerText = "00";
    sm.innerText = 5;
    ss.innerText = "00";
    lm.innerText = 15;
    ls.innerText = "00";
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer() {
    // console.log("Minutes " + pm);
    // console.log("Seconds " + ps);
    //Pomodoro Timer Countdown
    if (ps.innerText != 0) {    // if seconds from the pomodoro timer is not 0
        ps.innerText -= 1;      // decrease by 1 second
    } 
    else if (pm.innerText != 0 && ps.innerText == 0) { // minutes is not 0
        ps.innerText = 59;
        pm.innerText -= 1;
    }

    //Short Break Timer Countdown
    if (pm.innerText === "0" && ps.innerText === "0") {

        if (sm.innerText === "4" && ss.innerText === "59"){

        //console.log('Hello');
        var randomTip = tips[Math.floor(Math.random() * tips.length)];
        alert(randomTip);
        }

        if (ss.innerText != 0) {
            ss.innerText -= 1;
        } 
        else if (sm.innerText != 0 && ss.innerText == 0) {
            ss.innerText = 59;
            sm.innerText -= 1;
            cycles += 1;
        }
    }
    
    //console.log(cycles);
    if (cycles == 4 && ps.innerText === "0" && pm.innerText === "0" && ss.innerText === "0" 
        && sm.innerText === "0" /*&& lm.innerText != 0*/) {
        //console.log('Hello');
        if (ls.innerText != 0) {
            ls.innerText -= 1;
        }
        else if (lm.innerText != 0 && ls.innerText == 0) {
            ls.innerText = 59;
            lm.innerText -= 1;
        }

        else if (lm.innerText === "0" && ls.innerText === "0") {
            cycles = 0;
            pm.innerText = 25;
            ps.innerText = "00";
            sm.innerText = 5;
            ss.innerText = "00";
            lm.innerText = 15;
            ls.innerText = "00";
        }
    
        /*
        pm.innerText = 01;
        ps.innerText = "00";
        sm.innerText = 01;
        ss.innerText = "00";
        lm.innerText = 01;
        ls.innerText = "00";
        */
    }

    //reset timer after pomodoro and short break 
    if (ps.innerText == 0 && pm.innerText == 0 && ss.innerText == 0 && sm.innerText == 0 && 
        lm.innerText != 0 && cycles != 4) {
        
        pm.innerText = 25;
        ps.innerText = "00";
        
        sm.innerText = 5;
        ss.innerText = "00";

        
        lm.innerText = 15;
        ls.innerText = "00";

    }
}

//Stop Timer Function
function stopInterval() {
    clearInterval(startTimer);
}


