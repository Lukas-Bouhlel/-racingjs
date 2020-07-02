var hello = function(){
document.body.children[0].children[0].children[2].children[0].innerText = "Hello World";//Récupère tous les enfants du body jusqu'a la div de index 0.
};
hello();
//document = objet qui contient des fonctions.
//"."Liste les fonction à utilisées.
//innerText est une propriété représentant le contenu textuel « visuellement rendu ».