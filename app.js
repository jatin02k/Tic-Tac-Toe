//accessing html to js event
let boxes=document.querySelectorAll(".box");
let resetBtn= document.querySelector(".reset");
let msg=document.querySelector(".msg");
let msgCon=document.querySelector(".msg-container");
let newGameBtn=document.querySelector(".new");

//
let turnO=true;
let count=0
//winning pattern
const winPat=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//code to take input as X and O
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        };
        box.disabled=true;
        count++ ;

        let isWinner= checkWinner();

        if (count==9 && !isWinner){
            gameDraw();
        }
    });
});

//code to decide winner based on winning pattern
const checkWinner=()=>{
    for(let pattern of winPat){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
};

//function to display winner msg
const showWinner=(winner)=>{
    msg.innerText= `Congrats on wining ${winner}`;
    msgCon.classList.remove("hide");
    disabledBoxes();
};

//in case no winner
const gameDraw=()=>{
    msg.innerText=`Game was a Draw.`;
    msgCon.classList.remove("hide");
    disabledBoxes()
};

//stopping box click function
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

//clearing Game to initial position
const resetGame=()=>{
    turnO=true;
    count=0;
    enabledBoxes();
    msgCon.classList.add("hide");
    console.log("huhini");
};
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame)