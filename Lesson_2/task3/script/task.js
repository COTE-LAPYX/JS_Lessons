const price = parseInt(prompt('price per piece=', '100'));
const quantity = parseInt(prompt('quantity=', '3'));

const total = price * quantity;
const tav = total * 0.05; // 0.05 = 5% tav

document.write(`
    <h1>
    Total = ${total}$ <br>
    tav (ПДВ) = ${tav}$
    </h1>
    `);