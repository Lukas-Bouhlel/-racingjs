var couleur = document.body.children[0].children[0].children[2].children[0];
var orange = 0;
var purple = 0;
var noir = 0;
var olive = 0;
var i = 0;
while (i != couleur.children.length){
   if(window.getComputedStyle(couleur.children[i],null).getPropertyValue("background-color") == "rgb(255, 165, 0)"){
    orange++;
   }
   if(window.getComputedStyle(couleur.children[i],null).getPropertyValue("background-color") == "rgb(0, 0, 0)"){
    noir++;
   }
   if(window.getComputedStyle(couleur.children[i],null).getPropertyValue("background-color") == "rgb(128, 0, 128)"){
    purple++;
   }
   if(window.getComputedStyle(couleur.children[i],null).getPropertyValue("background-color") == "rgb(128, 128, 0)"){
    olive++;
   }
    i++;
}
i = 0;
while(orange != 0){
    couleur.children[i].setAttribute("style","background-color : orange !important");
    orange--;
    i++;
}
while(purple != 0){
    couleur.children[i].setAttribute("style","background-color : purple !important");
    purple--;
    i++;
}
while(noir != 0){
    couleur.children[i].setAttribute("style","background-color : black !important");
    noir--;
    i++;
}
while(olive != 0){
    couleur.children[i].setAttribute("style","background-color : olive !important");
    olive--;
    i++;
}
