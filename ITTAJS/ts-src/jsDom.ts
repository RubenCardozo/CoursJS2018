import * as $ from "jquery";

window.onload=function(){
    document.getElementById("premiere").innerHTML="<b>Premiere</b>";
    document.getElementById("premiere").innerText="<b>Premiere</b>";

    console.log(document.getElementsByTagName("div"));

    var divs = document.getElementsByTagName("div");
    divs[1].innerHTML = "deuxieme";

    for (var index = 0; index < divs.length; index++){
        divs[index].innerHTML="div " + index;
        console.log("+");  
    }
    // for (var index  in  divs) {
    //     divs[index].innerHTML="div-" + index;
    //     console.log("-");  
    // } A eviter
   
    var tdiv=Array.prototype.slice.call(divs,0);
    for (var index  in  tdiv) {
            divs[index].innerHTML="div-" + index;
            console.log("-");
    }
    
    tdiv.forEach(function(element, index){
        element.innerHTML="div +"+index;
    });

    console.log(document.getElementsByClassName('ladiv'));
    console.log(document.querySelectorAll(".ladiv,.titi"));
    var nodes = document.querySelectorAll((".ladiv,.titi"));

    var tnodes=Array.prototype.slice.call(nodes,0);
    tnodes.forEach(function(element, index){
        element.innerHTML="div **"+index;
    });
    console.log(document.querySelector("#premiere"));
    //pareil que = document.querySelectorAll("#premiere")[0];
    var deux=document.getElementById("deuxieme");
    var premier =document.getElementById("premiere");
    document.getElementById("premiere").addEventListener("click",
        function(){
            alert(this.innerHTML);
        }
    );
    document.getElementById("premiere").addEventListener("click",
        function(){
            alert(this.innerHTML + " again");
        }
    );
    document.getElementById("premiere").onclick=function(){
        alert(this.innerHTML);
    };
    document.getElementById("deuxieme").onmouseover=function(){
        alert(this.innerHTML);
        //document.removeEventListener("mouseover",... ,false);
        document.getElementById("deuxieme").onmouseover=undefined;
    };

    deux.style.backgroundColor="yellow";
    deux.style.width="100px";
    var par = document.createElement("p");
    par.innerHTML="Paragraphe";
    deux.appendChild(par);
    console.log(deux.childNodes.length);
    //deux.childNodes[0].remove();
    deux.removeChild(deux.childNodes[0]);
};  