console.log('Loaded!');
var element=document.getElementById("ashwin");
element.innerHTML="HELLO";
var img=document.getElementById("ash");
var rightmargin=0;
function rightSide(){
    rightmargin=10;
    img.style.marginLeft=rightmargin+"px";
}
img.onclick=function(){
var interval=setInterval(rightSide,100);

};
