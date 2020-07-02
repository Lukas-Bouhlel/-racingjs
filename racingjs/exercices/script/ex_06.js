var doc = document.body.children[0].children[0].children[2].children[0];

class Hero {
    constructor(name, skill, int, power) {
        this.name = name.charAt(0).toUpperCase() + name.substring(1);
        this.skill = skill;
        this.int = int;
        this.power = power;
    }

    toString() {
        doc.innerText += ("Je suis " + this.name + " le " + this.skill + ", j'ai " + this.int + " points d'intelligence et " + this.power + " points de force !\n");
    }
}
var mage = new Hero("amadeus", "mage", 10, 3);
var guerrier = new Hero("pontius", "guerrier", 3, 10);
mage.toString();
guerrier.toString();
//La méthode charAt() renvoie une nouvelle chaîne contenant le caractère (ou, plus précisément, le point de code UTF-16)  à la position indiquée en argument.
//La méthode toUpperCase() retourne la valeur de la chaîne courante, convertie en majuscules.
//La méthode substring() retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin.