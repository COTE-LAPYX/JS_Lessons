let total = 0;
let ticketHyperText = `
<h1>Ticket from Supermarket</h1><br>
<h1>-----------------------</h1>
`;

for (let i = 1; i <= 3; i++) {
    const price = parseFloat(prompt('Enter product price', '100'));
    const quantity = parseInt(prompt('Enter product quantity', '1'));
    const cost = price * quantity;
    total += cost;

    ticketHyperText += `<p>Item ${i}: ${quantity} x ${price.toFixed(2)}$ = ${cost.toFixed(2)}</p><br>`;
};

ticketHyperText += `
<h1>-----------------------</h1><br>
Total: ${total.toFixed(2)}$
`

document.write(ticketHyperText);