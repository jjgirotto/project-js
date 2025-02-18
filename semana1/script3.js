let numero = prompt("Digite um número inteiro positivo: ");
while(numero < 0 || isNaN(numero)) {
    alert("Você deve inserir um número inteiro positivo!");
}
let fatorial = 1;
for (let i = 2; i <= numero; i++) {
    fatorial *= i;
}
alert("O fatorial de " + numero + " é: " + fatorial);