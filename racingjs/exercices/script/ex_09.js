var canvas = document.body.children[0].children[0].children[2].children[0].children[0];
var div = document.body.children[0].children[0].children[2].children[0];
var position = document.body.children[0].children[0].children[2].children[1];
div.style.position = "relative";
canvas.style.position = "absolute";
canvas.style.margin = "0px";
canvas.draggable = true;
canvas.ondrag = function() {
canvas.style.visibility ="hidden";
}
div.ondragover = function (event) {
    let x = event.offsetX;
    let y = event.offsetY;
    x = (x - 10);
    y = (y - 10);
    if (x > 679) {
        x = 679;
    }
    if (y > 40) {
        y = 40;
    }
    if (x < 0) {
        x = 0;
    }
    if (y < 0) {
        y = 0;
    }
    position.innerText = "Nouvelles coordonnées => {x:" + x + ", y:" + y + "}";
    canvas.ondragend = function () {
        canvas.style.top = y + "px";
        canvas.style.left = x + "px";
        canvas.style.visibility = "visible";
    };
};
console.log(canvas);