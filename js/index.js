// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
const hacker1= 'Jorgeeeeeeeee'
const hacker2= 'Mendez'

const toCapital = function(name) {
    const toUpper = name.toUpperCase().split('').join(' ')
    return toUpper
}

if (toCapital(hacker1).length > toCapital(hacker2).length){
    console.log('hacker one has the longer name')
}
// BONUS EXTRA
// BONUS 1

//variable declaration
/*
const par1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum congue imperdiet. Suspendisse sollicitudin dui ligula, cursus aliquam magna faucibus in. Suspendisse vitae ultricies justo, id pellentesque leo. In quis erat id arcu finibus aliquam. Donec varius arcu a nisi commodo, sit amet condimentum dui mattis. Fusce quis mauris elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam molestie ac magna at pharetra. Praesent lacinia purus a justo suscipit, non dictum diam ornare. Curabitur a est vel risus vulputate laoreet.'
const par2 = 'Cras in egestas neque, vitae consectetur nisi. Nunc sagittis magna at blandit iaculis. Aenean malesuada scelerisque turpis, eu tincidunt ipsum porta ac. Mauris in pharetra ligula. Etiam semper accumsan nisl ut placerat. Nullam sit amet lectus ac nisi pretium egestas. Nulla velit magna, ultrices sit amet venenatis id, finibus vitae ex. Cras ultrices vel turpis at convallis.'
const par3 = 'Nulla finibus nisl vitae elementum gravida. Nam ut massa efficitur, imperdiet mi eget, imperdiet augue. Praesent ultrices laoreet nisl, ac finibus nisi molestie id. Fusce ultrices ipsum at est rhoncus malesuada. Duis viverra hendrerit mi in sagittis. Vestibulum elit nisl, interdum eget eleifend eu, sodales quis eros. Praesent mollis tempus ante, eget cursus ex aliquam sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean auctor ligula blandit leo tempus congue. Aenean dictum, mauris mattis porttitor consequat, dolor turpis feugiat velit, eget tempor nisl ex vitae lacus.'

//function that counts words

const wordCounter = function(text){
return text.split(' ').length ;
}
console.log(wordCounter(par3))

//function that looks for a word

const wordFinder = function(text){
    return text.split(' Nam ').length -1;
    }
    console.log(wordFinder(par3))



//BONUS 2
//Method 1 reverse,join compare 
const phraseToCheck = 'dabale arroz a la zorra el abad';
const checkPalindrom = function (phraseToCheck){
    const phraseToLower = phraseToCheck.toLowerCase();
    let replaced = phraseToLower.replace(/[^a-z0-9]/gi, '');
    const splitArr = replaced.split('');
    const joinArray = splitArr.join('');
    const inversArr= splitArr.reverse();
    const joinReverseArray = inversArr.join('');
    if (joinArray === joinReverseArray){
        return true
    } else {
        return false
    }
}

//Method 2 localeCompare
const wordToCheck = 'JORGE'; 
const arr = wordToCheck.split('')
const invArr = arr.reverse();
const joinInvArr = invArr.join('');

const checkPalin = function (wordToCheck){
    if (wordToCheck.localeCompare(joinInvArr, 'en', { sensitivity: 'base' }) === 0) {
        return true 
    } else {
        return false
    }
}

//Method 3 for loop
const palindrome = function (phrase) {
    const newPhrase = phrase.replace(/[^a-z0-9]/gi, '').toLowerCase().split('');
    for (var i=0;i<newPhrase.length/2;i++){
        if (newPhrase[i]!== newPhrase[newPhrase.length-i-1]){ 
            return false;
}
}
return true
}


*/