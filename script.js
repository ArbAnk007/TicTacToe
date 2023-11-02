const blocks = document.querySelectorAll('td');
const blockOne = document.getElementById("one");
const blockTwo = document.getElementById("two");
const blockThree = document.getElementById("three");
const blockFour = document.getElementById("four");
const blockFive = document.getElementById("five");
const blockSix = document.getElementById("six");
const blockSeven = document.getElementById("seven");
const blockEight = document.getElementById("eight");
const blockNine = document.getElementById("nine");
const userChoiceBox = document.querySelector(".user-choice")
const playGround = document.querySelector(".container")
let marker;
const markX = document.querySelector("#markX");
const markO = document.querySelector("#markO");
const playBtn = document.querySelector("#play-btn");
const resetBtn = document.querySelector(".reset-btn");
const restartBtn = document.querySelector(".restart-btn")
const playerOneNameInput = document.querySelector("#player-one-name");
const playerTwoNameInput = document.querySelector("#player-two-name");
const heading = document.querySelector(".heading");
let playerOneName = "Player 1";
let playerTwoName = "Player 2";
let playerOneMarker;
let playFlag;

function clearBoard() {
    for (let i=0; i < blocks.length; i++) {
        blocks[i].innerText = "";
    }
}

function winCheck(){
    if(blockOne.innerText === blockTwo.innerText && blockTwo.innerText === blockThree.innerText && blockTwo.innerText){
        return true;
    }else if(blockFour.innerText === blockFive.innerText && blockFive.innerText === blockSix.innerText && blockFive.innerText){
        return true;
    }else if(blockSeven.innerText === blockEight.innerText && blockEight.innerText === blockNine.innerText && blockEight.innerText){
        return true;
    }else if(blockOne.innerText === blockFour.innerText && blockFour.innerText === blockSeven.innerText && blockFour.innerText){
        return true;
    }else if(blockTwo.innerText === blockFive.innerText && blockFive.innerText === blockEight.innerText && blockFive.innerText){
        return true;
    }else if(blockThree.innerText === blockSix.innerText && blockSix.innerText === blockNine.innerText && blockSix.innerText){
        return true;
    }else if(blockOne.innerText === blockFive.innerText && blockFive.innerText === blockNine.innerText && blockFive.innerText){
        return true;
    }else if(blockThree.innerText === blockFive.innerText && blockFive.innerText === blockSeven.innerText && blockFive.innerText){
        return true;
    }else{
        return false;
    }
}

for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', ()=>{
        if(marker==="X" && !blocks[i].innerText && playFlag){
            blocks[i].innerText = "X";
            marker = "O";
        }else if(!blocks[i].innerText && playFlag){
            blocks[i].innerText = "O";
            marker = "X";
        }
        if(winCheck()){
            if(marker===playerOneMarker){
                heading.innerText = `${playerTwoName} Won!`;
            }else{
                heading.innerText = `${playerOneName} Won!`;
            }
            playFlag = false;
        }else{
            if(marker===playerOneMarker){
                heading.innerText = `${playerOneName}'s Turn`
            }else{
                heading.innerText = `${playerTwoName}'s Turn`
            }
        }
    })
}

playBtn.addEventListener("click",()=>{
    if(playerOneNameInput.value){
        playerOneName = playerOneNameInput.value;
    }
    if(playerTwoNameInput.value){
        playerTwoName = playerTwoNameInput.value;
    }
    if(marker){
        userChoiceBox.className = "user-choice hidden";
        playGround.className = "container";
        playerOneMarker = marker;
        heading.innerText = `${playerOneName}'s Turn`;
        playerOneNameInput.value = "";
        playerTwoNameInput.value = "";
        markO.className = "";
        markX.className = "";
        playFlag = true;
    }
})

markX.addEventListener("click", ()=>{marker="X"; markX.className = "selected"; markO.className = "";});
markO.addEventListener("click", ()=>{marker="O"; markO.className = "selected"; markX.className = "";});
resetBtn.addEventListener("click", ()=>{clearBoard(); marker = playerOneMarker; playFlag = true; heading.innerText = `${playerOneName}'s Turn`});
restartBtn.addEventListener("click", ()=>{
    clearBoard();
    playerOneName = "Player 1";
    playerTwoName = "Player 2";
    playerOneMarker = undefined;
    marker = undefined;
    playGround.className = "container hidden";
    userChoiceBox.className = "user-choice show";
});