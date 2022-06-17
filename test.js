const wordList =["ghost"]


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



wordle('ghost')

