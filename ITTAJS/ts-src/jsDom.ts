import * as $ from "jquery";
import "jquery-ui"

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

    var _remove=function(){
        this.parentNode.removeChild(this);
    }
    if (!Text.prototype.remove) {
        Text.prototype.remove =_remove;
    }

    if (!Element.prototype.remove) {
        Element.prototype.remove =_remove;
    }

    deux.childNodes[1].remove();
    //deux.removeChild(deux.childNodes[0]);

    for (var i= 0; i < document.body.childNodes.length; i++) {
        //Attribute=2, Comment =8
        var n= document.body.childNodes[i];
        if (n.nodeType==3) {//Text
            console.log(n.nodeValue);
        }else{
            if (n.nodeType==1) {
                console.log(n.nodeName);
                //console.log(n.firstChild.nodeValue);
            };
        };
    };
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(screen.availWidth+" "+screen.width);
    console.log(screen.availHeight+" "+screen.height);
    console.log(navigator.userAgent);
    console.log(navigator.cookieEnabled);
    console.log(location.href);
    //location.href="http://www.google.com"
    console.log(history.length);
    //history.back();

    var id = setInterval(doIt,500); 
    var n=0;
    function doIt(){
        console.log("just do it again"+ n);
        if (n++ >= 5) {
            clearInterval(id);
        }
    }
    var idt= setTimeout(doitLater, 300);
    function doitLater(){
        console.log("just do it doitLater");
        clearTimeout(idt);
    }


};  

