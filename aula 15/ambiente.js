/* essa estrutura é a mesma coisa que o código abaixo com os consoles.log, 
ela é uma repetição de um bloco de código,  

/* console.log('olá mundo!');
console.log('olá mundo!');
console.log('olá mundo!');
console.log('olá mundo!');
console.log('olá mundo!');
console.log('olá mundo!'); */

var contador = 1;

// aqui iremos testar primeiro e executar depois

while (contador <= 6) {
  // repetições
  console.log(`passo ${contador}`);
  contador++;
}

do {
  // aqui iremos executar primeiro e depois testar depois
  console.log(`passo ${contador}`);
  contador++;
} while (contador <= 6);
