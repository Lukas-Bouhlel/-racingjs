var click = function () {
    var compteur = 0;
    var click = document.body.children[0].children[0].children[2].children[0];
    click.onclick = function () {
        compteur += 1;
        click.innerHTML = compteur;
    };
};
click();
//La propriété Element.innerHTML de Element récupère ou définit la syntaxe HTML décrivant les descendants de l'élément.