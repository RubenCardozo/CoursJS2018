var compteur = 0;
var retard= 150;


this.onmessage=function(event){
    console.log(retard);
    if(event.data.action==="accelerer"){
        if (retard>10) {
            retard -=10;
        }   
    }else 
        if(event.data.action==="freiner"){
            if (retard<1000){
                retard +=100;
        }
    }else 
        if(event.data.action==="arreter"){
            this.close();
    }
};
//importScripts('//worker.com/work.js');




function genererValeur(){
    compteur++;
    postMessage(compteur);
    setTimeout(genererValeur, retard);
}  

genererValeur();
