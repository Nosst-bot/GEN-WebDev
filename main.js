function calcularFactorial() {
    // Bloque
    const numeroInput = document.getElementById("factorial");
    const resultado = document.getElementById("resultado1");
    let num = parseInt(numeroInput.value);

    if(isNaN(num) || num < 0) {
        resultado.textContent = "Por favor, ingresa un número válido, mayor o igual a 0";
        return;
    }

    if (num == 0 || num == 1){
        resultado.textContent = "El factorial de " + num + " es 1.";
        return;
    }

    for (let i = num -1; i >= 1; i--) {
        num *= i;        
    }

    resultado.textContent = "Resultado: " +num;
    return;
}


// Funcion para verificar palindromos

function verificarPalindromo(){
    const inputPalindromo = document.getElementById("inputPalindromo");
    const resultado = document.getElementById("resultado2");

    const texto = inputPalindromo.value.toLowerCase().replace(/[^a-z]/g, "");

    if(texto === ""){
        resultado.textContent = "Porfavor, ingrese una palabra valida";
        return;
    }

    const textoReverse = texto.split("").reverse().join("");
    
    if (texto == textoReverse) {
        resultado.textContent = "Si, la palabra " + inputPalindromo.value + " es un palindromo."
        return;
    } else {
        resultado.textContent = "No, la palabra " + inputPalindromo.value + " no es un palindromo."
        return;
    }

}