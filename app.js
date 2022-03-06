const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar')

console.clear();
const num = 5;

/*console.log('=======================');
console.log(`      Tabla del ${num}      `);
console.log('=======================');

 let salida = '';

for(let i = 1; i <= 10; i++){
    //console.log(`${num} x ${i} = ${num*i}`);
    salida += `${num} x ${i} = ${num*i}\n`;
}

console.log(salida);

//fs.writeFile(`tabla-${num}.txt`, salida, (err) => {
//    if(err) throw err;
//    console.log(`Tabla-${num}.txt`)
//})

fs.writeFileSync(`tabla-${num}.txt`, salida);

console.log(`Tabla-${num}.txt creada`); */

crearArchivo(num)
    .then( nombreArchivo => console.log(nombreArchivo,'CREADO'))
    .catch( err => console.log(err));
