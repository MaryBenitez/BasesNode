const fs = require('fs');
const num = 3;

console.clear();
console.log('=======================');
console.log(`      Tabla del ${num}      `);
console.log('=======================');

let salida = '';

for(let i = 1; i <= 10; i++){
    //console.log(`${num} x ${i} = ${num*i}`);
    salida += `${num} x ${i} = ${num*i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${num}.txt`, salida, (err) => {
    if(err) throw err;
    console.log(`Tabla-${num}.txt`)
})
