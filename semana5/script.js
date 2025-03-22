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
    
    adicionarSecao("homens", "images/male.png", "Homens");
    adicionarSecao("mulheres", "images/female.png", "Mulheres");
}

function adicionarSecao(id, imgSrc, label) {
    let divRow = document.createElement("div");
    divRow.setAttribute("class", "row");
    
    let imagem = document.createElement("img");
    imagem.src = imgSrc;
    imagem.setAttribute("class", "icon");
    divRow.appendChild(imagem);
    
    let botaoMais = document.createElement("button");
    let plus = document.createElement("img");
    plus.src = "images/mais.jpg";
    plus.setAttribute("class", "plus");
    botaoMais.appendChild(plus);
    botaoMais.onclick = () => alterarContagem(id, 1);
    divRow.appendChild(botaoMais);
    
    let botaoMenos = document.createElement("button");
    let minus = document.createElement("img");
    minus.src = "images/menos.jpg";
    minus.setAttribute("class", "minus");
    botaoMenos.appendChild(minus);
    botaoMenos.onclick = () => alterarContagem(id, -1);
    divRow.appendChild(botaoMenos);
    
    let labelElement = document.createElement("h5");
    labelElement.textContent = label;
    divRow.appendChild(labelElement);
    
    let countBoxDiv = document.createElement("div");
    countBoxDiv.setAttribute("class", "count-box");
    let countBox = document.createElement("div");
    countBox.id = id;
    countBox.textContent = id === "homens" ? homens : mulheres;
    countBoxDiv.appendChild(countBox);
    divRow.appendChild(countBoxDiv);

    // let totalBoxDiv = document.createElement("div");
    // totalBoxDiv.setAttribute("class", "count-box");
    // let totalBox = document.createElement("div");
    // totalBox.id = "total";
    // totalBox.textContent = total;
    // totalBoxDiv.appendChild(totalBox);
    // contador.appendChild(totalBoxDiv);
    
    document.getElementById("secao-homens-mulheres").appendChild(divRow);
}

function alterarContagem(tipo, valor) {
    if (tipo === 'homens') {
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

window.onload = function() {
    interface();
};