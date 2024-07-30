
let nome = prompt("Digite o seu nome:");
let alturaCm = parseFloat(prompt("Digite a sua altura em centímetros:"));
let peso = parseFloat(prompt("Digite o seu peso em kg:"));


let alturaM = alturaCm / 100;


let imc = peso / (alturaM * alturaM);


let classificacao;


if (imc < 16) {
    classificacao = "Baixo peso muito grave";
} else if (imc >= 16 && imc < 17) {
    classificacao = "Baixo peso grave";
} else if (imc >= 17 && imc < 18.5) {
    classificacao = "Baixo peso";
} else if (imc >= 18.5 && imc < 25) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    classificacao = "Sobrepeso";
} else if (imc >= 30 && imc < 35) {
    classificacao = "Obesidade grau I";
} else if (imc >= 35 && imc < 40) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

alert(`Nome: ${nome}\nIMC: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);