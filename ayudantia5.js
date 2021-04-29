$(document).ready(function(){
    var Parrafos = $(".div1");
    Parrafos.mouseenter(function(){
        $(this).css("color", "yellow");

    });

    Parrafos.mouseleave(function(){
        $(this).css("color", "red");
    });


    var botonC = $("#botonCerrar");
    var botonA = $("#botonAbrir");
    botonC.click(function(){
        $("#ads").hide()
    });
    botonA.click(function(){
        $("#ads").show()
    });


    var botonwhat = $("#botondesconocido");
    botonwhat.click(function(){
        $("p").text("NYEHEHEHNYEHEHENYEHEHE")
        $("h1").text("JUST PAPYRUS")
        $("h2").text("JUST PAPYRUS")
        $("h3").text("JUST PAPYRUS")
        $("h4").text("JUST PAPYRUS")
    })
});

var saludo="hola mundo"
console.log(saludo);

