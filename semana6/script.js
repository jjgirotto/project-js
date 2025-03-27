let calculadora = document.getElementById("calculadora");
calculadora.innerHTML = "";

const botoes = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ",", "="
];

let display = document.createElement("div");
display.setAttribute("class", "display");
display.innerText = "0";
calculadora.appendChild(display);

let botoesDiv = document.createElement("div");
botoesDiv.setAttribute("class", "botoesDiv");
calculadora.appendChild(botoesDiv);

for (let i = 0; i < botoes.length; i++) {
    let texto = botoes[i];
    let botao = document.createElement("button");
    botao.innerText = texto;
    if (texto === "AC" || texto === "+/-" || texto === "%") {
        botao.setAttribute("class", "botao-cinza-claro");
    } else if (texto === "÷" || texto === "×" || texto === "-" || texto === "+" || texto === "=") {
        botao.setAttribute("class", "botao-laranja");
    } else if (texto === "0") {
        botao.setAttribute("class", "botao-zero");
    } else botao.setAttribute("class", "botao-cinza");
    
    botao.addEventListener("click", function () {
        calcular(texto);
    });
    botoesDiv.appendChild(botao);
}

let expressao = "";

function calcular(valor) {
    if (valor == "AC") {
        expressao = "";
        display.innerText = "0";
    } else if (valor == "+/-") {
        if (eval(expressao) >= 0) expressao = "-" + expressao;
        else {
            expressao = Number(expressao);
            expressao *= -1;
        }
        display.innerText = expressao.toString();
    } else if (valor == "%") {
        if (isNaN(expressao)) display.innerText = "0";
        else {
            let resultado = Number(expressao);
            resultado = resultado / 100;
            display.innerText = resultado.toString();
            expressao = resultado.toString();
        }
    } else if (valor == ",") {
        valor = ".";
        expressao += valor;
        display.innerText = expressao;
    } else if (valor == "=") {
        let resultado = eval(expressao.replace("×", "*").replace("÷", "/"));
        resultado = parseFloat(resultado);
        display.innerText = resultado;
        expressao = resultado.toString();
    } else {
        if (valor == "+" || valor == "-" || valor == "×" || valor == "÷") {
            if (expressao == "") {
                expressao += "0" + valor;
            } else expressao += valor;
        } else {
            expressao += valor;
            display.innerText = expressao;
        }
    }
}