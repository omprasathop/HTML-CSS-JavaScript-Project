const na = document.querySelector(".names");
const im = document.getElementsByClassName("imges")[0];
const family=["Saravanan","Priya","Omprasath","guruprasath"];
const imarr=["1img.jpg","2img.jpg","3img.jpg","4img.jpg"];
let careerindex=0;
let charindex=0;

calls();
function calls(){
charindex++;
na.innerHTML=`<h1>My name is ${family[careerindex].slice(0,charindex)}</h1>`;

    im.src=imarr[careerindex];

if(charindex===family[careerindex].length){
careerindex++;
charindex=0;
}
if(careerindex===family.length){
    careerindex=0;
    charindex=0;
}
setTimeout(calls,200);

}
