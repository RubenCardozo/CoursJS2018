"use strict";
/*VARIABLES en JS*/
var monVariable = "Hello world";
console.log(monVariable);
var monEpose = "Andrea!!!";
console.log(monEpose);
var a;
console.log(a);
b = 12;
console.log(b);
var b;
console.log(typeof (b));
console.log(typeof (a));
var c = true;
console.log(typeof (c));
var c = 1;
console.log(typeof (c));
console.info(typeof (c));
/********************************************************/
/*OBJET en JS*/
var d = {
    couleur: "blue",
    marque: "Caran d'ache"
};
console.log(typeof (d));
console.log(d.couleur);
console.log(d.marque);
/********************************************************/
/*Fonction en JS sans parametre */
var manger = function () {
    console.log("je mange donc j'essuie");
};
console.log(typeof (manger));
manger();
/*Fonction en JS avec parametre */
var ecrire = function (texte) {
    if (typeof (texte) === "undefined")
        console.log("texte vide");
    else
        console.log(texte);
};
ecrire("Sofia aime à Andrea");
ecrire();
