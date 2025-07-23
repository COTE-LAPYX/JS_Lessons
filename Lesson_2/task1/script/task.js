const num1 = parseFloat(prompt('num1=', '1'));
const num2 = parseFloat(prompt('num2=', '1'));

const sum = num1 + num2;
const multiplication = num1 * num2;
const division = num1 / num2;

document.write(`
    <table>
        <tr>
            <td>sum</td>
            <td>multiplication</td>
            <td>division</td>
        </tr>
            <tr>
            <td>${sum}</td>
            <td>${multiplication}</td>
            <td>${division}</td>
        </tr>
    </table>
    `);