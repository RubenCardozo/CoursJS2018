import * as $ from "jquery";
import "jquery-validation";

if (false) {//validation manuel
    
var $nom=$('input[name="nom"]');
var $form =$('form[name="formulaire"]');

$nom.val("saisir un nom");
$nom.after('<b id="erreurnom"></b>');
console.log($nom.val());
$("#envoi").click(function(){
    $form.submit();
});

$form.submit(function(){
   if ($nom.val()==="saisir un nom") {
       $("#erreurnom").text("Erreur de nom");
       $nom.addClass("invalid");
       return false;
   }else{
    $("#erreurnom").text("");
    $nom.removeClass('invalid');
   }
   
});
}


$(function(){

    $("#envoi").click(function(){
        if ($form.valid()) {
            alert($form.serialize());
        } 
    });   

    var $form =$('form[name="formulaire"]');

    $form.validate({
        rules:{
            nom:{
                required:true,
                maxlength:20,
                customVal:true
            },
            adresse:{
                email:true,
            },
            age:{
                 min:18,
                    max:150
            }
        },
        messages:{
            nom:{
                required:"nom obligatoire",
                maxlength: $.validator.format("taille max {0}")
            },
            adresse:"Email invalide",
            age:{
                min: $.validator.format("Age min {0}"),
                max: $.validator.format("Age max {0}")
            }
        },
        submitHandler:function(form){
            form.submit()
        }
    });

    $.validator.addMethod("customVal",function (value, element) {
        return !(/^saisir un nom$/i.test(value));
    },"maivais nom");

});
