function date_time() {
    return {hours: {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds()
    }};
}

// call to change bg
setInterval(() => {
    let time = date_time().hours.hour;
    let bg = document.querySelector('#bg');
    let msg = document.querySelector('#msg-hours');

    if (time < 12 && time >= 6) {
        bg.style.backgroundImage = 'url("images/manha.jpg")';
        msg.innerHTML = '<p>bom dia</p>';
    } else if (time < 18 && time >= 12) {
        bg.style.backgroundImage = 'url("images/tarde.jpg")';
        msg.innerHTML = '<p>boa tarde</p>';
    } else {
        bg.style.backgroundImage = 'url("images/noite.jpg")';
        msg.innerHTML = '<p>boa noite</p>';
    }
}, 60);

// call to change hours
setInterval(() => {
    let time = date_time().hours;
    let hours = document.querySelector('#msg-dynamic');

    let format = {
        hours: ('00' + time.hour).slice(-2),
        minute: ('00' + time.minute).slice(-2),
        second: ('00' + time.second).slice(-2)
    }

    hours.innerHTML = `<p>${format.hours}:${format.minute}:${format.second}</p>`;
}, 1);
