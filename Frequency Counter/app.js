// let str = "with the urban tribe, or our parents, until our brains just mature on their own and somehow suddenly know the sure answers to our lives. But that’s not how the brain works. And that’s not how life works. Besides, even if our brains could wait, love and work can’t. The twenties are, indeed, the time to get busy. It’s forward thinking for an uncertain age.";

let freqRank = [];

// Create array of each individual (non-unique) word to be counted
function getWordArray() {
    freqRank = [];
    // Get input from form
    let inputString = document.querySelectorAll('textarea')[0].value
    
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


// Count and sort the words from the wordListArray
function getWordCount(wordListArray) {
    // Add each string to a counting object
    let map = {};
    for (let i = 0; i < wordListArray.length; i++) {
        let item = wordListArray[i];
        map[item] = (map[item] + 1) || 1;
    }
    
    // Convert object into array of elements for each key:value pair
    for (let word in map) {
        freqRank.push([word, map[word]]);
    }

    // Sort the array from most frequent to least frequent
    freqRank.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    // Add frequency rank to each word that appears
    for (let i = 0; i < freqRank.length; i++) {
        freqRank[i].unshift(i + 1)
    }
    
    // console.log(`The frequency rank object: ${freqRank}`)
    // console.log(`First item: ${freqRank[0][0]}. ${freqRank[0][1]}: ${freqRank[0][2]}`)
    // console.log(`Second item: ${freqRank[1][0]}. ${freqRank[1][1]}: ${freqRank[1][2]}`)
    // console.log(`Third item: ${freqRank[2][0]}. ${freqRank[2][1]}: ${freqRank[2][2]}`)
    // console.log(`Fourth item: ${freqRank[3][0]}. ${freqRank[3][1]}: ${freqRank[3][2]}`)
    // console.log(`Fifth item: ${freqRank[4][0]}. ${freqRank[4][1]}: ${freqRank[4][2]}`)
    return freqRank
    return displayfreqRank(freqRank)
}

function assignTDClass() {
    td1.className = 'tdClass';
    td2.className = 'tdClass';
    td3.className = 'tdClass';
}

function displayfreqRank(freqRank) {
    let tableCheck = document.querySelector('table')
    if (tableCheck) {
        tableCheck.remove();
    }
    const table = document.createElement('table');
    table.className = 'tableClass'; 
    
    let body = document.querySelector('mySidepanel')
    mySidepanel.append(table);
    
    const tr0 = document.createElement('tr');
    const th01 = document.createElement('th');
    const th02 = document.createElement('th');
    const th03 = document.createElement('th');
    th01.textContent = 'Rank';
    th01.className = 'table-header-class'
    th02.textContent = 'Word';
    th02.className = 'table-header-class'
    th03.textContent = 'Count';
    th03.className = 'table-header-class'
    tr0.append(th01, th02, th03);
    table.append(tr0);

    for (let i = 0; i < freqRank.length; i++){
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.textContent = freqRank[i][0];
        td1.className = 'table-data-class';
        td2.textContent = freqRank[i][1];
        td2.className = 'table-data-class';
        td3.textContent = freqRank[i][2];
        td3.className = 'table-data-class';
        tr.append(td1, td2, td3);
        table.append(tr);
    }
}

window.onload=function(){
    const count = document.querySelector('button')
    count.addEventListener('click', function(e) {
        getWordArray();
        displayfreqRank(freqRank)
        openNav();
    });
}
// getWordCount(wordListArray); // { apple: 3}, {orange: 2}

// let str = document.getElementById("count")

// getWordCount.onclick = function(){
//   document.getElementById(count).submit();
//   return false;
// };

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.querySelector('body').style.width="70%"
    document.querySelector('textarea').style.width="51.428571428571429%"
    document.getElementById('mySidepanel').style.width="30%";
    document.querySelector('table').style.marginLeft='50px';   
}
  
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.querySelector('body').style.width="100%";
}