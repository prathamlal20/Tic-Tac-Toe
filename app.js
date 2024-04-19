let boxes = document.querySelectorAll(".box");
let newgameBtn = document.querySelector("#new_game_btn");
let resetBtn = document.querySelector("#reset_btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const reset_game = () =>{
  enableBoxes();
  msgContainer.classList.add("hide");
};

const disableBoxes = () => {
  for(let box of boxes){
    box.disabled=true;
  }
};

const enableBoxes = () => {
  for(let box of boxes){
    box.disabled=false;
    box.innerText = "";
  }
};

let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked!");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
      count+=1;
    } 
    else {
      box.innerText = "X";
      turn0 = true;
      count+=1;
    }
    box.disabled = true;
    checkWinnner();
    console.log(count);
    if (count==9){
      showDraw();
    }
  });
});

const checkWinnner = () => {
  for (let pattern of winningPattern) {
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;

    if (pos1val != "" && (pos2val != "") & (pos3val != "")) {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerHTML = "Congratulatios, Winner is " + winner;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const showDraw = () => {
  msg.innerHTML="Draw";
  msgContainer.classList.remove("hide");
  count=0;
}

newgameBtn.addEventListener("click", reset_game);
resetBtn.addEventListener("click", reset_game);
