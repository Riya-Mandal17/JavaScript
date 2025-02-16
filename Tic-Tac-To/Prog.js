let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".Reset-Game");
let newBtn = document.querySelector(".New-Game");
let SWinner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let dmsg = document.querySelector("#draw-msg");
let Drawmatch = document.querySelector(".draw-container");

let turnX = true;
let count =0;

let winState = [ 
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ];
const resetGameBtn = () =>{
    turnX = true;
    count = 0;
    enablBox();
    SWinner.classList.add("hide");
    Drawmatch.classList.add("hide");
};
               

boxes.forEach((box) => {
        box.addEventListener("click", () => {
           
            if(turnX){
            box.innerText="X";
           
            turnX = false;
            }
            else{
                box.innerText = "O";
             
                turnX = true;
            }   
            count++;
         
            box.disabled = true;
            let iswinner = checkwinner();
            if(count ===9 && !iswinner ){
              
                showDraw();

            }  
        
         
         
        } );

}) ; 

const disablBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enablBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (WINNER)=>{
    msg.innerText = `Winner is ${WINNER}`;
    SWinner.classList.remove("hide");

};

const showDraw = () => {
    dmsg.innerText = `Draw match`;
    Drawmatch.classList.remove("hide");
    
}

const checkwinner = () => {
    for (let pattern of winState ) {
    
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log(pos1val);
                disablBox(); 
                showWinner(pos1val);
            }
           
        }
           
    }

};

newBtn.addEventListener("click",resetGameBtn);
resetBtn.addEventListener("click",resetGameBtn);



                
