const suma = (a,b) => a+b,
    resta = (a,b) => a-b,
    multi = (a,b) => a*b,
    divi = (a,b) => a/b,
    //modulo == residuo de la operación
    modulo = (a,b) => a % b;

    calculadora ={
        suma,
        resta,
        multi,
        divi,
        modulo
    };

module.exports = calculadora;