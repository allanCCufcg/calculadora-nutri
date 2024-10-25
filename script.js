function calcularIMC() {
    const altura = parseFloat(document.getElementById("alturaIMC").value);
    const peso = parseFloat(document.getElementById("pesoIMC").value);
    if (altura > 0 && peso > 0) {
        const imc = peso / (altura * altura);
        document.getElementById("resultadoIMC").innerText = `Seu IMC é ${imc.toFixed(2)}`;
    } else {
        document.getElementById("resultadoIMC").innerText = "Por favor, insira valores válidos.";
    }
}

function calcularPesoIdeal() {
    const altura = parseFloat(document.getElementById("alturaPesoIdeal").value);
    const genero = document.getElementById("generoPesoIdeal").value;
    let pesoIdeal;
    
    if (altura > 0) {
        if (genero === "masculino") {
            pesoIdeal = 22 * (altura * altura);
        } else {
            pesoIdeal = 21 * (altura * altura);
        }
        document.getElementById("resultadoPesoIdeal").innerText = `Seu peso ideal é ${pesoIdeal.toFixed(2)} kg`;
    } else {
        document.getElementById("resultadoPesoIdeal").innerText = "Por favor, insira uma altura válida.";
    }
}

function calcularTMB() {
    const idade = parseInt(document.getElementById("idadeTMB").value);
    const altura = parseFloat(document.getElementById("alturaTMB").value);
    const peso = parseFloat(document.getElementById("pesoTMB").value);
    const genero = document.getElementById("generoTMB").value;
    let tmb;

    if (idade > 0 && altura > 0 && peso > 0) {
        if (genero === "masculino") {
            tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
        } else {
            tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
        }
        document.getElementById("resultadoTMB").innerText = `Sua TMB é ${tmb.toFixed(2)} kcal/dia`;
    } else {
        document.getElementById("resultadoTMB").innerText = "Por favor, insira valores válidos.";
    }
}
