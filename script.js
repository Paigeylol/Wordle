//All the Words being used (5 letters)
document.addEventListener("DOMContentLoaded", () => {
  createSquares();
})
const wordList =  ["lines","peach","salty","ghost","apron",]
const answer = wordList[Math.floor(Math.random() * wordList.length)]
let counter = 0;


 //choses word from list above (array)
function abc(){
  let allWords = document.querySelectorAll(".square")
  let newWord = ""
  let i = 0;
  allWords.forEach(function(userItem) {
    if (i < getfirstLetterId(counter) + 5 && i >= getfirstLetterId(counter)){
      newWord += userItem.textContent
    }
    i ++ 
    
  });
  
  wordle(newWord)
}
function wordle(str){ 


for ( let i = 0; i < answer.length; i ++) {
   let value = answer.indexOf(str[i])
   const letterId = getfirstLetterId(counter) + i;
   const letterEl = document.getElementById(letterId);
   
   if (value > -1) { //makes colour on tiles be the colours 
       if (value ==i ){
           letterEl.style = `background-color:green;border-color:green`;
        } else {
           letterEl.style = `background-color:yellow;border-color:yellow`;
           
        } 
     } else {
         letterEl.style = `background-color:gray;border-color:gray`;
     }
}
counter ++
}

function getfirstLetterId(index) {
  return index * 5
}

// Creates gameboard 
function createSquares() {
    const gameBoard = document.getElementById("board");
    let groupCount = 0; 
     for (let index = 0; index < 30; index++) {
       let square = document.createElement("div");
       square.classList.add("square");
       square.setAttribute("id", index);
        square.setAttribute("contenteditable", "true") //lets me click on the boxes
        square.setAttribute("onkeypress","return (this.innerText.length <= 0)") //Type1letter
        square.setAttribute("max","1")
      gameBoard.appendChild(square);
      if ((index + 1) % 5 ==0) {groupCount ++}  // every 5 letters, it becomes a new line, every line is one group
   }
  }