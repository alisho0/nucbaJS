////// Suma

function suma() {
    let resultado;
    const v1 = parseInt(prompt("Ingrese su primer valor"));
    const v2 = parseInt(prompt("Ingrese su segundo valor"));
    if(Number.isInteger(v1) && Number.isInteger(v2)) {
        let resultado = v1 + v2;
        alert(`El resultado de tu suma es ${resultado}`);
    } else {
        alert("Debes ingresar dos números enteros")
    }
}

// suma();

////// Cambio de temperatura Celsius a Fahrenheit

function cambioFahren() {
    let gradosFahrenheit;
    const gradosCelsius = parseFloat(prompt("Ingrese su temperatura en grados Celsius"));

    if(Number.isFinite(gradosCelsius)) {
        gradosFahrenheit = (1.8 * gradosCelsius) + 32;
        alert(`La conversión dio que sus ${gradosCelsius}° Celsius son equivalentes a ${gradosFahrenheit}° Fahrenheit`);  
    } else {
        alert("Ingrese un número válido");
    }
}

// cambioFahren();

////// Tipo de Dato

function tipoDato() {
    let a = [1, 2, 3];
    alert(`Este dato es de tipo: ${typeof a}`)
}

// tipoDato();

function averiguarPar() {
    const valor1 = parseInt(prompt("Ingrese un número"));

    if(valor1 % 2 == 0) {
        alert(`Tu número ${valor1} es par`);
    } else {
        alert(`Tu número ${valor1} no es par`)
    }
}

// averiguarPar();

function divisibleCinco () {
    const valor = parseInt(prompt("Ingresa tu número"));
    if(valor % 5 == 0) {
        console.log("Tu número es divisible por 5");
    } else {
        console.log("Tu número no es divisible por 5");
    }
}

// divisibleCinco();

function divisibleOnceCinco () {
    const valor = parseInt(prompt("Ingresa tu número"));
    if(valor % 11 == 0 && valor % 5 == 0) {
        console.log("Tu número es divisible por 5 y por 11");
    } else {
        console.log("Tu número no es divisible por 5 y por 11");
    }
}

// divisibleOnceCinco();

function numeroMayor () {
    const v1 = parseInt(prompt("Ingrese un número para comparar"));
    const v2 = parseInt(prompt("Ingrese otro número para comparar"));

    if(v1 > v2) {
        alert(`El número mayor entre tu primer valor ${v1} y tu segundo valor ${v2} es: ${v1}`);
    } else if(v1 == v2){
        alert(`En este caso, tanto tu primer valor ${v1} como tu segundo valor ${v2} son iguales`);
    } else {
        alert(`El número mayor entre tu primer valor ${v1} y tu segundo valor ${v2} es: ${v2}`);
    }
}

// numeroMayor();

function numeroMayorTernario () {
    const v1 = parseInt(prompt("Ingrese un número para comparar"));
    const v2 = parseInt(prompt("Ingrese otro número para comparar"));
    
    v1 > v2 ? console.log(`Tu primer valor ${v1} es el mayor`) : console.log(`Tu segundo valor ${v2} es el mayor`);
}

// numeroMayorTernario();