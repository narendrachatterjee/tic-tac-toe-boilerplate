const elements_box = document.querySelectorAll(".box") 
var win_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [3,4,6]
]

var attempt_x = [];
var attempt_o = [];
var click = 0;
var gameWon = false; 


const msg = document.getElementById("message");
const result_game = document.getElementById("result");
const restart = document.getElementById("button");

elements_box.forEach(box=>{
    box.onclick  = click_function;
})

function click_function(e){
    const ind = e.target.getAttribute('id');
    const symbol = document.createElement('p');
    symbol.setAttribute('id','symbol');
    elements_box[ind-1].appendChild(symbol);
    if(click %2 == 0){
        attempt_x.push(parseInt(ind-1));
        symbol.innerHTML='X';
        symbol.style.color = '#FAB201';
        
        Result(win_combinations,attempt_x,"X");
    }
    else{
        attempt_o.push(parseInt(ind-1));
        symbol.innerHTML='O';
        symbol.style.color = '#FAB201';
        Result(win_combinations,attempt_o,"0");
    }
    click++;
    if(click == 9 && gameWon == false){
        result_game.style.visibility="visible";
        msg.innerHTML = "It's a tie";
    }
}

function Result(win_combinations, attempt, player){
    let a = 0;
    let check = [];
    for(var i = 0 ; i < win_combinations.length ; i++){
        if( Array.isArray(win_combinations[i])){
            Result(win_combinations[i],attempt,player);
        }
        else{
            if(attempt.includes(win_combinations[i])){
                check.push(true);
                a++;
            }
            else
                check.push(false);
        }
    }
    if (check.push(checks => checks === true) && a>2){
        result_game.style.visibility="visible";
        message.innerHTML = "'" + player + "'" + "Won the game!";
        gameWon=true;
    }
    
    restart.onclick=()=>{
        history.go(0);
    }
}
