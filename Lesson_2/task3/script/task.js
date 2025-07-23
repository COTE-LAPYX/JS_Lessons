const price = parseInt(prompt('price per piece=', '100'));
const quantity = parseInt(prompt('quantity=', '3'));

const total = price * quantity;
const vat = total * 0.05; // 0.05 = 5% vat

document.write(`
    <h1>
    Total = ${total}$ <br>
    VAT (ПДВ) = ${vat}$
    </h1>
    `);