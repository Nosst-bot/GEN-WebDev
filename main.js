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
    console.log(textoReverse);
    if (texto == textoReverse) {
        resultado.textContent = "Si, la palabra " + inputPalindromo.value + " es un palindromo."
        return;
    } else {
        resultado.textContent = "No, la palabra " + texto + " no es un palindromo."
        return;
    }

}


function a (num) {
    let factorial = 1;
    for (let i = 1; i <=num; i++) {
        factorial *= i;
        
    }
    return factorial;
}

const myNumbers = [1,2,3,4,5,6,7]
const myFunction = arr => {
    return arr.map(x=> x+3).filter(x => x < 7);
}

const ejemploPromesa = () => Promise.resolve("A");

function a() {
    ejemploPromesa().then(resultado => console.log(resultado));
    console.log("B");
}

async function b() {
    console.log(await ejemploPromesa());
    console.log("B");
}

var a = function(test1, test2 ){
    return test1 == test2;
}

const enumerar = (cadena, caracter) => cadena.split(caracter).length -1;

console.log(enumerar("paranagaricutirimicuaro", "i"));