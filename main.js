var bt1=document.querySelector("#b1");
var bt2=document.querySelector("#b2");

var h=document.querySelector("#h");

var index=0;

bt1.addEventListener("click",inc);
bt2.addEventListener("click",dec);


function inc(e){
e.preventDefault();
index++;
// h.innerText=index;
// m();

setTimeout(() => {
  h.innerText=index;
m();
}, 1000);
}
function dec(e){
  e.preventDefault();
  index--;

  setTimeout(() => {
    h.innerText=index;
  m();
  }, 1000);
  
}
function m(){
  //console.log(index);
if(index>0){
  h.style.color='white';
}
if(index<0){
  h.style.color='grey';
}
if(index==0){
  h.style.color='tomato';
}
}
