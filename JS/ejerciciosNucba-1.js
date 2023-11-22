function parImpar(v1) {
    if(v1 % 2 == 0) {
        console.log(`Tu número ${v1} es par`);
    } else {
        console.log(`Tu número ${v1} es impar`);
    }
}
// parImpar(3);

function mayMen(v1, v2) {
    if(v1 > v2) {
        console.log(`El número mayor es ${v1}`);
    } else if(v2 > v1) {
        console.log(`El número mayor es ${v2}`);
    } else {
        console.log(`Los números ${v1} y ${v2} son iguales`);
    }
}

// mayMen(5, 5);

function mul(v1) {
    if(v1 % 5 == 0) {
        console.log(`Tu número ${v1} es múltiplo de 5`);
    } else {
        console.log(`Tu número ${v1} no es múltiplo de 5`);
    }
}

// mul(15);

function contador(v1 = 0) {
    let i = 0;
    while (v1 >= i) {
        console.log(`${i}`);
        i++;
    }
}

// contador(5);

function contadorPalabra(v1, v2) {
    let i = 0;
    while(v2 > i) {
        console.log(`${v1}`);
        i++;
    }
}

// contadorPalabra("Loco", 3);


function arrayValores(arreglo) {
    for(let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}

let carrito = ["auto", "rueda", "capó"];

// arrayValores(carrito);

function arrayValores10(arreglo) {
    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[4] == arreglo[i]) {
            i++
        }
        console.log(arreglo[i]);
    }
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arrayValores10(numeros);

function arrayMul(arreglo, v1) {
    for(let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i] * v1);
    }
}

// arrayMul(numeros, 2);