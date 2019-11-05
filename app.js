// funktsioonid

// arvu paarsuse kontroll
// funktsiooni defineerimine
/* function funktsiooniNimi(param1, param2, ..., paramN){
    funktsiooni sisu
}*/
function paarsuseKontroll(arv){

//tulemuslause defineerimine
let lause;
//arvutame jääk 2-ga jagamisel
let jaak = arv % 2;
// kui jaak on võrdne nulliga
if( jaak === 0){
    //tegu on paaris arvuga
    lause = arv + ' on paaris';
} else {
    // tegu on paaritu arvuga
    lause = arv + ' on paaritu';
}
// tagastame antud väärtus
return lause;
}

// funktsiooni kasutamine
let paarsus;
paarsus = paarsuseKontroll(7);
console.log(paarsus);

