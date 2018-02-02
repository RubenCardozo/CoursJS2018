"use stric"
console.log("****************String********************");
var j= "John";
console.log("'j' est à "+typeof j);
console.log(j.constructor);//function String();
console.log([1,2].constructor);//function Array();
console.log({p:12}.constructor);//function Objet();

console.log("****************Number********************");
var i= 12;

console.log("'i' est à "+typeof i);
console.log(i.constructor);//function Number();
console.log(Number.isInteger(i));//static
console.log(parseFloat("m.21"));
console.log([1,2].constructor);//function Array();
console.log({p:12}.constructor);//function Objet();

console.log("****************Array********************");
var t = new Array(10);
console.log("'t' est à "+typeof t);
console.log(t.length);
t=new Array(new String("a"),"b","c");
console.log(t.length);
console.log(t);

console.log("**************Date et heure**************");
var date1= new Date('2018-03-02');
console.log(date1.getMonth());//2 -> demarre à 0!!!!
date1.setHours(14,59);
console.log(date1);
date1.setUTCHours(10,121);
console.log(date1);
console.log(date1.toUTCString());

console.log("*****************Objet******************");

var Voiture = function(marque, modele){
    // this.marque=marque,
    var _modele;
    this.getMarque= function () {
        return marque;
    };
    this.getModele= function () {
        return _modele;
    };
    this.setModele= function (modele) {
        //validation
        _modele = modele;
    };
    this.setModele(modele);
};

var audi= new Voiture ('Audi', 'A5');
console.log(audi.getMarque());//"Audi"
console.log(audi.getModele());//"A5"

var clio= new Voiture ('Renault', 'Clio');
console.log(clio.getMarque());//'Renault'
console.log(clio.getModele());//'Clio'

audi.setModele('S5');
console.log(audi.getModele());//'S5'

audi.modele="ay ay ay";
console.log(audi.getModele());
console.log(audi.constructor);
//Add de nouvelles functions
audi.getPrix = function(){
    return 50000;    
}

clio.getPrix = function(){
    return 30000;    
}
console.log(audi.getPrix());//50000
console.log(clio.getPrix());//30000

//function par prototype
Voiture.prototype.getMarqueMaj=function(){
    return this.getMarque().toUpperCase();
}

var getPrixTTC =function(){
    return this.getPrix()*1.25;
}

var getPrixTTC_TVA =function(tva){
    return this.getPrix() * (1+tva/100);
}

console.log("***** Prix TTC= "+getPrixTTC.call(audi));
console.log("***** Prix TTC avec TVA= "+getPrixTTC_TVA.call(audi,25));

console.log(audi.getMarqueMaj());//"AUDI"
console.log(clio.getMarqueMaj());//"RENAULT"



/***Humain *******/
var Humain = function(nom) {
    this.nom = nom;
};

Humain.prototype.getNom=function(){
    return this.nom;
}

var moi = new Humain("Ruben");
console.log(moi.getNom());
console.log(moi.constructor);
console.log(moi instanceof Humain);
console.log(moi instanceof Object);
console.log(12 instanceof Object);
console.log("h" instanceof Object);
console.log(String instanceof Object);

console.log("*****************Yodalique******************");

// Voiture.prototype.getMarque().call(audi);
// Voiture.prototype.getMarque.call
console.log(audi.getMarque.call());
audi.setModele.call(this,'A5');
console.log(audi.getModele.call());

console.log(Humain.prototype.getNom.call(moi));

console.log("*********Fonctions: Call et Apply*************");

var LaFonction = function(id, nom){
    console.log(id + "- "+ nom);
};

LaFonction(15,'Paul');
LaFonction.call(undefined, 25, 'Henri');
LaFonction.apply(undefined, [32, 'Marcel']);
console.log(Math.min.apply(null, [4,8,3,6]));//=console.log(Math.min(4,8,3,6));

var Rectangle =function(long, larg){
    this.long=long;// this0 rectangle courante
    this.larg=larg;
    Rectangle.prototype.getPerimetre=function() {
        return (this.long*Rectangle.multiplicateur  
                + this.long*Rectangle.multiplicateur);
    }
};

Rectangle.prototype.surface=function(){
    return this.long*this.larg; 
}

Rectangle.multiplicateur =2;

var Boite= function(long, larg, haut){
    Rectangle.call(this,long,larg);//this = La boite courante
    this.haut= haut;
};
Boite.prototype= Rectangle.prototype;//new Rectangule
Boite.prototype.constructor= Boite;

/***************Rectangle ********************/
console.log('/**Rectangle */');

var r1 = new Rectangle(10, 20);

console.log(r1 instanceof Rectangle);
console.log("Perimètre= "+ r1.getPerimetre());


/***************Boite ********************/
console.log('/**Boite */');

var b1 = new Boite(15, 20, 5);

console.log(b1 instanceof Boite);
console.log("Surface= "+b1.surface());
console.log(b1 instanceof Rectangle);

Rectangle.dessine=function(rect){
    if (rect && rect instanceof Rectangle) {
        console.log("Longueur="+rect.long+", et langeur= "+rect.larg);
    }else{
        console.log("pas un rectangle");
    }
   
}

Rectangle.dessine(r1);
Rectangle.dessine(b1);

var incremente=( 
    function () {
        var i= 1;
        return function(){
            return i++;
        }
    }
)();

console.log(incremente());
console.log(incremente());



function division(a,b) {
        if (b == 0){
            throw new Error ('division imposible');
        }
        return a/b
}

try{
    console.log(division(5,0));
}
catch(error){
    console.log(error);
    console.log(error.message+ ", error a la ligne "+ error.lineNumber);
}
console.log('fin');

