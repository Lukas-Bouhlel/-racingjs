var div2 = document.body.children[0].children[0].children[2].children[0];

if (localStorage.getItem('pangolin')) {
    div2.innerHTML = '<img src=' + localStorage.getItem('pangolin') + '></img>';
    var image2 = div2.children[0];
    image2.style.width = "100%";
    image2.style.height = "100%";
    image2.style.display = "block";
}
var cent = 100;
var inc = "";
var dec = "";
function decremente(){
    if (image2.style.width != "0%") {
        cent--;
        image2.style.width = cent + '%';
        image2.style.height = cent + '%';
    }
}
image2.onmouseenter = function () {
    clearInterval(inc);
    dec = setInterval(decremente,1000);   
};
function incremente(){
            if (image2.style.width != "100%") {
            cent++;
            image2.style.width = cent + '%';
            image2.style.height = cent + '%';
        }
}
image2.onmouseleave = function () {
    clearInterval(dec);
    inc = setInterval(incremente, 1000); 
};
image2.onclick = function(){
    localStorage.removeItem('pangolin');
    div2.removeChild(image2);
};