const seconds = parseInt(prompt('seconds from the start of the day=', '7200'));
const minutes = seconds / 60;
const hours = minutes / 60;

document.write(`
    <h1>
    Time from the start of the day is: <br>
    seconds = ${seconds}sec <br>
    minutes = ${minutes}min <br>
    hours = ${hours}hrs
    </h1>
    `);