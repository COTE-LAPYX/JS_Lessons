const centimeters = parseFloat(prompt('length in centimeters=', '100'));
const meters = centimeters / 100;
const kilometers = meters / 1000;

document.write(`
    <h1>
    centimeters = ${centimeters}cm <br>
    meters = ${meters}m <br>
    kilometers = ${kilometers}km
    </h1>
    `);