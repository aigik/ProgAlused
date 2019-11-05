// funktsioonid

// funktsioon, mis arvutab ristküliku pindala ja väljastab ekraanile

function ristkylikuPindala(pikkus, laius){
     
    // arvutame pindala
    let pindala = pikkus * laius;
    // tagastame pindala põhiprogrammi
    return pindala;
}

// funktsioon, mis väljastab tulemus ekraani
function valjasta(pikkus, laius){
    // väljastame väärtused
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    // salvestame arvutatud pindala
    let pindala = ristkylikuPindala(pikkus, laius);
    //väljastame tulemus
    console.log('Pindala = ' + pindala);
}

valjasta(15,5);
valjasta(3,5);
