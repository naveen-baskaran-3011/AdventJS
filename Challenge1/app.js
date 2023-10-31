var timer;
let minutesElement = document.getElementById('min_input');
let secondsElement = document.getElementById('sec_input');


let startStopButton = document.getElementById('start_stop_button');
startStopButton.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.textContent === 'start') {
        document.querySelector('.ring').classList.remove('ending');
        timer = setInterval(() => {
            let currentSecondsValue = parseInt(secondsElement.value, 10);
            let currentMinutesValue = parseInt(minutesElement.value, 10);
            if (currentSecondsValue === 0 && currentMinutesValue !== 0) {
                currentMinutesValue--;
                secondsElement.value = 59;
        
                if (currentMinutesValue < 10 && currentMinutesValue >= 0) {
                    minutesElement.value = `0${currentMinutesValue}`;
                } else if (currentMinutesValue > 10) {
                    minutesElement.value = currentMinutesValue;
                }
            } else if (currentSecondsValue > 0) {
                currentSecondsValue--;
        
                if (currentSecondsValue < 10) {
                    secondsElement.value = `0${currentSecondsValue}`;
                    if (currentSecondsValue === 0 && currentMinutesValue === 0) {
                        clearInterval(timer);
                        clickEvent.target.innerText = 'start';
                        document.querySelector('.ring').classList.add('ending');
                    }
                } else if (currentSecondsValue > 10) {
                    secondsElement.value = currentSecondsValue;
                }
            } else if (currentMinutesValue === 0 && currentSecondsValue === 0) {
                clearInterval(timer);
                clickEvent.target.innerText = 'start';
                document.querySelector('.ring').classList.add('ending');
            }
        }, 1000);

        minutesElement.disabled = true;
        secondsElement.disabled = true;
        clickEvent.target.innerText = 'stop';
    } else {
        clearInterval(timer);
        clickEvent.target.innerText = 'start';
    }
});

let settingsIcon = document.getElementById('customize_time');
settingsIcon.addEventListener('click', () => {
    if (minutesElement.disabled || secondsElement.disabled) {
        minutesElement.disabled = false;
        secondsElement.disabled = false;
    } else {
        minutesElement.disabled = true;
        secondsElement.disabled = true;
    }
});

minutesElement.addEventListener('focusout', (event) => {
    let value = parseInt(event.target.value, 10)
    if (value <= 10) {
        event.target.value = `0${value}`;
    }
});

secondsElement.addEventListener('focusout', (event) => {
    let value = parseInt(event.target.value, 10)
    if (value <= 10) {
        event.target.value = `0${value}`;
    }
});