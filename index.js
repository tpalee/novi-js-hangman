const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, showHangman } = require("./gamelogic");
let countFaults=0;
function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  isGameWon(word,guesses);
  isGameLost(word,guesses);
  displayWordSoFar(word,guesses);
  let tempResult=displayWordSoFar(word,guesses);

  const letter = question("Raad een letter: ").toLowerCase();
if(letter.length==1){
  if(!guesses.includes(letter)){
    guesses.push(letter);
    console.log("Letter is not in array");
    if(tempResult==displayWordSoFar(word,guesses)){
      countFaults+=1;
    }
  }
  else{
    console.log('letter is already in array')}

  showHangman(countFaults);
  console.log(`Je hebt ${countFaults} foute antwoorden gegeven..`)
}
else{
  console.log("Sorry, je mag maar 1 karakter tegelijk invoeren")}






  if((isGameWon(word,guesses))||(isGameLost(word,guesses))){
    return;
  }

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}
console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
