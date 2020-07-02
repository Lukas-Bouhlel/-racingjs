var div = document.body.children[0].children[0].children[2].children[0]; 
localStorage.setItem('pangolin',"https://projectmecistops.org/wp-content/uploads/2018/12/pangolin_15.png");
if(localStorage.getItem('pangolin')){
    div.innerHTML = '<img src=' + localStorage.getItem('pangolin') + '></img>';
    div.children[0].style.width = "100%";
    div.children[0].style.height = "100%"; 
    div.children[0].style.display = "block";
}