"use strict";
/*VARIABLES en JS*/
var monVariable;
monVariable="Hello world";
//console.log(monVariable);

var monEpouse = "Andrea!!!";
//console.log(monEpouse);

var a;
//console.log(a);

var b;
b=12;
//console.log(b);


//console.log(typeof(b));
//console.log(typeof(a));

var c=true;
//console.log(typeof(c));
var c=1;
//console.log(typeof(c));
//console.info(typeof(c));
/********************************************************/
/*OBJET en JS*/
var d= {
    couleur: "blue",
    marque: "Caran d'ache"
};
//console.log(typeof (d));
//console.log(d.couleur);
//console.log(d.marque);

/********************************************************/
/*Fonction en JS sans parametre */
var manger=function(){
    console.log("je mange donc j'essuie");
}
//console.log( typeof(manger));
//manger();

/*Fonction en JS avec parametre */
var ecrire= function(texte){
    if(typeof (texte) === "undefined")
        console.log("texte vide");
    else
        console.log(texte);
};

//ecrire("Sofía!!!");
//ecrire();
//console.debug(window.b);

window.e= {
    p:12
};
//console.log(e);
e.k="mama";
e.f=function(){
    console.log(this.k);
}
//e.f();

var i=21;
var fun = function(){
    var i = window.i - 1;
    var j = window.i - 1;
    console.log(i);
};
//fun();
//console.log(i);

var m, n= 45;
//console.log(m, n);
var t=[];
//console.log(typeof(t));
var t1 = [
    12,
    "treize",
    {g:14},
    [15]
];
//Delete les elements du tableau
//console.log(t1);
//console.log(t1[1]);
//console.log(t1[t1.length - 1]);
t1[6]="six";
//console.log(t1.length);
delete t1[3];
//console.log(t1.length);
//console.log(t1[3]);
delete t1[t1.length - 1];
//console.log(t1.length);
//console.log(t1);
t1.splice(4,1);
//console.log(t1.length);
t1.splice(4,2);
//console.log(t1.length);
//console.log(t1[2]);

t1.splice(4,0,"quatre","cinq");
//console.log(t1);
t1.push("sept","huit")
t1.pop();
t1.unshift(10,11);
t1.shift();
var index=t1.indexOf("treize");//2
var index=t1.indexOf("mille",2);//-1
var index=t1.indexOf("treize",3);//-1!!!!!
var index=t1.indexOf("treize",2);//2
//console.log(index);

//cherche par la fin
var index=t1.lastIndexOf("treize");//2
//console.log(index);

//Tableau rangée avec la fonction sort
var t2=["D","A","C","c","b","Z"];
t2.sort();
//console.log(t2.sort());

var triAlpha= function (c1 ,c2) {
    return c1.localeCompare(c2,"fr");
};
t2.sort(triAlpha);
//console.log(t2.sort(triAlpha));

var t3= t1.concat(t2);
//console.log(t3);
var n=0;
var m = 10; //10
m= m+1; //11
m++; //12
m+= 1;//13
m--;//12
m-=1;//11
m*=2;//22
m /= 3;//7,333333333
m/=n;//Infinity
m-= Infinity; //NaN (not a number)
m+=Infinity; //NaN
m=15;
//console.log(m % 2);//(m modulo 2)=1

/**********************************************\
 * Concatenation et remplaçament de caractères *
\**********************************************/
var concat = ('albert'+' '+'Einstein').toUpperCase();
//var concat= concat.toUpperCase();
concat = concat.concat(' est UN genie').toLowerCase();
concat = concat.replace('einstein','Algoud').toLowerCase();
concat = concat.replace(/a/g , 'U');
concat = concat.replace(/[iu]/g , 'O');
concat="AbraCadabra";
console.log(concat.replace(/A/g , 'O'));//ObraCadabra
console.log(concat.replace(/a/, 'O'));//AbrOCadabra
console.log(concat.replace(/a/gi , 'O'));//ObrOCOdObrO
console.log(concat.replace(/a[cb]/gi , 'O'));//OrOadOra
console.log(concat.replace(/a(c|b)/gi , 'O'));//OrOadOra
console.log(concat.replace(/a[b-e]/gi , 'O'));//OrOOOra
console.log(concat.replace(/a[^cb]/gi , 'O'));//AbraCOabra
console.log(concat.replace(/ab*/gi , 'O'));//OrOCOdOrO
console.log(concat.replace(/ab?/gi , 'O'));//OrOCOdOrO
console.log(concat.replace(/a./gi , 'O'));//OrOOOra
console.log(concat.replace(/ab+/gi , 'O'));//OraCadOra
console.log('a  b   c\td'.replace(/\s/g , '-'));//a--b---c-d
console.log('a  b   c\td'.replace(/\s+/g , '-'));//a-b-c-d
console.log('a  b   c\td'.replace(/\s{1,3}/g , '-'));//a-b-c-d// 1à 3 espace
console.log('a  b   c\td'.replace(/\s{2,}/g , '-'));//a-b-c	d//2 à N espace
console.log('123.456'.replace(/\d/g , '0'));//000,000 = [0-9]
console.log('123.456'.replace(/\D/g , ','));//[^0-9]->123,456
console.log('123.456'.replace(/(\d+)\.(\d+)/g , 'rien'));//000,000 = [0-9]


