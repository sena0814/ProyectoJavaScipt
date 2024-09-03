const prompt = require('prompt-sync')({ sigint: true });
let empleado =prompt('Ingrese el nombre del empleado: ');
console.log("*******************************************")
const valorhora = 5000;
const cantidadhoras = 48;
let rft =12.5;
salariobruto = cantidadhoras*valorhora;
retefuente = (salariobruto * rft)/100;
salarioneto = salariobruto-retefuente;

console.log("************COLILLA DE PAGO**************")
console.log(`Su salario bruto es de:$ ${salariobruto}`);
console.log("                                        ")
console.log(`La retención en la fuente es de:$ ${retefuente}`)
console.log("                                        ")
console.log("A pagar........                               ")
console.log("                                        ")
console.log(`Hola ${empleado} ` + `su salario neto es de:$ ${salarioneto}`)
console.log(`                                            `)

