
window.onload=function(){
    console.log(formulaire.nom.value);
    this.age.setCustomValidity("Age est incorrect");
    formulaire.nom.value = "saisir un nom";

    formulaire.age.oninput=function(){
        if (this.validity.valid) {
            this.setCustomValidity("Age est incorrect")
        }else{
            this.setCustomValidity("")
        }
    }
    formulaire.adresse.oninput=function(){
        if (this.validity.typeMismatch) {
            this.setCustomValidity("Email est incorrect")
        }else{
            this.setCustomValidity("")
        }
    }

    formulaire.onsubmit=function(){
        if (this.nom.value=="saisir un nom") {
            alert(this.nom.value+"est invalide");
            return false;
        }
    };
    //  console.log(document.forms["formulaire"]["nom"].value);
    //  console.log(document.forms[0]["nom"].value);
    //  console.log(document.querySelector("form[name='formulaire'] input[name='nom']").value);

    document.getElementById("envoi").onclick=function(){
        if (formulaire.checkValidity()) {
            formulaire.submit();
        }
        
    }
}