"use strict";
/**********************************************\
|***************Variables en js****************|
\**********************************************/
function variables() {
    var monVariable;
    monVariable = "Hello world";
    //console.log(monVariable);
    var monEpouse = "Andrea!!!";
    //console.log(monEpouse);
    var a;
    //console.log(a);
    var b;
    b = 12;
    //console.log(b);
    //console.log(typeof(b));
    //console.log(typeof(a));
    var c = true;
    //console.log(typeof(c));
    var c = 1;
    //console.log(typeof(c));
    //console.info(typeof(c));
    /********************************************************/
    /*OBJET en JS*/
    var d = {
        couleur: "blue",
        marque: "Caran d'ache"
    };
    //console.log(typeof (d));
    //console.log(d.couleur);
    //console.log(d.marque);
    /********************************************************/
    /*Fonction en JS sans parametre */
    var manger = function () {
        console.log("je mange donc j'essuie");
    };
    //console.log( typeof(manger));
    //manger();
    /*Fonction en JS avec parametre */
    var ecrire = function (texte) {
        if (typeof (texte) === "undefined")
            console.log("texte vide");
        else
            console.log(texte);
    };
    //ecrire("Sofía!!!");
    //ecrire();
    //console.debug(window.b);
    window.e = {
        p: 12
    };
    //console.log(e);
    e.k = "mama";
    e.f = function () {
        console.log(this.k);
    };
    //e.f();
    var i = 21;
    var fun = function () {
        var i = window.i - 1;
        var j = window.i - 1;
        console.log(i);
    };
    //fun();
    //console.log(i);
    var m, n = 45;
    //console.log(m, n);
    var t = [];
    //console.log(typeof(t));
    var t1 = [
        12,
        "treize",
        { g: 14 },
        [15]
    ];
    //Delete les elements du tableau
    //console.log(t1);
    //console.log(t1[1]);
    //console.log(t1[t1.length - 1]);
    t1[6] = "six";
    //console.log(t1.length);
    delete t1[3];
    //console.log(t1.length);
    //console.log(t1[3]);
    delete t1[t1.length - 1];
    //console.log(t1.length);
    //console.log(t1);
    t1.splice(4, 1);
    //console.log(t1.length);
    t1.splice(4, 2);
    //console.log(t1.length);
    //console.log(t1[2]);
    t1.splice(4, 0, "quatre", "cinq");
    //console.log(t1);
    t1.push("sept", "huit");
    t1.pop();
    t1.unshift(10, 11);
    t1.shift();
    var index = t1.indexOf("treize"); //2
    var index = t1.indexOf("mille", 2); //-1
    var index = t1.indexOf("treize", 3); //-1!!!!!
    var index = t1.indexOf("treize", 2); //2
    //console.log(index);
    //cherche par la fin
    var index = t1.lastIndexOf("treize"); //2
    //console.log(index);
    //Tableau rangée avec la fonction sort
    var t2 = ["D", "A", "C", "c", "b", "Z"];
    t2.sort();
    //console.log(t2.sort());
    var triAlpha = function (c1, c2) {
        return c1.localeCompare(c2, "fr");
    };
    t2.sort(triAlpha);
    //console.log(t2.sort(triAlpha));
    var t3 = t1.concat(t2);
    //console.log(t3);
    var n = 0;
    var m = 10; //10
    m = m + 1; //11
    m++; //12
    m += 1; //13
    m--; //12
    m -= 1; //11
    m *= 2; //22
    m /= 3; //7,333333333
    m /= n; //Infinity
    m -= Infinity; //NaN (not a number)
    m += Infinity; //NaN
    m = 15;


    console.log(m % 2);//(m modulo 2)=1
}
/**********************************************\
|*Concatenation et remplaçament de caractères**|
\**********************************************/

function Chaines() {
    var c = Chaines();
    var concat = ('albert' + ' ' + 'Einstein').toUpperCase();
    //var concat= concat.toUpperCase();
    concat = concat.concat(' est UN genie').toLowerCase();
    concat = concat.replace('einstein', 'Algoud').toLowerCase();
    concat = concat.replace(/a/g, 'U');
    concat = concat.replace(/[iu]/g, 'O');
    // concat="AbraCadabra";
    // console.log(concat.replace(/A/g , 'O'));//ObraCadabra
    // console.log(concat.replace(/a/, 'O'));//AbrOCadabra
    // console.log(concat.replace(/a/gi , 'O'));//ObrOCOdObrO
    // console.log(concat.replace(/a[cb]/gi , 'O'));//OrOadOra
    // console.log(concat.replace(/a(c|b)/gi , 'O'));//OrOadOra
    // console.log(concat.replace(/a[b-e]/gi , 'O'));//OrOOOra
    // console.log(concat.replace(/a[^cb]/gi , 'O'));//AbraCOabra
    // console.log(concat.replace(/ab*/gi , 'O'));//OrOCOdOrO
    // console.log(concat.replace(/ab?/gi , 'O'));//OrOCOdOrO
    // console.log(concat.replace(/a./gi , 'O'));//OrOOOra
    // console.log(concat.replace(/ab+/gi , 'O'));//OraCadOra
    // console.log('a  b   c\td'.replace(/\s/g , '-'));//a--b---c-d
    // console.log('a  b   c\td'.replace(/\s+/g , '-'));//a-b-c-d
    // console.log('a  b   c\td'.replace(/\s{1,3}/g , '-'));//a-b-c-d// 1à 3 espace
    // console.log('a  b   c\td'.replace(/\s{2,}/g , '-'));//a-b-c	d//2 à N espace
    // console.log('123.456'.replace(/\d/g , '0'));//000.000 = [0-9]
    // console.log('123.456'.replace(/\D/g , ','));//[^0-9]->123,456
    // console.log('123.456'.replace(/(\d+)\.(\d+)/g , 'rien'));//rien
    // console.log('123456'.replace(/(\d+).(\d+)/g , '$1 et $2'));//1234 et 6 Pour comprendre le goupe capturant
    // console.log('123.456'.replace(/(\d+)\.(\d+)/g , '$1,$2'));//123,456
    // console.log('a valhalla man is a happy man'.replace(/\ba\b/g , 'A'));
    concat = "AbraCadaBra";
    console.log(concat.search('cada')); //-1
    console.log(concat.search(/cada/)); //-1
    console.log(concat.search(/cada/i)); //4
    console.log(concat.indexOf('cada')); //-1
    console.log(concat.indexOf('Cada')); //4
    console.log(concat.endsWith('Bra')); //True
    console.log(concat.startsWith('Abra')); //True
    console.log(concat.substring(5)); //adaBra
    console.log(concat.substring(5, 8)); //ada a partir de 5 à 8 pas compris
    console.log(concat.substring(5, 2)); //raC
    console.log('  du texte  '.trim().length); //8 caractère
    console.log('  du texte  '.trimLeft().length); //10 caractère
    console.log('  du texte  '.trimRight().length); //10 caractère
    console.log('4567'.match(/\d/)); //0:"4" index:0 input:"4567"length:1
    console.log('4567'.match(/\d/g)); //(4) ["4", "5", "6", "7"]length:4
    console.log('4567'.match(/mama/g)); //null
    console.log('1,5,,6,100'.split(",")); //["1", "5","", "6", "100"]
    console.log('1,5,,6,100'.split(/\D+/)); //["1", "5", "6", "100"]
    for (var c = 0; c < 300; c++) {
        console.log(c, String.fromCodePoint(c));
    }
    return c;
}
/**********************************************\
|***************Bucle test ********************|
\**********************************************/
function bucleFor() {
	var ti = [4, 5, 6, 7];
	var somme = 0;
	var a;
	for (var index = 0; index < ti.length; index++) {
		somme += ti[index];
		a = ti[index];
		console.log(a);
	}
	;
	console.log("Resultat de la somme= " + somme);
	console.log("Index: " + index);
	var z = 10;
	console.log(z++); //10
	console.log(z); //11
	console.log(--z);
}

function conditionAND() {
	for (var i = 5; i > 0; i--) {
		console.log(i);
	}
	return i;
}

function conditionOR() {
	//Bucle infinit
	for (var index = 5; index > 0 || index < 3; index--) {
		console.log(index);
		if (index>10 || index<-10) {
			break;
		}
	}	
}



function doubleBucleDebugger(){

	for (var i = 1 , arret = false; i <= 5 && !arret; i++) {
		
		for (var j = 1; j <= 5; j++) {
			console.log(i + '*' + j + '= s' + (i * j));
			if (i*j>10) {
				arret = !arret;
				break;
			}
		}
	}
}


function doubleBucle() {
	externe: for (var i = 1; i <= 5; i++) {
		interne: for (var j = 1; j <= 5; j++) {
			console.log(i + '*' + j + '= s' + (i * j));
			if (i * j > 10) {
				break externe;
			}
		}
	}
	return { i, j };
}

console.log("***************************");
var ti = [];
ti[2]=5; ti[4]=7;
ti.p='papa';
var index =0;

for (index in ti){
	console.log(ti[index]);
}

console.log("***************************");
for (index =0; index < ti.length; index++) {
	console.log(ti[index]);
	
}

var o = {
    p1:"mama",
    f1:function(){
        console.log(this);
    }
};

var index=0;
for (index in o) {
    console.log(index+"="+o[index]);
};

var index =0;
while(index < ti.length){
    console.log(index+"-"+ti[index]);
    index++;
}

var t=100;
while(true){
    t-=t%8;
    if (--t<=0) {
        break;   
    }
    console.log(t);
}

console.log("***************************");

index =0;
do{
    console.log(index+-+ti[index]);
    index++;
}while(index<ti.length);

console.log("***************************");
var h = '10';
console.log(h==10);//true
console.log(h + 10);//'105'
console.log(h * 5);//50
console.log(h===10);//false. Compare aussi le type.
console.log(h=100)//100
if (h="100"){
    console.log("vrai");
}
h="10";
console.log(h!=10);//false
console.log(h!==10);//true
console.log(5+2*3);//true

var n = null;
var m = undefined;
var bb;
console.log(typeof n);//objet
console.log(typeof m);//undefined
console.log(typeof bb);//undefined
console.log(m==bb);//true
console.log(n==m);//true
console.log(n===m);//false
// if (!=m) {
//     console.log("WTF");//WTF
// }

if (m==false) {//nope
    console.log("WTF again");
}

var j=10, k=10;
if (j++ == 10 && k-- == 10) 
{
    console.log(j+" "+k);
}

var j=10, k=10;
if (j++ == 10 || k-- == 10)
{
    console.log(j+" "+k);
}

var j=10, k=10;
if (j++ == 8 | k-- == 10) //1
{
    console.log(j+" "+k);
}

j=10;
var t = (j==10 ? "dix" : "autre");
console.log('Ternaire simple:' +t);

var t = (j==10 ? "dix" :
                 (j==11 ? "onze" : "autre"));
console.log('Ternaire double:'+t);

switch (j) {
    case 10:
        t='dix';
        break;
    case 11:
        t='onze';
        break;
    default:
        t='autre';
        break;
}
console.log('switch:'+ t);






