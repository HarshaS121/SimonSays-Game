let gameSeq=[];
let userSeq=[];

let level=0;
let started=false;

let btns=["red","yellow","green","purple"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;

levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
};


function levelUp(){
    userSeq=[];
    level++;
h2.innerText=`Level ${level}`;

let randomIdx=Math.floor(Math.random()*4);
let randomColor=btns[randomIdx];
let randomBtn=document.querySelector(`.${randomColor}`);
gameSeq.push(randomColor);
console.log(gameSeq)
gameFlash(randomBtn);
};
function check(idx){
 

    if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length== gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }else{
        h2.innerHTML=`Game is over! Your Score is <b>${level}<b><br> Press any key to start`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    check(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
