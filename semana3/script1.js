let valores = [];
function atualizarValores() {
    valores.sort();
    let lista = document.getElementById("lista");
    if (!lista) {
        lista = document.createElement("ol");
        lista.setAttribute("id", "lista");
        document.body.appendChild(lista);
    } else {
        lista.innerHTML = "";
    }
    for (let i = 0; i < valores.length; i++) {
        let item = document.createElement("li");
        item.textContent = valores[i];
        lista.appendChild(item);
    };
}
document.getElementById("adicionar").addEventListener("click", function() {
    let valor = document.getElementById("valor").value; 
    valores.push(valor);
    atualizarValores();
});