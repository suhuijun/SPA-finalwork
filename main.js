// 定义样式暂存区

var fontfam = "";
var fontwei = "";
var fontsty = "";
var fontsiz = 15;

function tuichu(){
    $("#ztck").css("display","none");
};
function baocun(){
    $(".bjq").css("font-family",fontfam);
    $(".bjq").css("font-weight",fontwei);
    $(".bjq").css("font-style",fontsty);
    $(".bjq").css("font-size",fontsiz);
    $("#ztck").css("display","none");
}


$("#djsj").click(function(){
    $("#ztck").css("display","block")
});

// 确定

$("#queding").click(baocun);

// 退出

$("#quxiao").click(tuichu);
$(".fhx").click(tuichu);

// 变换字体

$("#zt1").click(function(){
    $("#ys").css("font-family","Agency FB");
    $(".ztxxlx").text("Agency FB");
    fontfam = "Agency FB";
});
$("#zt2").click(function(){
    $("#ys").css("font-family","Algerian");
    $(".ztxxlx").text("Algerian");
    fontfam = "Algerian";
});
$("#zt3").click(function(){
    $("#ys").css("font-family","Arial");
    $(".ztxxlx").text("Arial");
    fontfam = "Arial";
});
$("#zt4").click(function(){
    $("#ys").css("font-family","Arial Rounded MT");
    $(".ztxxlx").text("Arial Rounded MT");
    fontfam = "Arial Rounded MT";
});
$("#zt5").click(function(){
    $("#ys").css("font-family","Axure Handwriting");
    $(".ztxxlx").text("Axure Handwriting");
    fontfam = "Axure Handwriting";
});
$("#zt6").click(function(){
    $("#ys").css("font-family","Bahnschrift");
    $(".ztxxlx").text("Bahnschrift");
    fontfam = "Bahnschrift";
});
$("#zt7").click(function(){
    $("#ys").css("font-family","Baskerville Old Face");
    $(".ztxxlx").text("Baskerville Old Face");
    fontfam = "Baskerville Old Face";
});
$("#zt8").click(function(){
    $("#ys").css("font-family","Bauhaus 93");
    $(".ztxxlx").text("Bauhaus 93");
    fontfam = "Bauhaus 93";
});
$("#zt9").click(function(){
    $("#ys").css("font-family","Bell MT");
    $(".ztxxlx").text("Bell MT");
    fontfam = "Bell MT";
});
$("#zt10").click(function(){
    $("#ys").css("font-family","Berlin Sans FB");
    $(".ztxxlx").text("Berlin Sans FB");
    fontfam = "Berlin Sans FB";
});
$("#zt11").click(function(){
    $("#ys").css("font-family","Bernard MT");
    $(".ztxxlx").text("Bernard MT");
    fontfam = "Bernard MT";
});
$("#zt12").click(function(){
    $("#ys").css("font-family","BlackAdder ITC");
    $(".ztxxlx").text("BlackAdder ITC");
    fontfam = "BlackAdder ITC";
});

//字形更改

$("#zx1").click(function(){
    $("#ys").css("font-weight","normal");
    $("#ys").css("font-style","normal");
    $(".zxxxlx").text("常规");
    fontwei = "normal";
    fontsty = "normal";
});
$("#zx2").click(function(){
    $("#ys").css("font-weight","normal");
    $("#ys").css("font-style","italic");
    $(".zxxxlx").text("斜体");
    fontwei = "normal";
    fontsty = "italic";
});
$("#zx3").click(function(){
    $("#ys").css("font-weight","bold");
    $("#ys").css("font-style","normal");
    $(".zxxxlx").text("粗体");
    fontwei = "bold";
    fontsty = "normal";
});
$("#zx4").click(function(){
    $("#ys").css("font-weight","bold");
    $("#ys").css("font-style","italic");
    $(".zxxxlx").text("粗偏斜体");
    fontwei = "bold";
    fontsty = "italic";
});

//改变字号
$("#dx1").click(function(){
    $("#ys").css("font-size",8);
    $(".dxxxlx").text(8);
    fontsiz = 8;
});
$("#dx2").click(function(){
    $("#ys").css("font-size",9);
    $(".dxxxlx").text(9);
    fontsiz = 9;
});
$("#dx3").click(function(){
    $("#ys").css("font-size",10);
    $(".dxxxlx").text(10);
    fontsiz = 10;
});
$("#dx4").click(function(){
    $("#ys").css("font-size",11);
    $(".dxxxlx").text(11);
    fontsiz = 11;
});
$("#dx5").click(function(){
    $("#ys").css("font-size",12);
    $(".dxxxlx").text(12);
    fontsiz = 12;
});
$("#dx6").click(function(){
    $("#ys").css("font-size",14);
    $(".dxxxlx").text(14);
    fontsiz = 14;
});
$("#dx7").click(function(){
    $("#ys").css("font-size",16);
    $(".dxxxlx").text(16);
    fontsiz = 16;
});
$("#dx8").click(function(){
    $("#ys").css("font-size",18);
    $(".dxxxlx").text(18);
    fontsiz = 18;
});
$("#dx9").click(function(){
    $("#ys").css("font-size",20);
    $(".dxxxlx").text(20);
    fontsiz = 20;
});
$("#dx10").click(function(){
    $("#ys").css("font-size",22);
    $(".dxxxlx").text(22);
    fontsiz = 22;
});
$("#dx11").click(function(){
    $("#ys").css("font-size",24);
    $(".dxxxlx").text(24);
    fontsiz = 24;
});
$("#dx12").click(function(){
    $("#ys").css("font-size",26);
    $(".dxxxlx").text(26);
    fontsiz = 26;
});
$("#dx13").click(function(){
    $("#ys").css("font-size",28);
    $(".dxxxlx").text(28);
    fontsiz = 28;
});
$("#dx14").click(function(){
    $("#ys").css("font-size",36);
    $(".dxxxlx").text(36);
    fontsiz = 36;
});
$("#dx15").click(function(){
    $("#ys").css("font-size",48);
    $(".dxxxlx").text(48);
    fontsiz = 48;
});
$("#dx16").click(function(){
    $("#ys").css("font-size",72);
    $(".dxxxlx").text(72);
    fontsiz = 72;
});

//更改演示
$("#eng").click(function(){
    $(".ys").text("AaBbYyZz");
});
$("#chi").click(function(){
    $(".ys").text("误闯天家");
})

