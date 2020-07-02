var cook = document.body.children[0].children[0].children[2].children[0].children[0];
var div = document.body.children[0].children[0].children[2].children[0];
var footer = document.body.children[0].children[0].children[2];
cook.onclick = function() {
    let cookieDate = new Date(Date.now() + 86400000);
    document.cookie = 'acceptsCookies=true; expires=' + cookieDate;
    div.innerText = "";
    var div2 = document.createElement("div");
    footer.appendChild(div2);
    var button = document.createElement("button");
    div2.appendChild(button);
    button.innerText = "Supprimer le cookie";
    button.onclick = function(){
        footer.removeChild(div2);
        cookieDate = new Date(Date.now() - 86400000);
        document.cookie = 'acceptsCookies=true; expires=' + cookieDate;
        div.innerText = "Ce site utilise les cookies, cliquez sur OK si vous acceptez leur utilisation. ";
        div.appendChild(cook);
    };
};