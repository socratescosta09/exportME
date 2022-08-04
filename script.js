document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector('#qtde').addEventListener("change", atualizarPeco)
document.querySelector('#js').addEventListener("change", atualizarPeco)
document.querySelector('#layout-sim').addEventListener("change", atualizarPeco)
document.querySelector('#layout-nao').addEventListener("change", atualizarPeco)
document.querySelector('#prazo').addEventListener("change", function() {
    precoPrazo(semanasPrazo);
    atualizarPeco();
});

semanasPrazo = 0;

precoPrazo = function (semanasPrazo) {
    const prazo = document.querySelector("#prazo").value;
         if (prazo > 1) {
            document.querySelector("label[for=prazo]").innerHTML  = `Prazo: ${prazo} semanas`;
        } else {
            document.querySelector("label[for=prazo]").innerHTML  = `Prazo: ${prazo} semana`;
        }
         return semanasPrazo;
}


function atualizarPeco() {
    const qtde = document.querySelector('#qtde').value;
    const addJS = document.querySelector('#js').checked;
    const addLayout = document.querySelector('#layout-sim').checked;
    const prazo = document.querySelector("#prazo").value;

    let preco = qtde * 100;
    if (addJS) preco *= 1.1;
    if (addLayout) preco += 500;
    let taxaUrgencia = 1 - prazo * 0.1;

    preco *= 1 + taxaUrgencia;
    
    document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`;
}