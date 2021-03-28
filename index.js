// Code your solutions in this file
let names = ["Ada", "Brendan", "Ali"];

function writeCards(arrayNames, event) {

    let thankYouMessages = [];
    for (let i = 0; i < arrayNames.length; i++ ) {
    
    thankYouMessages.push(`Thank you, ${arrayNames[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages
}

writeCards(names, "surprise");



function countDown(number) {
    while (number >= 0) {

        console.log(number--);
        // number--
      }
      return "All done";
}
countDown(10);