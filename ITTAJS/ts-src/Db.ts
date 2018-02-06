if (localStorage) {
   if (localStorage.getItem('vous')){//trouvé
    var s =localStorage.getItem('vous');
    var vous = JSON.parse(s);
    console.log(vous.nom+" "+vous.age);
    localStorage.removeItem("vous");//suppression vous
    localStorage.clear();// suppression tous les elements
   }else{
       var vousO={nom:'paul',age:25};
        localStorage.setItem('vous',JSON.stringify(vousO));//enregistré
        console.log("vous êtes enregistrés");
   }
}else {
    alert("pas de local storage");
}