var min = 0;
var sec = 0;
var msec = 0;
var interval;

var minutes = document.getElementById('min');
var seconds = document.getElementById('sec');
var miliSeconds = document.getElementById('msec');

var startBtn = document.getElementById('startBtn');
var lapButton = document.getElementById('lapbtn');

function timer() {
    msec++
    miliSeconds.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        seconds.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        minutes.innerHTML = min;
        sec = 0;

    } else if (min >= 60) {
        Pause()
    }
}

function start() {
    interval = setInterval(timer, 10);

    startBtn.disabled = true;
    lapButton.disabled = false;

}

function pause() {
    clearInterval(interval)
    startBtn.disabled = false;
    startBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i> ' + 'Resume'


}

function reset() {
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    miliSeconds.innerHTML = '00';
    min = 0;
    sec = 0;
    msec = 0;
    clearInterval(interval);
    lapButton.disabled = true;
    startBtn.disabled = false;
    startBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i> ' + 'Start'

}

function lap() {

    var lapGet = document.getElementById('lap-text');
    lapGet.innerHTML += '<img src="unnamed.png" class="btn-img" alt="">' + 'LAP= ' + minutes.innerHTML + ':' + seconds.innerHTML + ':' + miliSeconds.innerHTML + '<br>';
    reset();

    startBtn.disabled = false;
    lapButton.disabled = true;



}