const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, showHangman } = require("./gamelogic");
//  countFaults geeft aan hoeveel foute antwoorden zijn gegegeven
let countFaults=0;
function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);

  //  check of game al gewonnen is
  isGameWon(word,guesses);

  //  check of game al verloren is
  isGameLost(word,guesses);

  //  check of ingevoerde letter wel/niet voorkomt in het woorden geeft string met juist geradeletters en nog niet gerade letters(streepjes)
  displayWordSoFar(word,guesses);

  // deze variable bevat de waarde van displayWordSoFar voor de nieuwe input
  let tempResult=displayWordSoFar(word,guesses);

  //  input wordt automatisch omgezet naar lowerCase
  const letter = question("Raad een letter: ").toLowerCase();

  //  check of de invoer uit 1 karakter bestaat
  if (letter.length == 1) {
    //  check of ingevoerde letter niet voorkomt in de guesses-array
    if (!guesses.includes(letter)) {
      guesses.push(letter);
      //  check of tempResult gelijk is aan displayWordSoFar, zo ja is er geen nieuwe letter goed geraden, dus faultCounter +1
      if (tempResult == displayWordSoFar(word, guesses)) {
        countFaults += 1;
      }
    } else {
      console.log('Helaas, dit karakter heb je al eerder ingevoerd!');
    }

    //  functie die de galg tekent in de console;
    showHangman(countFaults);
    console.log(`Foute antwoorden: ${countFaults}`);
  } else {
    console.log("Sorry, je mag maar 1 karakter tegelijk invoeren");
  }





  //  als game gewonnen of verloren is, stop de game
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
