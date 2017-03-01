function cl(a){
  var b;
  if(a){b=document.getElementsByClassName(a);}
  return b;
};
var temp="";
var scr=document.getElementById("ss");
var n=document.getElementsByClassName("n");
var equal=document.getElementById("equal");
var ac=document.getElementById("AC");
for(var i=0;i<n.length;i++){
  n[i].onclick=function(){
   scr.innerHTML+=this.innerHTML;
    temp=scr.innerHTML;
  }
}
ac.onclick=function(){
  scr.innerHTML="";
}
equal.onclick=function(){
  var ans;
  ans = eval('('+scr.innerHTML+')');
  scr.innerHTML=ans;
}