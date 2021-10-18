window.addEventListener('DOMContentLoaded', ()=>{
    /************** Variables ****************/ 
    
    let currentPlayer = "X"
    let isGame = true
    let board = ["","","","","","","","",""]
    
    const items = Array.from(document.querySelectorAll(".item"))
    const win = document.getElementById("win")
    
    const wins = [
        // rows
        [0,1,2],[3,4,5],[6,7,8],
        // colums
        [0,3,6],[1,4,7],[2,5,8],
        // left diagonal
        [0,4,8],
        // right diagonal
        [2,4,6]
    ]
    
    /************** Funciones ****************/ 

    const changeColor = item => {
        if(item.textContent ==="X"){
            item.style.color = "red"
        }else{
            item.style.color = "blue"
        }
    }

    const target= function(child,index) {
        if(child.textContent==="" && isGame){
            child.textContent=currentPlayer
            changeColor(child)
            changePlayer(child)
        }
        changeUser(index,child.textContent)
    }
    
    function changeUser(index,childText) {
        if(isGame){
            board[index] = childText
            playerHandle()
        }
    }
    
    function changePlayer(child) {
        currentPlayer = currentPlayer==="X"?"O":"X"
    }
    
    function playerHandle() {
        for(let i=0;i<=7;i++){
            const windcodition = wins[i]
            const a = board[windcodition[0]],
                  b = board[windcodition[1]],
                  c = board[windcodition[2]];
            if(a=="" || b==="" || c===""){
                continue
            }
            if(a===b&&b===c){
                win.innerHTML=`Gana el jugador ${b}`
                isGame = false
                break
            }
        }
        if(!board.includes("") && isGame){
            win.innerHTML=`Empate`
        }
    }
    
    function reset() {
        board = ["","","","","","","","",""]
        isGame = true
        if(currentPlayer==="O"){
            changePlayer()
        }
        items.forEach(el=>{
            el.textContent = ""
        })
        win.innerHTML=""
    }
    items.forEach((child,index)=>{
        child.addEventListener("click",()=>target(child,index))
    })
    resetear.addEventListener("click",reset)
})



