const month = Math.floor(Math.random() * 12) + 1;
const day = Math.floor(Math.random() * 7);
const sum = month + day;

document.write(`
    <h1>
    Random month = ${month}<br>
    Random day = ${day}<br>
    sum = ${sum} 
    </h1>
    `);