
// var res= document.getElementById("resultat");
//         if(window.XMLHttpRequest || window.ActiveXObject){
//             if(window.XMLHttpRequest)
//                 var req= new XMLHttpRequest();
//             else
//                 {
//                     try{
//                         var req=new ActiveXObject
//                             ("Msxml2.XMLHTTP");
//                     }
//                     catch(e){
//                         var req=new ActiveXObject
//                             ("Microsoft.XMLHTTP");
//                     }
//                 }
//             }
//         else
//             alert("PAS D'AJAX");
//  /*
//          req.onreadystatechange=function(){
//             if(req.readyState==4){
//                 if(req.status==200){
//                     var o = JSON.parse(req.responseText);
//                     res.innerText=o.nom +" "+ o.prenoms[0];
//                 }
//                 else{
//                     res.innerText=req.statusText;
//                 }
//             }
//          };
// */
//         req.onprogress =function(){
//             console.log("ca arrive...");
//          };
//         req.onload=function(){
//                 if(req.status==200){
//                     var o = JSON.parse(req.responseText);
//                     res.innerText=o.nom +" "+ o.prenoms[0];
//                 }
//                 else{
//                     res.innerText=req.statusText;
//                 }
//         };
//         if (false) {//Ajax en pur JS
//             req.open("GET", "data.json", true);
//             req.send();
//             console.log(req);
//         }

// /**AJAX en JQuery */

// $.ajaxSetup({
//     async:false,
//     contentType:"application/json; charset=utf-8",
//     data:{"lang":["en","fr"]},
//     type:"get",
//     dataType:"json",
//     username:"titi",
//     password:""
// });

// $.ajax("data.json",
// {
//     //url:"data.json",
//     success:function (result) {
//         //console.log(result);
//         res.innerText = result.nom+" "+result.prenoms[0];
//     },
//     error:function(req, status, msg){
//         console.log(status+" "+req.status+" "+msg+" ");
//     },
//     cache:false,
//     timeout:3000,
//     async:false,
//     contentType:"application/json; charset=utf-8",
//     data:{"lang":["en","fr"]},
//     type:"get",
//     dataType:"json",
//     username:"titi",
//     password:"",
//     complete:function (req,status) {
//         console.log(status+" "+ req.status);
//     }
// });

// $.getJSON("data.json", {"lang":["en","fr"]},
//     function(result){
//         res.innerText = result.nom+" "+result.prenoms[0];
// }).done( function(result){
//     res.innerText += "done";

// }).fail(function(req){
//     res.innerText += "fail"+req.status + req.statusText;
// })

// $.get("data.json", {"lang":["en","fr"]},
//     function(result){
//         res.innerText ="<br>get="+ result.nom+" "+result.prenoms[0];
// },"json");



