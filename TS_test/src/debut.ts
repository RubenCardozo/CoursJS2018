var o1= {p:10};
var o2= {p:10};
console.log(o1==o2);
console.log(o1.p==o2.p);

var i = 15;
ajoute(i);
console.log(i);//15

i= ajouteBien(i);
console.log(i);//16

ajouteO(o1);
console.log(o1.p);//11

var ti=[3,5,9,10];
ajouteATab(ti,2);//[5,7,11.12]

//var ajoute = function (v){...}
function ajoute(v) {
    v + 1;
}

function ajouteBien(v) {
    return v + 1;
}

function ajouteO(param) {
    param.p++
    ;
}

function ajouteATab(tableau,valuerAjoute){
    for (index in tableau) {
    console.log(tab[index]+valuerAjoute);
    }
}