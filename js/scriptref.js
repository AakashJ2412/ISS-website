//localStorage.clear();
function tabfunc()  {
var formdat = document.getElementById("frm1");
var retdat = localStorage.getItem("JSONdat");
var data = JSON.parse(retdat);
var count = localStorage.getItem("cnt");
//console.log(count);
//console.log(formdat.elements[0].value);
if(count === null){
    count=0;
}
if(data === null){
    data = [];
}
for(var i=0;i<4;i++)
{
    data[count] = formdat.elements[i].value;
    count++; 
}
localStorage.setItem("JSONdat",JSON.stringify(data));
localStorage.setItem("cnt",count);
return false;
}

function updatetab(){
    var table=document.getElementById("myTable");
    var tbcnt = table.rows.length;
    //console.log(tbcnt);
    while(tbcnt > 2 ){
    table.deleteRow(tbcnt-1);
    tbcnt--;
}
var count2 = localStorage.getItem("cnt");
var retdat2 = localStorage.getItem("JSONdat");
var data2 = JSON.parse(retdat2);
for (var h=0;h<count2;h++)
{
    //console.log(data2[h]);
    if( h%4 === 0){
        var row = table.insertRow((h/4)+2);
        var cell = row.insertCell(h%4);
        cell.innerHTML = data2[h];
        continue;
    }
    var cell = row.insertCell(h%4);
    cell.innerHTML = data2[h];

}
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
    var elm = document.getElementById("main");
    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = elm.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
    //console.log(offset);
    window.scrollTo(0,offset-50);
  }

  function gotofunc(){
    window.scrollTo(0,0);
  }