let contador = document.getElementById("contador");
contador.innerHTML = "";

let total = 0;
let homens = 0;
let mulheres = 0;

function interface() {
    let totalContainer = document.createElement("div");
    totalContainer.setAttribute("id", "total-container");

    let divTitulo = document.createElement("div");
    let titulo = document.createElement("h3");
    titulo.textContent = "Total";
    divTitulo.appendChild(titulo);

    let botaoReset = document.createElement("button");
    let imageReset = document.createElement("img");
    imageReset.src = "images/reset.png";
    imageReset.setAttribute("class", "update");
    botaoReset.appendChild(imageReset);
    botaoReset.onclick = resetContador;
    totalContainer.appendChild(divTitulo);
    totalContainer.appendChild(botaoReset);
    contador.appendChild(totalContainer);

    let totalBoxDiv = document.createElement("div");
    totalBoxDiv.setAttribute("class", "count-box");
    let totalBox = document.createElement("div");
    totalBox.id = "total";
    totalBox.textContent = total;
    totalBoxDiv.appendChild(totalBox);
    contador.appendChild(totalBoxDiv);

    let secaoHomensMulheres = document.createElement("div");
    secaoHomensMulheres.setAttribute("id", "secao-homens-mulheres");
    contador.appendChild(secaoHomensMulheres);
    
    adicionarSecao("homens", "images/homem.png", "Homens");
    adicionarSecao("mulheres", "images/mulher.png", "Mulheres");
}

function adicionarSecao(id, imgSrc, label) {
    let divSecao = document.createElement("div");
    divSecao.setAttribute("class", "secao");

    let imagem = document.createElement("img");
    imagem.src = imgSrc;
    imagem.setAttribute("class", "icon");
    divSecao.appendChild(imagem);

    let divRowButtons = document.createElement("div");
    divRowButtons.setAttribute("class", "row-buttons");
    let botaoMais = document.createElement("button");
    let plus = document.createElement("img");
    plus.src = "image/mais.JPG";
    plus.setAttribute("class", "plus");
    botaoMais.appendChild(plus);
    botaoMais.onclick = function () {
        alterarContagem(id, 1);
    };
    divRowButtons.appendChild(botaoMais);

    let botaoMenos = document.createElement("button");
    let minus = document.createElement("img");
    minus.src = "images/menos.JPG";
    minus.setAttribute("class", "minus");
    botaoMenos.appendChild(minus);
    botaoMenos.onclick = function () {
        alterarContagem(id, -1);
    };
    divRowButtons.appendChild(botaoMenos);

    let labelElement = document.createElement("h5");
    labelElement.textContent = label;

    let countBoxDiv = document.createElement("div");
    countBoxDiv.setAttribute("class", "count-box");
    let countBox = document.createElement("div");
    countBox.id = id;
    countBox.textContent = id === "homens" ? homens : mulheres;
    countBoxDiv.appendChild(countBox);

    divSecao.appendChild(divRowButtons);
    divSecao.appendChild(labelElement);
    divSecao.appendChild(countBoxDiv); 

    document.getElementById("secao-homens-mulheres").appendChild(divSecao);
}

function alterarContagem(genero, valor) {
    if (genero === 'homens') {
        homens = Math.max(0, homens + valor);
    } else {
        mulheres = Math.max(0, mulheres + valor);
    }
    total = homens + mulheres;
    atualizarInterface();
}

function resetContador() {
    homens = 0;
    mulheres = 0;
    total = 0;
    atualizarInterface();
}

function atualizarInterface() {
    document.getElementById('homens').textContent = homens;
    document.getElementById('mulheres').textContent = mulheres;
    document.getElementById('total').textContent = total;
}

interface();