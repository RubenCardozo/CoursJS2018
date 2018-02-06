var res= document.getElementById("resultat");
if(window.XMLHttpRequest||window.ActiveXObject){
if(window.XMLHttpRequest)
    var req = new XMLHttpRequest();
    else
    {
        try{
            var req = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch{
            var req = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
}
else{
    alert("PAS d'AJAX");
}
req.open("GET", "data.json", true);
