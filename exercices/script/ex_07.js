var canevas = document.body.children[0].children[0].children[2].children[0].children[0];
var pause = document.body.children[0].children[0].children[2].children[1].children[0];
var stop = document.body.children[0].children[0].children[2].children[1].children[1];
var mute = document.body.children[0].children[0].children[2].children[1].children[2];
var audio = new Audio('https://www.cjoint.com/doc/19_12/ILqnW4FNIEF_Death-Note-OP-1-NC.mp3');
if (canevas.getContext){
    var canvas = canevas.getContext('2d');
    canvas.beginPath();
    canvas.moveTo(6, 6);
    canvas.lineTo(14, 10);
    canvas.lineTo(6, 14);
    canvas.stroke();
    canvas.fillStyle = 'White';
    canvas.fill();
}
canevas.onclick = function () {
    audio.play();
};
pause.onclick = function () {
    audio.pause();
};
stop.onclick = function () {
    audio.pause();
    audio.currentTime = 0.0;
};
mute.onclick = function () {
    audio.muted = !audio.muted;
};