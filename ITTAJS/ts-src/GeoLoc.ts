function reussie(position){
    console.log("longitude="+position.coords.longitude);
    console.log("latitude="+position.coords.latitude);
    if(position.coords.altitude){
        console.log("altitude=" + position.coords.altitude);
    }
    if (position.coords.speed) {
        console.log("vitesse=" + position.coords.speed);
    }
    //si position atteinte
    navigator.geolocation.clearWatch(id);
}
function erreur(error){
    switch (error.code) {
        case error.TIMEOUT:
            console.log("delai dépassé");
            break;
        case error.PERMISSION_DENIED:
            console.log("PAS D'AUTORISATION");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("POSITION INCONNUE");
            break;
        case error.UNKNOW_ERROR:
            console.log("erreur inconnue");
            break;
    }
}
var id; 
if(navigator.geolocation){
    //  navigator.geolocation.getCurrentPosition(reussie, erreur,
    //  {maximumAge: 60000, enableHighAccuracy: true, timeout: 10000});
id= navigator.geolocation.watchPosition(reussie, erreur,
    {maximumAge: 0, enableHighAccuracy: true, timeout: 10000})
}
else
{
    alert('pas de geolocalisation');
}