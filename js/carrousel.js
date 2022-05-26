// Init carrousel pos images
function initCarrousel(){
    direction = 1;
    nbr=5;
    p=0;
    container= document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(800*nbr)+"px";
    for(i=1;i<=nbr;i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('img/"+i+".jpg')";
        container.appendChild(div);
    }
}


//Events slider auto with setIterval timer
function moveRight(){
    if(p>-nbr+1)
        p--;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
}
function moveLeft(){
    if(p<0)
        p++;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
}


//Auto move changeImage Carroussel
function myTimer() {
    if (direction==1){
        moveRight();
        if (p==-4){
            direction = -1;
        }
    }else if(direction==-1){
        moveLeft();
        if (p==0){
            direction = 1;
        }
    }
}
setInterval(myTimer, 5000);