const yearOfBirth = parseInt(prompt('year of birth=', '2000'));
const currentYear = parseInt(prompt('current Year=', '2025'));

const age = currentYear - yearOfBirth;

document.write(`
    <h1>
    Age = ${age}
    </h1>
    `);