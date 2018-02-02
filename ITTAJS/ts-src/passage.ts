var o1= {p:10};
var o2= {p:10};
console.log(o1==o2);
console.log(o1.p==o2.p);

/**********************************************\
|*******************TEST***********************|
\**********************************************/

var i = 15;
ajoute(i);
console.log(i);//15

i= ajouteBien(i);
console.log(i);//16

ajouteO(o1);
console.log(o1.p);//11

var ti=[3,5,9,10];
ajouteATab(ti,2);//[5,7,11.12]
console.log(ti);

ajouteSommeATab(ti);
console.log(ti);//[5,7,11,12,35]

ajouteOSommeAtab(ti);
console.log(ti);//[5,7,11,12,35, {somme:70}]

ajoutePropSommeAtab(ti);
console.log(ti);//[0:5,1:7,2:11,3:12,4:35,5:{somme:70},{somme:70}]

/**********************************************\
|***************FONCTIONS ********************|
\**********************************************/

//var ajoute = function (v){...}
function ajoute(v) {
    v + 1;
}

function ajouteBien(v) {
    return v + 1;
}

function ajouteO(param) {
    param.p++;
}

function ajouteATab(monTableau, valeurAjoute){
    for (var index in monTableau) {
    monTableau[index]+=valeurAjoute;
    }
}

function ajouteSommeATab(monTableau){
    monTableau.push(Somme(monTableau));
}

function ajouteOSommeAtab(monTableau){
    monTableau.push({somme:Somme(monTableau)});
}

function ajoutePropSommeAtab(monTableau){
    monTableau.somme =Somme(monTableau);
}

function Somme(tableau) {
/****Manière Clasic********/
    // var somme = 0;
    // for (var index in tableau) {
    //     if (typeof tableau[index]==="number") {
    //          somme += tableau[index];
    //     }
    //     else{
    //         break;
    //     }
    // }
    // return somme;

/******Avec forEach********/
    // var somme =0;
    // var ajout = function (element) {
    //     if (typeof element === "number") {
    //         somme+= element;
    //     }
    // }
    // tableau.forEach(ajout);
    // return somme;

/****Avec fonction anonyme*****/
    // var somme = 0;
    // tableau.forEach(
    //     function (element) {
    //         if (typeof element === "number") {
    //             somme+= element;
    //         }
    //     });
    // return somme;

/******Avec la fonction every********/
    var somme = 0;
    tableau.every(
        function (element, index, array) {
            if (typeof element === "number") {
                somme+= element;
                return true;
            }else{
                return false;
            }
        });
    return somme;
}


