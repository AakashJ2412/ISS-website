var n = localStorage.getItem('on_load_counter');

if (n === null) {
  n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);

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
function webcount1(){
  document.getElementById("fbutt").innerHTML="Number of Visitors is: "+ n;
}
function webcount2(){
  document.getElementById("fbutt").innerHTML="Display Visitor Count";
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
    var elm = document.getElementById("main2");
    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = elm.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
    //console.log(offset);
    window.scrollTo(0,offset-50);
  }

  function gotofunc(){
    window.scrollTo(0,0);
  }