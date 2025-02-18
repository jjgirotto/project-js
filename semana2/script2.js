function atualizarRelogio() {
    let data = new Date();
    let hora = data.getHours().toString().padStart(2, '0');
    let minuto = data.getMinutes().toString().padStart(2, '0');
    let segundo = data.getSeconds().toString().padStart(2, '0');
    let formato = `${hora}:${minuto}:${segundo}`;
    document.getElementById("relogio").textContent = formato;
    setTimeout(atualizarRelogio, 1000); //1000ms
}
document.addEventListener("DOMContentLoaded", atualizarRelogio);