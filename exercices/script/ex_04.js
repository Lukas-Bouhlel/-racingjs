    document.addEventListener("keypress", function(event) {
    var box =  document.body.children[0].children[0].children[2].children[0];
    box.innerText += event.key;
    box.innerText = box.innerText.substr(-42);
});