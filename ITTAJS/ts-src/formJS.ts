formulaire.nom.value="saisir un nom";

formulaire.age.oninput= function(){
    if(!this.validity.isvalid){
        this.setCustomValidity("Age est incorrect");
    }
    else{
        this.setCustomValidity("");
    }
};

formulaire.adresse.oninput = function () {
        if (this.validity.typeMismatch) {
           this.setCustomValidity("adresse email incorrecte");
        }
        else {
            this.setCustomValidity("");
        }
};

formulaire.onsubmit = function () {
if (this.nom.value == "saisir un nom") {
    alert(this.nom.value + " est invalide");
    return false;
}
return true;
};

document.getElementById("envoi").onclick=function(){
    var valid=true;
   /* pas sur IE
    formulaire.querySelectorAll("input").forEach(
        function(element ){
            if(!element.checkValidity()){ 
                valid=false;
            }
        }
    );*/
var inputs=formulaire.querySelectorAll("input");
Array.prototype.forEach.call(inputs, function (element) {
        if (!element.checkValidity()) {
            valid = false;
            return;
        }
    });
    /*pas sur IE
    if(valid && formulaire.onsubmit()){
           formulaire.submit(); 
    }  */
    if(valid)
    formulaire.envoi.click();
};  

console.log( formulaire.nom.value);
console.log(document.forms["formulaire"]["nom"].value);
console.log(document.forms[0]["nom"].value);
console.log(document.querySelector(
"form[name='formulaire'] input[name='nom']").value); 
