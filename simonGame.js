let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "orange", "blue"];

let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector("h2");
let highestScoreDisplay = document.querySelector('h3');

highestScoreDisplay.innerText = `Highest Score: ${highestScore}`;

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function () {
        btn.classList.remove("gameFlash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let rndmidx = Math.floor(Math.random() * 4);
    let rndmcolor = btns[rndmidx];
    let rndmbtn = document.querySelector(`.${rndmcolor}`);
    // console.log(rndmidx);
    // console.log(rndmcolor);
    // console.log(rndmbtn);
    gameSeq.push(rndmcolor);
    // console.log(gameSeq); // display sequence
    gameFlash(rndmbtn);
}

function checkBtn(idx) {
    // console.log("curr level:", level);

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
        // console.log("same value");
    } else {
        if (level > highestScore){
            highestScore = level;
            highestScoreDisplay.innerText = `Highest Score: ${highestScore}`; //update
        }
        h2.innerHTML = `Game Over! your score was <b>${level}</b><b>Highest Score: <b>${highestScore}</br><br> Press any key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkBtn(userSeq.length-1);
    // console.log(userColor);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}