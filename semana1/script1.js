let numero = prompt("Digite um número inteiro positivo: ");
while(numero < 0 || isNaN(numero)) {
    alert("Você deve inserir um número inteiro positivo!");
}
if (numero % 2 == 0) {
    alert("O número " + numero + " é par!");
} else {
    alert("O número " + numero + " é ímpar!");
}