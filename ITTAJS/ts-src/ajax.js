var res= document.getElementById("resultat");
if(window.XMLHttpRequest||window.ActiveXObject){
if(window.XMLHttpRequest)
    var req = new XMLHttpRequest();
    else
    {
        try{
            var req = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e){
            var req = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
}
else{
    alert("PAS d'AJAX");
}
req.open("GET", "Data.json", false);
req.send();
console.log(req);
var o = JSON.parse (req.responseText);
console.log(o.nom);
res.innerText = o.nom +" "+ o.prenom[0];


