//All the Words being used (5 letters)
const wordList =  ["lines","peach","salty","ghost","apron",]

let userAttempt = '';

let keys = document.getElementByClassName("")

const answer = words[Math.floor(Math.random() * words.length)] //choses word from list above (array)



//






// Creates gameboard Maybe i'm missing something here
function createSquares() {
    const gameBoard = document.getElementById("board");

    for (let index = 0; index < 30; index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", index + 1);
      gameBoard.appendChild(square);
    }
  }

  /*const wordList =["ghost"]


function wordle(str){
//   if(str===wordList[0]){console.log('match')};
for ( let i = 0; i < wordList [0].length; i ++) {
    let value = wordList[0].indexOf(str[i])
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



wordle('ghost')*/