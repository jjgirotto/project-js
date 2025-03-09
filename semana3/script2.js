function Carro(marca, modelo, ano, cor, km, valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.km = km;
    this.valor = valor;
    this.anosUtilizacao = function() {
        return new Date().getFullYear() - this.ano;
    }
    this.valorMercado = function() {
        let rodagem = this.km/this.anosUtilizacao();
        if (rodagem < 30000) {
            return 1.1 * this.valor;
        } else if (rodagem <= 50000) {
            return this.valor;
        } else {
            return 0.9 * this.valor;
        }
    }
}

function atualizar(resultado) {
    let frase = document.getElementById("resultado");
    frase.innerHTML = "";
    let p = document.createElement("p");
    p.textContent = resultado;
    frase.appendChild(p);
}


document.getElementById("calcular").addEventListener('click', function() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = parseInt(document.getElementById("ano").value);
    let cor = document.getElementById("cor").value;
    let km = parseFloat(document.getElementById("km").value);
    let valor = parseFloat(document.getElementById("valor").value);

    if (marca && modelo && ano && cor && km && valor ) {
        let carro = new Carro(marca, modelo, ano, cor, km, valor);
        let resultado = "O carro " + carro.marca + " possui " + carro.anosUtilizacao() + " anos de utilização e vale R$" + carro.valorMercado().toFixed(2) + " reais.";
        atualizar(resultado);
    } else {
        alert("Por favor, preencha todos os campos.");
        return;
    }
});