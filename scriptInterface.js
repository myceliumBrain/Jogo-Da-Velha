document.addEventListener('DOMContentLoaded', () => {
    let blocos = document.querySelectorAll('.allBlocks')
    
    blocos.forEach((position) => {
        position.addEventListener('click', usuarioClick)
    });
    
})

function usuarioClick(evento){
    let blocoSelecionado = evento.target
    let posicao = blocoSelecionado.id;
    jogador(posicao);
    attBlocos();
}

function attBlocos(){
 
        let blocos = document.querySelectorAll('.allBlocks')
        
        blocos.forEach((blocoSelecionado) => {
            let posicao = blocoSelecionado.id;
            let simbolo = table[posicao]
            
            if(simbolo != ''){
                blocoSelecionado.innerHTML = `<div class='${simbolo}'></div>`
            }
        });
        
}

function resetGame(){
    playerTime = 0;
    gameOver = false;
    table = ['','','','','','','','','']
    
    let blocos = document.querySelectorAll('.allBlocks')
        blocos.forEach((blocoSelecionado) => {
            blocoSelecionado.innerHTML = ""
        })    
        //att historico
        let historico = document.getElementById("contador")
        historico.innerHTML = '<center><h1>Histórico</h1><hr> <br><h3> Player1:<br> ' + winsX + '<br><br> Player2:<br> ' + winsO + '</center>' 
        
        winPage.style.visibility = "hidden";
        ganhador = "";
}
        let historico = document.getElementById("contador")
        historico.innerHTML = '<center><h1>Histórico</h1><hr> <br><h3> Player1:<br> 0 <br><br> Player2:<br> 0'   




