// funktsioonid

// funktsioon, mis arvutab ristküliku pindala ja väljastab ekraanile

function ristkylikuPindala(pikkus, laius){
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    // arvutame pindala
    let pindala = pikkus * laius;
    // väljastame pindala
    console.log('Pindala = ' + pindala);
}

ristkylikuPindala(15, 5);
