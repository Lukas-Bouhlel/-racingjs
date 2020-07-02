var color = document.body.children[0].children[0].children[2].children[0].children[2];
var button1 = document.body.children[0].children[0].children[2].children[0].children[0];
var button2 = document.body.children[0].children[0].children[2].children[0].children[1];
var db = document.body;
var plus = 16;
button1.onclick = function () {
    plus++;
    db.style.fontSize = plus + "px";
};
button2.onclick = function () {
    plus--;
    db.style.fontSize = plus + "px";
};
color.onchange = function () {
    db.style.backgroundColor = this.value;
};
