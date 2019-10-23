// Muutujad

// var
//muutujate defineerimine
var nimi = 'Aigi'; // defineerimine
console.log(nimi);
nimi = 'Katrin'; // väärtuse omistamine
console.log(nimi);

// muutujate initsialiseerimine
var tervitus;
console.log(tervitus);
tervitus = 'Tere tulemast!';
console.log(tervitus);

// liitnimede kasutamine
var eesNimi = 'Aigi'; // Camel Style
var ees_nimi = 'Aigi'; // PHP stiil
var EesNimi = 'Aigi'; // Pascal Style
var eesnimi = 'Aigi';

// let
let pereNimi = 'Kallaste';
console.log(pereNimi);
pereNimi = '???';
console.log(pereNimi);

// const
const minuEesNimi = 'Aigi';
console.log(minuEesNimi);
// minuEesNimi = 'Katrin';

// const kasutamise näide
const inimene = {nimi : 'Katrin', vanus : 20};
console.table(inimene);
inimene.vanus = 21;
console.table(inimene);

// const kasutamine näide 2
const arvud = [1, 2, 3, 4, 5];
console.log(arvud);
arvud.push(6);
console.log(arvud);
