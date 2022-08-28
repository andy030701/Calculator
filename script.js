//le text dans le h1
var response = document.getElementById("head_calc");

//relatif au bouton taper par l'utilisateur
var textClient="";

//les boutons:les reprendre afin de les manipuler
var btn9 = document.getElementById("btn-9");
var btn8 = document.getElementById("btn-8");
var btn7 = document.getElementById("btn-7");
var btn6 = document.getElementById("btn-6");
var btn5 = document.getElementById("btn-5");
var btn4 = document.getElementById("btn-4");
var btn3 = document.getElementById("btn-3");
var btn2 = document.getElementById("btn-2");
var btn1 = document.getElementById("btn-1");
var btn0 = document.getElementById("btn-0");
var pointbtn = document.getElementById("pt-btn");
var plusbtn = document.getElementById("pls-btn");
var minsbtn = document.getElementById("mins-btn");
var equalbtn = document.getElementById("equal-btn");
var multibtn = document.getElementById("multi-btn");
var divisbtn = document.getElementById("divis-btn");
var clearbtn = document.getElementById('btn-clear');
//mettre des evenements sur les boutons
//le bouton 9:une fois appuyer,ils vont s'afficher dans le titre
btn9.addEventListener("click",(e)=>{
  textClient+=e.target.textContent  
  response.textContent=textClient;
})
//bouton 8:une fois appuyer,ils vont s'afficher dans le titre
btn8.addEventListener("click",(e)=>{
    textClient+=e.target.textContent
    response.textContent=textClient;
})
//le bouton 7:une fois appuyer,ils vont s'afficher dans le titre
btn7.addEventListener("click",(e)=>{
    textClient+=e.target.textContent
    response.textContent=textClient;
})
//le bouton 6:une fois appuyer,ils vont s'afficher dans le titre
btn6.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton 5:une fois appuyer,ils vont s'afficher dans le titre
btn5.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton 4:une fois appuyer,ils vont s'afficher dans le titre
btn4.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton 3:une fois appuyer,ils vont s'afficher dans le titre
btn3.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton 2:une fois appuyer,ils vont s'afficher dans le titre
btn2.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton 1:une fois appuyer,ils vont s'afficher dans le titre
btn1.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton 0:une fois appuyer,ils vont s'afficher dans le titre
btn0.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton point:une fois appuyer,ils vont s'afficher dans le titre
pointbtn.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton plus:une fois appuyer,ils vont s'afficher dans le titre
plusbtn.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton moins:une fois appuyer,ils vont s'afficher dans le titre
minsbtn.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton egal:eval est un fonction qui retourne le resultat du calcul contenu dans la variable textClient  
equalbtn.addEventListener("click",(e)=>{
    textClient=eval(textClient);
    response.textContent=textClient;
})
//le bouton de multiplication:une fois appuyer,ils vont s'afficher dans le titre
multibtn.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton de division:une fois appuyer,ils vont s'afficher dans le titre
divisbtn.addEventListener("click",(e)=>{
    textClient+=e.target.textContent 
    response.textContent=textClient;
})
//le bouton effacer:efface la variable textClient afin d'avoir une nouvelle combinaison de chiffre dans le titre et le texte revient a 0 
clearbtn.addEventListener("click",(e)=>{
    textClient=""
    response.textContent="0";
})
