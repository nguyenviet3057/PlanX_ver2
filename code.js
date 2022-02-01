$("#h-bg").css({"border-right":"none"});
$("#p-bg,#p-filter").css("border-top-right-radius","9px");
$("#h-bg").css("background","none");
$("#home").css("background-image","url(home-w.png)");
$("#h-text").css("color","white");
$("#bg0").css("transform","translate(0%)");
if($("#h-text").css("color") != "rgb(255, 255, 255)"){
    $("#tab-home").mouseover(function(){
        $("#h-filter").css("backdrop-filter","invert(1)");
    });
    $("#tab-home").mouseout(function(){
        $("#h-filter").css("backdrop-filter","invert(0)");
    });
};
if($("#p-text").css("color") != "rgb(255, 255, 255)"){
    $("#tab-product").mouseover(function(){
        console.log($("#p-text").css("color"))
        $("#p-filter").css("backdrop-filter","invert(1)");
    });
    $("#tab-product").mouseout(function(){
        $("#p-filter").css("backdrop-filter","invert(0)");
    });
}
if($("#c-text").css("color") != "rgb(255, 255, 255)"){
    $("#tab-contact").mouseover(function(){
        $("#c-filter").css("backdrop-filter","invert(1)");
    });
    $("#tab-contact").mouseout(function(){
        $("#c-filter").css("backdrop-filter","invert(0)");
    });
};
if($("#s-text").css("color") != "rgb(255, 255, 255)"){
    $("#tab-support").mouseover(function(){
        $("#s-filter").css("backdrop-filter","invert(1)");
    });
    $("#tab-support").mouseout(function(){
        $("#s-filter").css("backdrop-filter","invert(0)");
    });
};
$("#slogan0 h1").animate({opacity: "1"}, 800, function(){
    $("#slogan0 h2").delay(500).animate({height: "100%"}, 800,"linear");
});
function sloganTransition(x){
    switch (x) {
        case 0:
            $("#bg3").css("animation","slide-out 1s ease");
            $("#slogan3 h2, #slogan1 h2, #slogan2 h2").animate({height: "0%"}, 300, "linear");
            $("#slogan3 h1, #slogan1 h1, #slogan2 h1").animate({opacity: "0"}, 300, "linear");
            $("#bg3,#bg1,#bg2").css("transform","translateX(100%)");
            $("#bg0").css("animation","slide-in 1s ease");
            $("#slogan0 h1").animate({opacity: "1"}, 800, function(){
                $("#slogan0 h2").delay(500).animate({height: "100%"}, 800,"linear");
            });
            $("#bg0").css("transform","translateX(0%)");
            $("#btn0").css("box-shadow","none");
            $("#btn1,#btn2,#btn3").css("box-shadow","0px 0px 9px 6px white");
            break;
        case 1:
            $("#bg0").css("animation","slide-out 1s ease");
            $("#slogan0 h2, #slogan2 h2, #slogan3 h2").animate({height: "0%"}, 300, "linear");
            $("#slogan0 h1, #slogan2 h1, #slogan3 h1").animate({opacity: "0"}, 300, "linear");
            $("#bg0,#bg2,#bg3").css("transform","translateX(100%)");
            $("#bg1").css("animation","slide-in 1s ease");
            $("#slogan1 h1").animate({opacity: "1"}, 800, function(){
                $("#slogan1 h2").delay(500).animate({height: "100%"}, 800,"linear");
            });
            $("#bg1").css("transform","translateX(0%)");
            $("#btn1").css("box-shadow","none");
            $("#btn2,#btn3,#btn0").css("box-shadow","0px 0px 9px 6px white")
            break;
        case 2:
            $("#bg1").css("animation","slide-out 1s ease");
            $("#slogan1 h2, #slogan3 h2, #slogan0 h2").animate({height: "0%"}, 300, "linear");
            $("#slogan1 h1, #slogan3 h1, #slogan0 h1").animate({opacity: "0"}, 300, "linear");
            $("#bg1,#bg3,#bg0").css("transform","translateX(100%)");
            $("#bg2").css("animation","slide-in 1s ease");
            $("#slogan2 h1").animate({opacity: "1"}, 800, function(){
                $("#slogan2 h2").delay(500).animate({height: "100%"}, 800,"linear");
            });
            $("#bg2").css("transform","translateX(0%)");
            $("#btn2").css("box-shadow","none");
            $("#btn3,#btn0,#btn1").css("box-shadow","0px 0px 9px 6px white")
            break;
        case 3:
            $("#bg2").css("animation","slide-out 1s ease");
            $("#slogan2 h2, #slogan0 h2, #slogan1 h2").animate({height: "0%"}, 300, "linear");
            $("#slogan2 h1, #slogan0 h1, #slogan1 h1").animate({opacity: "0"}, 300, "linear");
            $("#bg2,#bg0,#bg1").css("transform","translateX(100%)");
            $("#bg3").css("animation","slide-in 1s ease");
            $("#slogan3 h1").animate({opacity: "1"}, 800, function(){
                $("#slogan3 h2").delay(500).animate({height: "100%"}, 800,"linear");
            });
            $("#bg3").css("transform","translateX(0%)");
            $("#btn3").css("box-shadow","none");
            $("#btn0,#btn1,#btn2").css("box-shadow","0px 0px 9px 6px white")
            break;
        default:
            alert("Error! Please press F5 to reset the page!");
    }
}
var myTimeout0, myTimeout1, myTimeout2, myTimeout3;
function slogan_transition(){
    myTimeout1 = setTimeout(sloganTransition,6000,1);
    myTimeout2 = setTimeout(sloganTransition,12000,2);
    myTimeout3 = setTimeout(sloganTransition,18000,3);
    myTimeout0 = setTimeout(sloganTransition,24000,0);
}
function slogan_transition0(){
    myTimeout1 = setTimeout(sloganTransition,6000,1);
    myTimeout2 = setTimeout(sloganTransition,12000,2);
    myTimeout3 = setTimeout(sloganTransition,18000,3);
    myTimeout0 = setTimeout(sloganTransition,24000,0);
}
function slogan_transition1(){
    myTimeout2 = setTimeout(sloganTransition,6000,2);
    myTimeout3 = setTimeout(sloganTransition,12000,3);
    myTimeout0 = setTimeout(sloganTransition,18000,0);
    myTimeout1 = setTimeout(sloganTransition,24000,1);
}
function slogan_transition2(){
    myTimeout2 = setTimeout(sloganTransition,6000,3);
    myTimeout3 = setTimeout(sloganTransition,12000,0);
    myTimeout0 = setTimeout(sloganTransition,18000,1);
    myTimeout1 = setTimeout(sloganTransition,24000,2);
}
function slogan_transition3(){
    myTimeout2 = setTimeout(sloganTransition,6000,0);
    myTimeout3 = setTimeout(sloganTransition,12000,1);
    myTimeout0 = setTimeout(sloganTransition,18000,2);
    myTimeout1 = setTimeout(sloganTransition,24000,3);
}
slogan_transition();
var myInterval = setInterval(slogan_transition,24000);
$("#btn0").click(function(){
    if ($("#btn0").css("cursor") == "pointer"){
        $("#btn1,#btn2,#btn3,#btn0").css("cursor","auto");
        clearTimeout(myInterval);
        clearTimeout(myTimeout0);
        clearTimeout(myTimeout1);
        clearTimeout(myTimeout2);
        clearTimeout(myTimeout3);
        clearInterval(myInterval);
        $("#bg3,#bg1,#bg2").css("transform","translateX(100%)");
        $("#bg3,#bg1,#bg2").css("animation","none");
        sloganTransition(0);
        slogan_transition0();
        myInterval = setInterval(slogan_transition0,24000);
        setTimeout(function(){
            $("#btn1,#btn2,#btn3,#btn0").css("cursor","pointer");
        },2000);
    }
});
$("#btn1").click(function(){
    if ($("#btn1").css("cursor") == "pointer"){
        $("#btn0,#btn2,#btn3,#btn1").css("cursor","auto");
        clearTimeout(myInterval);
        clearTimeout(myTimeout0);
        clearTimeout(myTimeout1);
        clearTimeout(myTimeout2);
        clearTimeout(myTimeout3);
        clearInterval(myInterval);
        $("#bg0,#bg2,#bg3").css("transform","translateX(100%)");
        $("#bg0,#bg2,#bg3").css("animation","none");
        sloganTransition(1);
        slogan_transition1();
        myInterval = setInterval(slogan_transition1,24000);
        setTimeout(function(){
            $("#btn0,#btn2,#btn3,#btn1").css("cursor","pointer");
        },2000);
    }
});
$("#btn2").click(function(){
    if ($("#btn2").css("cursor") == "pointer"){
        $("#btn0,#btn1,#btn3,#btn2").css("cursor","auto");
        clearTimeout(myInterval);
        clearTimeout(myTimeout0);
        clearTimeout(myTimeout1);
        clearTimeout(myTimeout2);
        clearTimeout(myTimeout3);
        clearInterval(myInterval);
        $("#bg1,#bg3,#bg0").css("transform","translateX(100%)");
        $("#bg1,#bg3,#bg0").css("animation","none");
        sloganTransition(2);
        slogan_transition2();
        myInterval = setInterval(slogan_transition0,24000);
        setTimeout(function(){
            $("#btn0,#btn1,#btn3,#btn2").css("cursor","pointer");
        },2000);
    }
});
$("#btn3").click(function(){
    if ($("#btn3").css("cursor") == "pointer"){
        $("#btn0,#btn1,#btn2,#btn3").css("cursor","auto");
        clearTimeout(myInterval);
        clearTimeout(myTimeout0);
        clearTimeout(myTimeout1);
        clearTimeout(myTimeout2);
        clearTimeout(myTimeout3);
        clearInterval(myInterval);
        $("#bg2,#bg0,#bg1").css("transform","translateX(100%)");
        $("#bg2,#bg0,#bg1").css("animation","none");
        sloganTransition(3);
        slogan_transition3();
        myInterval = setInterval(slogan_transition0,24000);
        setTimeout(function(){
            $("#btn0,#btn1,#btn2,#btn3").css("cursor","pointer");
        },2000);
    }
});
$(window).blur(function(){
    clearTimeout(myInterval);
    clearTimeout(myTimeout0);
    clearTimeout(myTimeout1);
    clearTimeout(myTimeout2);
    clearTimeout(myTimeout3);
    clearInterval(myInterval);
});
$(window).focus(function(){
    slogan_transition();
    myInterval = setInterval(slogan_transition,24000);
});

$("#h-filter").click(function(){
    if ($("#h-bg").css("background") != "none"){
        slogan_transition();
        myInterval = setInterval(slogan_transition,24000);
        $("#btn0").click(function(){
            if ($("#btn0").css("cursor") == "pointer"){
                $("#btn1,#btn2,#btn3,#btn0").css("cursor","auto");
                clearTimeout(myInterval);
                clearTimeout(myTimeout0);
                clearTimeout(myTimeout1);
                clearTimeout(myTimeout2);
                clearTimeout(myTimeout3);
                clearInterval(myInterval);
                $("#bg3,#bg1,#bg2").css("transform","translateX(100%)");
                $("#bg3,#bg1,#bg2").css("animation","none");
                sloganTransition(0);
                slogan_transition0();
                myInterval = setInterval(slogan_transition0,24000);
                setTimeout(function(){
                    $("#btn1,#btn2,#btn3,#btn0").css("cursor","pointer");
                },2000);
            }
        });
        $("#btn1").click(function(){
            if ($("#btn1").css("cursor") == "pointer"){
                $("#btn0,#btn2,#btn3,#btn1").css("cursor","auto");
                clearTimeout(myInterval);
                clearTimeout(myTimeout0);
                clearTimeout(myTimeout1);
                clearTimeout(myTimeout2);
                clearTimeout(myTimeout3);
                clearInterval(myInterval);
                $("#bg0,#bg2,#bg3").css("transform","translateX(100%)");
                $("#bg0,#bg2,#bg3").css("animation","none");
                sloganTransition(1);
                slogan_transition1();
                myInterval = setInterval(slogan_transition1,24000);
                setTimeout(function(){
                    $("#btn0,#btn2,#btn3,#btn1").css("cursor","pointer");
                },2000);
            }
        });
        $("#btn2").click(function(){
            if ($("#btn2").css("cursor") == "pointer"){
                $("#btn0,#btn1,#btn3,#btn2").css("cursor","auto");
                clearTimeout(myInterval);
                clearTimeout(myTimeout0);
                clearTimeout(myTimeout1);
                clearTimeout(myTimeout2);
                clearTimeout(myTimeout3);
                clearInterval(myInterval);
                $("#bg1,#bg3,#bg0").css("transform","translateX(100%)");
                $("#bg1,#bg3,#bg0").css("animation","none");
                sloganTransition(2);
                slogan_transition2();
                myInterval = setInterval(slogan_transition0,24000);
                setTimeout(function(){
                    $("#btn0,#btn1,#btn3,#btn2").css("cursor","pointer");
                },2000);
            }
        });
        $("#btn3").click(function(){
            if ($("#btn3").css("cursor") == "pointer"){
                $("#btn0,#btn1,#btn2,#btn3").css("cursor","auto");
                clearTimeout(myInterval);
                clearTimeout(myTimeout0);
                clearTimeout(myTimeout1);
                clearTimeout(myTimeout2);
                clearTimeout(myTimeout3);
                clearInterval(myInterval);
                $("#bg2,#bg0,#bg1").css("transform","translateX(100%)");
                $("#bg2,#bg0,#bg1").css("animation","none");
                sloganTransition(3);
                slogan_transition3();
                myInterval = setInterval(slogan_transition0,24000);
                setTimeout(function(){
                    $("#btn0,#btn1,#btn2,#btn3").css("cursor","pointer");
                },2000);
            }
        });
        $("#pbg").css("display","none");
    }
})
$("#p-filter").click(function(){
    if ($("#p-bg").css("background") != "none"){
        $("#h-bg").css("background-color","white");
        $("#home").css("background-image","url(home.png)");
        $("#h-text").css("color","black");
        $("#h-bg").css("border-right","solid black 5px");
        $("#h-filter").css("border-bottom-right-radius","9px");
        $("#p-filter").css("border-bottom-right-radius","none");
        $("#p-bg").css({"border-right":"none","background":"none"});
        $("#product").css("background-image","url(product-w.png)");
        $("#p-text").css("color","white");
        $("#pbg").css("display","block");
        clearTimeout(myInterval);
        clearTimeout(myTimeout0);
        clearTimeout(myTimeout1);
        clearTimeout(myTimeout2);
        clearTimeout(myTimeout3);
        clearInterval(myInterval);
        // console.log($("#p-text").css("color"));
    }
})