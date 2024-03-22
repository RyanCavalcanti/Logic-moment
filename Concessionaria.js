let modelos = [];
let anos = [];
let valores = [];

function cadastrarCarro(modelo, ano, valor) {
    modelos.push(modelo)
    anos.push(ano)
    valores.push(valor)
}

function indiceCarroMaisBarato() {
    let indice = 0;
    for(let i = 1; i < valores.length; i++){
        if (valores[i] < valores[indice]) {
            indice = i;
        }
    }
    return indice;
}

function indiceCarroMaisCaro() {
    let indice = 0;
    for(let i = 1; i < valores.length; i++){
        if (valores[i] > valores[indice]) {
            indice = i;
        }
    }
    return indice;
}

function calcularMediaValores() {
    let total = 0;
    for(let i = 1; i < valores.length; i++){
        total += valores[i];
    }
    return total / valores.length;
}

cadastrarCarro("Carro A", 2024, 50000);
cadastrarCarro("Carro B", 2022, 23000);
cadastrarCarro("Carro C", 2014, 98000);

let indiceMaisBarato = indiceCarroMaisBarato();
let indiceMaisCaro = indiceCarroMaisCaro();

console.log("Carrro mais barato:");
console.log("Modelo: ", modelos[indiceMaisBarato]);
console.log("Ano: ", anos[indiceMaisBarato]);
console.log("Valor: ", valores[indiceMaisBarato]);

console.log("Carrro mais caro:");
console.log("Modelo: ", modelos[indiceMaisCaro]);
console.log("Ano: ", anos[indiceMaisCaro]);
console.log("Valor: ", valores[indiceMaisCaro]);

console.log("\n Média dos valores dos carros: ", calcularMediaValores());