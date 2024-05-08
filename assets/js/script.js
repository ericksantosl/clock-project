const hours = window.document.querySelector('span#hours');
const minutes = window.document.querySelector('span#minutes');
const seconds = window.document.querySelector('span#seconds');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) {
        hr = '0' + hr
    }
    if (sec < 10) {
        sec = '0' + sec
    }
    if (min < 10) {
        min = '0' + min
    }

    hours.textContent = hr
    minutes.textContent = min
    seconds.textContent = sec
})