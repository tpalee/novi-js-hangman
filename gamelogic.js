function displayWordSoFar(word, guesses) {
    //maak een array aan om de resultaten van de check in op te slaan
    let resultArray = [];
    //boolean geeft aan of er een letter gevonden is,deze begint als false
    let found = false;
    //for loop loopt over elke letter van het "gezochte"woord (word)
    for (let i = 0; i < word.length; i++) {
        //for loop loopt over de guesses array en vergelijkt elke letter met elke letter van word
        for (let j = 0; j < guesses.length; j++) {
            //als letter een match is,verander found in true; en plaatst de letter in de resultArray op de juiste index,daarna stopt deze loop;
            if (guesses[j] == word.charAt(i)) {
                found = true;
                resultArray.push(word.charAt(i) + ' ')
                break;
                //niks gevonden? found is false,door met de volgende letter uit de guesses-array
            } else {

                found = false;
            }
        }
        //als er na alle letters uit de gues-array geen match is push dan een underscore met spatie in de resultArray
        if (!found) {
            resultArray.push('_ ')
        }
    }
    //na het itereren return je de reultarray omgezet naar een string
    //console.log(resultArray.join(""))
    return resultArray.join("");
}


function isGameWon(word, guesses) {
    //log uitkomst van displayWordSoFar iin de console
    const logResult=displayWordSoFar(word, guesses);
    console.log(logResult);
    //result is het teruggeven resultaat van de functie 'displayWordSoFar', waarbij alle spaties worden verwijderd.
    const result = displayWordSoFar(word, guesses).replace(/\s/g, '');
    //vergelijk word met result, gelijk? return true(gewonnen), anders return false(niet gewonnen);
    if (word == result) {
        console.log("Je hebt gewonnen!!!")
        return true;
    } else {
        return false;
    }


}

function isGameLost(word, guesses) {
    //result is het teruggeven resultaat van de functie 'displayWordSoFar', waarbij alle spaties worden verwijderd.
    const result = displayWordSoFar(word, guesses).replace(/\s/g, '');
    //counter houdt het aantal juiste letters bij;
    let goodCounter = 0;
    //loop door het aantal letters in de guessesarray
    for (let i = 0; i < guesses.length; i++) {
        //loop met elke letter uit guesses door het woord en check of er een match is
        for (let j = 0; j < word.length; j++) {
            if (guesses[i] == word.charAt(j)) {
                //match? verhoog de counter met 1 en stop deze loop
                goodCounter += 1;
                break;
            }
        }

    }
    //als het aantal ingevoerde letters min de juiste letters groter of gelijk is aan 7 en word niet gelijk is aan het resultaat return true(game verloren)
    if (((guesses.length - goodCounter) >= 7) && !(word == result)) {
        console.log("Helaas, je hebt verloren...");
        return true;
    } else {
        return false;
    }
}


function showHangman(counter){
    switch(counter) {
        case 1:
            console.log(
                '\n' +
                '|\n' +
                '|\n' +
                '|\n' +
                '|\n' +
                '|\n' +
                '==========='
            );
            break;
        case 2:
            console.log(
                '__________\n' +
                '|      \n' +
                '|     \n' +
                '|       \n' +
                '|      \n' +
                '|\n' +
                '===========')
            break;
        case 3:
            console.log(
                '__________\n' +
                '| /     \n' +
                '|/     \n' +
                '|       \n' +
                '|      \n' +
                '|\n' +
                '===========')
            break;
        case 4:
            console.log(
                '__________\n' +
                '| /     |\n' +
                '|/     \n' +
                '|       \n' +
                '|      \n' +
                '|\n' +
                '===========')
            break;
        case 5:
            console.log(
                '__________\n' +
                '| /     |\n' +
                '|/     _o_\n' +
                '|       \n' +
                '|      \n' +
                '|\n' +
                '===========')
            break;
        case 6:
            console.log(
                '__________\n' +
                '| /     |\n' +
                '|/     _o_\n' +
                '|       O\n' +
                '|      \n' +
                '|\n' +
                '===========')
            break;
        case 7:
            console.log(
                '__________\n' +
                '| /     |\n' +
                '|/     _o_\n' +
                '|       O\n' +
                '|      / \\\n' +
                '|\n' +
                '===========')
            break;
        default:
            console.log('');
    }
}





module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    isGameLost: isGameLost,
    showHangman: showHangman
};
