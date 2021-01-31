var img1="../img/gal1.jpg";
var img2="../img/gal3.jpg";
var img3="../img/gal2.jpeg";
var img4="https://www.elsetge.cat/myimg/f/77-775139_doha-wallpaper-doha-skyline.jpg";
var img5="https://wallpaperplay.com/walls/full/2/5/f/244150.jpg";

function imgchange()
{
  var elem = document.getElementById("change");
    if(elem.src === img5){  
       elem.src = img1;
       return;
    }
    else if(elem.src === img4){
      elem.src = img5;
      return;
    }
    var pos = elem.src.search("img");
    var str = elem.src.slice(pos);

    str = "../"+str;
    //console.log(str);
    //console.log(elem.src);
    if(str === img1)
        elem.src = img2;
    else if(str === img2)
        elem.src = img3;
    else if(str === img3)
        elem.src = img4;
    else if(str === img4)
        elem.src = img5;
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 30px";
    document.getElementById("logo").style.paddingLeft = "10px";
    document.getElementById("navimg").width="60";
  } else {
    document.getElementById("navbar").style.padding = "25px 30px";
    document.getElementById("logo").style.paddingLeft = "2vw";
    document.getElementById("navimg").width="85";
    document.getElementById("navbar").style.paddingBottom= "5px";
}
}

function navfunc() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function gotofunc1(){
    var elm = document.getElementById("main");
    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = elm.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
    console.log(offset);
    window.scrollTo(0,offset-50);
  }

  function gotofunc(){
    window.scrollTo(0,0);
  }