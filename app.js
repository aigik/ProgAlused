// funktsioonid

// funktsioon, mis arvutab ristküliku pindala ja väljastab ekraanile

function ristkylikuPindala(pikkus, laius){
    // väljastame väärtused
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    // arvutame pindala
    let pindala = pikkus * laius;
    // tagastame pindala põhiprogrammi
    return pindala;
    
}

rPindala = ristkylikuPindala(15, 5);
console.log('Pindala = ' + rPindala);

