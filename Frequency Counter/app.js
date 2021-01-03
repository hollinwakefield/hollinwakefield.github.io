// let str = "with the urban tribe, or our parents, until our brains just mature on their own and somehow suddenly know the sure answers to our lives. But that’s not how the brain works. And that’s not how life works. Besides, even if our brains could wait, love and work can’t. The twenties are, indeed, the time to get busy. It’s forward thinking for an uncertain age.";


function getWordArray() {
    // Get input from form
    let inputString = document.querySelectorAll('input')[0].value
    
    // Remove undesired characters from the string
    inputString = inputString.replace(/[^\w\s\'\’]|_/g, "")
        .replace(/\s+/g, " ");

    // Convert string into array of strings
    let wordListArray = inputString.split(' ');

    // Convert each string in array to uppercase
    wordListArray = wordListArray.map(function(x){ return x.toUpperCase(); })
    // console.log(`The word list array: ${wordListArray}`);
    return getWordCount(wordListArray); 
}

function getWordCount(wordListArray) {
    // Add each string to a counting object
    let map = {};
    for (let i = 0; i < wordListArray.length; i++) {
        let item = wordListArray[i];
        map[item] = (map[item] + 1) || 1;
    }
    
    // Convert object into array of objects for each key:value pair
    let freqRank = [];
    for (let word in map) {
        freqRank.push([word, map[word]]);
    }

    // Sort the array from most frequent to least frequent
    freqRank.sort(function(a, b) {
        return b[1] - a[1];
    });
    console.log(`The frequency rank object: ${freqRank}`)
    return freqRank;
}

window.onload=function(){
    const count = document.querySelector('#countInput')
    count.addEventListener('submit', function(e) {
        e.preventDefault();
        getWordArray();
    });
}
// getWordCount(wordListArray); // { apple: 3}, {orange: 2}

// let str = document.getElementById("count")

// getWordCount.onclick = function(){
//   document.getElementById(count).submit();
//   return false;
// };