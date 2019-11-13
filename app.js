// funktsioonid
// nähtavus - Scope

// funktsioon, mis arvutab ristküliku pindala
// globaalne
var a = 1;
let b = 2;
const c = 3;

function ristkylikuPindala(pikkus, laius){
    // arvutame pindala
    let pindala = pikkus * laius;
    // tagastame pindala p6hiprogrammi
    return pindala;
}

// funktsioon, mis v2ljastab tulemuse ekraanile
function valjasta(pikkus = 0, laius = 0){
    // v2ljastame v22rtused
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    // salvestame arvutatud pindala
    let pindala = ristkylikuPindala(pikkus, laius);
    // v2ljastame tulemuse
    console.log('Pindala = ' + pindala);
}

valjasta(15, 5);
valjasta(1, 5);
valjasta();

console.log('Globaalne: ', a, b, c);
