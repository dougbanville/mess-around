const housePrice = 750000;
const cutOffPoint = 335000;
const colm = percentage(housePrice, 60);
const doug = percentage(housePrice, 40);

const quokka = { isAwesome: true };


function percentage(num, per)
{
  return (num/100)*per;
};

console.log(percentage(housePrice, 60), percentage(housePrice, 40))

const taxable = colm - cutOffPoint;
const taxedAmount = percentage(taxable, 33);

console.log(`House price is ${housePrice}.\n Colm gets ${colm}, Doug gets ${doug}.`);
console.log(`Taxable is amount for Colm is ${taxable} (${colm} - ${cutOffPoint})\n. 33% of ${taxable} is ${taxedAmount}\n. This leaves Colm with ${colm - taxedAmount}`);