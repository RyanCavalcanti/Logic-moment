function podeDarTroco(notas){
    let troco5 = 0;
    let troco10 = 0;

    for (let i = 0; i < notas.length; i++){
        const nota = notas[i];

        if(nota ===5 ){
            troco5++
        }else if(nota === 10){
            if (troco5 > 0) {
                troco5--;
                troco10++;
            } else {
                return false;
            }
        }
    }

    return true;
}

const notas = [5, 5, 5, 10, 20];
const resultados = podeDarTroco(notas);
console.log(resultados);