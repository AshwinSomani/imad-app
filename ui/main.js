console.log('Loaded!');
var element=document.getElementById("ashwin");
element.innerHTML="HELLO";
var img=document.getElementById("ash");
img.onclick=function(){
  img.style.marginLeft="1120px";
if(img.setonclickListener===true){
  img.style.marginRight="300px";  
}
};
