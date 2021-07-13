//Example
//Input: "What's the longest word in this sentence"
//Output: "sentence"

function longestWord(str) {
    // your code here
    let words = str.split(' ');
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            let longWord = words[i]
            console.log(longWord)
        }
    }
}

longestWord("This is a very long sentence that has many a word but only one ginormous one!")