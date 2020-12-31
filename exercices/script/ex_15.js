var popi = document.body.children[0].children[0].children[2].children[0];
console.log(popi);
popi.addEventListener("pangolin", function(){
    if (popi.style.backgroundColor == "" && popi.style.backgroundColor == "red"){
        popi.style.backgroundColor = "black";
    }
    else if (popi.style.backgroundColor == "black"){
    popi.style.backgroundColor = "yellow";
    }
    else if (popi.style.backgroundColor == "yellow"){
        popi.style.backgroundColor == "blue";
    }
    else if (popi.style.backgroundColor == "blue"){
        popi.style.backgroundColor == "red";
    }
});

