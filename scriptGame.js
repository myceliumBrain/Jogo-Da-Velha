let playerTime = 0
let symbols = ['x','o'] 
let table = ['','','','','','','','','']
let gameOver = false

let winsX = 0;
let winsO = 0;

let ganhador = '';
let winPage = document.getElementById('winPage')

let positionsWin =
                    [[0,1,2],
                    [3,4,5],
                    [6,7,8],

                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    
                    [0,4,8],
                    [2,4,6]]


function jogador(position){
    if(gameOver == true){
        return
    }

    if(table[position] == ""){
    table[position] = symbols[playerTime]

    
    if(playerTime == 0){ 
        playerTime = 1
    }else{
            playerTime = 0
        }
        

            for(i=0 ; i<8 ; i++){
            
                let positionInner = positionsWin[i]
               
                
            //Verificar Velha
        if ((table[0] && table[1] && table[2] && table[3] && table[4] && table[5] && table[6] && table[7] && table[8]) != "" && gameOver == false){
            gameOver = true;
            ganhador = 'Velha'
        }

            if (table[positionInner[0]] == table[positionInner[1]] && table[positionInner[0]] == table[positionInner[2]]){ 
                if(table[positionInner[0]] == 'x'){
                
                winsX = winsX + 1
                gameOver = true;
                ganhador = 'Player 1'
            }
        }
            if (table[positionInner[0]] == table[positionInner[1]] && table[positionInner[0]] == table[positionInner[2]]){
                if(table[positionInner[0]] == 'o'){

                winsO = winsO + 1
                gameOver = true
                ganhador = 'Player 2'
            }
        }
            
            if (gameOver == true){
                winPage.innerHTML = '<h1>' + ganhador + ' wins</h1>' 
                winPage.style.visibility = "visible";
            }

        
    }
}
}








