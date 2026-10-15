
function calcular(entrada) {
    return eval(entrada);
}

const datoUsuario = process.argv[2];
console.log(calcular(datoUsuario));
