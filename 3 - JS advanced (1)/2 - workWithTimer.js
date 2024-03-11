'use strict';

const options = {
    minute: 'numeric',
    second: 'numeric'
}

function pizzaTimer(waitTimeSec){
    const finishTime = Number(new Date()) + waitTimeSec * 1000; 

    const cycleTimer = setInterval(() => {
        const timeDist = new Date(finishTime - Number(new Date()) + 100);
        console.log(new Intl.DateTimeFormat(navigator.language, options).format(timeDist));
    }, 1000);

    setTimeout(() => {
        clearInterval(cycleTimer);
        console.log('END!');
    }, waitTimeSec * 1000);
}

pizzaTimer(5);