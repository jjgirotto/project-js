let numero = prompt("Digite um número inteiro positivo: ");
while(numero < 0 || isNaN(numero)) {
    alert("Você deve inserir um número inteiro positivo!");
}
let soma = 0;
for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        soma++;
    }     
}
if (soma >= 1) {
    alert("O número " + numero + " não é primo!");
} else {
    alert("O número " + numero + " é primo!");
}