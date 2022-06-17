//All the Words being used (5 letters)
document.addEventListener("DOMContentLoaded", () => {
  createSquares();
})
const wordList =  ["lines","peach","salty","ghost","apron",]

let counter = 0;
// let keys = document.getElementByClassName("")

 //choses word from list above (array)
function abc(){
  counter ++ 
  let allWords = document.querySelectorAll(".square")
  let newWord = ""
  allWords.forEach(function(userItem) {
    let i = 0;
    if (i < 5 && i >= 0){

      newWord += userItem.textContent
    }
    i ++ 
  });
  console.log(newWord);
  wordle(newWord)
}
function wordle(str){
  console.log(str)
  const answer = wordList[Math.floor(Math.random() * wordList.length)]
  console.log(Math.floor(Math.random() * wordList.length))
for ( let i = 0; i < answer.length; i ++) {
   let value = answer.indexOf(str[i])
   if (value > -1) {
       if (value ==i ){
           console.log(str[i]+ 'green') 
        } else {
           console.log(str[i]+ 'yellow')
        } 
     } else {
         console.log(str[i] + 'grey')
     }
}
}


// Creates gameboard 
function createSquares() {
    const gameBoard = document.getElementById("board");
    let groupCount = 0; 
     for (let index = 0; index < 30; index++) {
       let square = document.createElement("div");
       let className = "square" + groupCount
       square.classList.add("square");
       square.classList.add(groupCount)
       square.setAttribute("id", index + 1);
        square.setAttribute("contenteditable", "true")
      gameBoard.appendChild(square);
      if ((index + 1) % 5 ==0) {groupCount ++} //
    }
   }

