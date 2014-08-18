//TIMER

function startCount() {
    timer = setInterval(count,1000);
}

function count() {
    var time_shown = $(".timer").text();
    var time_chunks = time_shown.split(":");
    var  mins, secs;
    mins=Number(time_chunks[0]);
    secs=Number(time_chunks[1]);
    secs++;
    if (secs==60){
        secs = 0;
        mins=mins + 1;
    }
    if(mins==2 && secs ==0) {
        alert('time is over');
    }
    $(".timer").text(plz(mins) + ":" + plz(secs));
}

function plz(digit) {
    var zpad = digit + '';
    if (digit < 10) {
        zpad = "0" + zpad;
    }
    return zpad;
}






