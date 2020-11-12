//hover over Magic 8-Ball should make letters float around like codecademy javascript intro course

//if the answer is unclear (case 2, 3, 4, 14) give a button to ask again for a more clear answer
//allow you to start over and submit a new message

//if the answer is clear (other cases) give a button that shows the % of certainty of the answer which is based on (Math.round((Math.random()+.01)*68)) + "%")
//allow you to start over and submit a new message

//submitting a question should make the whole page go black and then the answer fades in and the word "Magic 8-Ball is gone"

let magicResponse = 0

function shakeTheEight() {
    magicResponse = (Math.round(Math.random()*20))

    switch (magicResponse) {
    case 1:
        console.log("As I see it, yes.");
        break;
    case 2:
        console.log("Ask again later.");
        break;
    case 3:
        console.log("Better not tell you now.");
        break;
    case 4:
        console.log("Cannot predict now.");
        break;
    case 5:
        console.log("Concentrate and ask again.");
        break;
    case 6:
        console.log("Don’t count on it.");
        break;
    case 7:
        console.log("It is certain.");
        break;
    case 8:
        console.log("It is decidedly so.");
        break;
    case 9:
        console.log("Most likely.");
        break;
    case 10:
        console.log("My reply is no.");
        break;
    case 11:
        console.log("My sources say no.");
        break;
    case 12:
        console.log("Outlook not so good.");
        break;
    case 13:
        console.log("Outlook good.");
        break;
    case 14:
        console.log("Reply hazy, try again.");
        break;
    case 15:
        console.log("Signs point to yes.");
        break;
    case 16:
        console.log("Very doubtful.");
        break;
    case 17:
        console.log("Without a doubt.");
        break;
    case 18:
        console.log("Yes.");
        break;
    case 19:
        console.log("Yes – definitely.");
        break;
    case 20:
        console.log("You may rely on it.");
        break;
    
    }
}

//

shakeTheEight();