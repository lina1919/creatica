var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var pm = document.getElementById('p_mins');
var ps = document.getElementById('p_secs');

var sm = document.getElementById('s_mins');
var ss = document.getElementById('s_secs');

var lm = document.getElementById('l_mins');
var ls = document.getElementById('l_secs');

var startTimer;
var cycles = 0;

start.addEventListener('click', function () {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

stop.addEventListener('click', function () {
    stopInterval()
    startTimer = undefined;
})

reset.addEventListener('click', function(){
    pm.innerText = 1;
    ps.innerText = "00";
    sm.innerText = 1;
    ss.innerText = "00";
    lm.innerText = 1;
    ls.innerText = "00";
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer() {
    //Pomodoro Timer Countdown
    if (ps.innerText != 0) {
        ps.innerText -= 1;
    } else if (pm.innerText != 0 && ps.innerText == 0) {
        ps.innerText = 59;
        pm.innerText -= 1;
    }

    //Short Break Timer Countdown
    if (pm.innerText == 0 && ps.innerText == 0) {
        if (ss.innerText != 0) {
            ss.innerText -= 1;
        } else if (sm.innerText != 0 && ss.innerText == 0) {
            ss.innerText = 59;
            sm.innerText -= 1;
            cycles += 1;
        }
    }

    if (cycles == 2 /*&& ps.innerText == 0 && pm.innerText == 0 && ss.innerText == 0 && sm.innerText == 0 && lm.innerText != 0*/) {
        if (ls.innerText != 0) {
            ls.innerText -= 1;
        }
        else if (lm.innerText != 0 && ls.innerText == 0) {
            ls.innerText = 59;
            lm.innerText -= 1;
        }

        cycles = 0;
        pm.innerText = 01;
        ps.innerText = "00";
        sm.innerText = 01;
        ss.innerText = "00";
        lm.innerText = 01;
        ls.innerText = "00";

    }

    //reset timer after pomodoro and short break 
    if (ps.innerText == 0 && pm.innerText == 0 && ss.innerText == 0 && sm.innerText == 0 && lm.innerText != 0 && cycles != 2) {
        pm.innerText = 01;
        ps.innerText = "00";

        sm.innerText = 01;
        ss.innerText = "00";
    }
}

//Stop Timer Function
function stopInterval() {
    clearInterval(startTimer);
}