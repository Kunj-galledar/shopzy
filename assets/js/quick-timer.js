/*=====================
    Timer Js
==========================*/
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());

    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(className, endtime) {
    var clocks = document.querySelectorAll('.' + className);

    clocks.forEach(function (clock) {
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
                clock.classList.add('time-up');
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    });
}

var deadline = new Date(Date.parse(new Date()) + 5 * 60 * 60 * 1000);
initializeClock('quickClock', deadline);