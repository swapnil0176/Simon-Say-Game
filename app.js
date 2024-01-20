let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let colors=["yellow","red","blue","purple"];
let highestScore=0;
h5=document.createElement("h5");
h3=document.querySelector("h3");
document.querySelector("h1").append(h5);

document.addEventListener("keypress",function(){
    console.log("Keypress...");
    if(level==0){
        console.log("Game Started");
        started=true;
       levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randInd=Math.floor(Math.random()*4);
    let randColor=colors[randInd];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}
let allBtns=document.querySelectorAll(".box");

function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkColor(userSeq.length-1);
}
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function checkColor(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        if(level>highestScore){
            highestScore=level;
            h5.innerText=`Your high Score is ${highestScore}`;
        }
        
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },170);
        h3.innerHTML=`Game Over! Your Score is ${level}<br>Press any key to start game`;
        reset();
    }
}
function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}
