import * as $ from "jquery";
import "jquery-ui";

$(document).ready(function(){

    $("#premiere").text('hello ');

    var deux= $('#deuxieme');
    deux.html('<b>hello</b> <i>world</i>');
    console.log(deux.text());

    var divs = $('div')
    divs.append("<span> le span </span><br>");

    $("<span> le <b>span</b> again </span><br>").appendTo($('div'));
    divs.each(function (index, element) {
        $(element).append("<span> index= "+index+" </span><br>");
    });

    $('div>span').click(function () {
        //alert($(this).html());
        //$(this).remove();
        //$(this).hide();//display: none
        //$(this).css('visibility', 'hidden');
        //$(this).css({'background-color':'yellow', 'font-size':'200%'});
        //console.log($(this).css('font-size'));

        // $(this).addClass("orange");
        // $(this).parent().removeClass("laDiv");
        // $(this).css({'color':'white'});
        $(this)
            .addClass("orange")
            .css({'color':'brown'});
    })
    divs.prepend("Debut de la Div: ");//voir aussi prepent
    console.log($(document).width());
    console.log(deux.width());
    
    console.log(deux.innerWidth());
    console.log(deux.outerWidth());
    console.log(deux.outerWidth(true));

    divs.children("span").append("-").prepend("+");
    divs.first().children().eq(2).html("eq=2").siblings().text("collateraux");
    
    $("section").click(function(){
        var $section=$(this);
        divs.first().toggle(1000,function(){
            if ($(this).is(':visible')) {
                alert($section.text());
            }
        });
        divs.last().fadeOut(1500,function(){
            $(this).fadeIn(500);
        });

        $(this).animate({width:"50px", backgroundColor:"red"}
        ,3000,"easeOutBounce");

    });
    divs.wrapAll("<article class='orange'></article>");
});
