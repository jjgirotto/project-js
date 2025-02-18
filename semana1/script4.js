let dado = prompt("Informe o dado: ");
let resposta = prompt("Deseja verificar o tipo do dado? (s/n)").toLowerCase();
if (resposta == "s") {
    let tipo;
    if (!isNaN(dado)) dado = Number(dado);
    tipo = typeof(dado);
    alert("O dado é um/a " + tipo);
} else {
    alert("Obrigada por visitar esta página!");
}