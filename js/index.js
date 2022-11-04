// Iteration 1: Names and Input

const hacker1 ='Jorge'
const hacker2= 'Tania'



console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const showLongerName = function(){
    if (hacker1.length>hacker2.length){
        console.log(`The driver has the longest name, it has ${hacker1.length} characters`)}
        else if (hacker1.length<hacker2.length){
            console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)}
            else {console.log(`wow you have the same length, ${hacker1.length} characters!`)}
        }

showLongerName()
// Iteration 3: Loops

//3.1 Print capital letters
const toCapital = function(name) {
    let upperName =''
    for (i=0;i<name.length;i++){
upperName += name[i].toUpperCase().trimEnd() + ' ';
    }
    return upperName;
}
console.log(toCapital('Jorge'));
// Print reverse

const toReverse = function(name){
    let reverseName=''
    for (let i=name.length-1; i>=0; i--){
    reverseName += name[i];
    }
    console.log(reverseName)
return reverseName
}

toReverse('Guille') 



//3.3 Lexicographic order of strings 

const orderStrings = function (name1,name2){
    if (name1===name2){
        console.log('wow you got the same name');
    }
    if (name1<name2){
        console.log('driver goes first')
    } else if (name2<name1){
        console.log('Navigator def goes first')
    }
} 


// BONUS EXTRA
// BONUS 1

//variable declaration

const par1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum congue imperdiet. Suspendisse sollicitudin dui ligula, cursus aliquam magna faucibus in. Suspendisse vitae ultricies justo, id pellentesque leo. In quis erat id arcu finibus aliquam. Donec varius arcu a nisi commodo, sit amet condimentum dui mattis. Fusce quis mauris elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam molestie ac magna at pharetra. Praesent lacinia purus a justo suscipit, non dictum diam ornare. Curabitur a est vel risus vulputate laoreet.'
const par2 = 'Cras in egestas neque, vitae consectetur nisi. Nunc sagittis magna at blandit iaculis. Aenean malesuada scelerisque turpis, eu tincidunt ipsum porta ac. Mauris in pharetra ligula. Etiam semper accumsan nisl ut placerat. Nullam sit amet lectus ac nisi pretium egestas. Nulla velit magna, ultrices sit amet venenatis id, finibus vitae ex. Cras ultrices vel turpis at convallis.'
const par3 = 'Nulla finibus nisl vitae elementum gravida. Nam ut massa efficitur, imperdiet mi eget, imperdiet augue. Praesent ultrices laoreet nisl, ac finibus nisi molestie id. Fusce ultrices ipsum at est rhoncus malesuada. Duis viverra hendrerit mi in sagittis. Vestibulum elit nisl, interdum eget eleifend eu, sodales quis eros. Praesent mollis tempus ante, eget cursus ex aliquam sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean auctor ligula blandit leo tempus congue. Aenean dictum, mauris mattis porttitor consequat, dolor turpis feugiat velit, eget tempor nisl ex vitae lacus.'

//function that counts words

const wordCounter = function(text){
return text.split(' ').length ;
}
console.log(wordCounter(par3))

//function that looks for a word

const wordFinder = function(text,word){
    return text.split(word).length -1;
    }
    console.log(wordFinder(par3,'Nam'))



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
    for (let i=0;i<newPhrase.length/2;i++){
        if (newPhrase[i]!== newPhrase[newPhrase.length-i-1]){ 
            return false;
}
}
return true
}
