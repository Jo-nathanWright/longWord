//Example
//Input: "What's the longest word in this sentence"
//Output: "sentence"

function longestWord(str) {
    // your code here
    let words = str.split(' '); //Splits the string into an array, with each word being an differnet string
    let maxLength = 0; // sets the maxLength to zero
    let longWord = '' // sets the longWord to equal the a string that holds nothing
    for (let i = 0; i < words.length; i++) { //runs while i is less than then length of the array
        if (words[i].length > maxLength) { //checks to see if a strings length is greater than the maxLength (which would start at zero)
            maxLength = words[i].length; //updates the maxLength with the length of the longest word(Which here would start at 4, switch to 8 and ends on 9)
            longWord = words[i] // updates the longWord to be the word that was the longest
        }
    }
    console.log(longWord) //console logs longWord
}

longestWord("This is a very long sentence that has many a word but only one ginormous one!") //seting up the string for the function