function verificarPalindromo(texto) {
    textoInvertido = texto.split('').reverse().join('');
    if (texto == textoInvertido) {
        alert('É um palíndromo!');
    } else alert('Não é um palíndromo!');
}

document.getElementById("verificar").addEventListener('click', function() {
    let texto = document.getElementById("texto").value.toLowerCase();
    verificarPalindromo(texto);
});