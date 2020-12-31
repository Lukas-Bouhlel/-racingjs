var wind = function () {
    var wind = document.body.children[0].children[0].children[2].children[0];
    wind.onclick = function () {      
        var verif = false;
        while (!verif) {
            var name = prompt("Quel est votre nom ?");
            if (name == null) {
                break;
            }
            if (name != "") {
                if (confirm("Etes vous sûr que " + name + " est votre nom ?")) {
                    alert("Bonjour " + name + " !");
                    wind.innerHTML = "Bonjour " + name + " !";
                    verif = true;
                }
            }
        }
    };
};
wind();
// var windo = document.body.children; Sert a voir les index des dossier pour construire un chemin.
// console.log(windo);
// windo();