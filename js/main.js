// const logItems = function(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// };

// logItems(['Mango', 'Poly', 'Ajax']);

// function calculateEngravingPrice (message, pricePerWord) {
//     const word = message.split('');
//     const totalP = word.length * pricePerWord;
//     return totalP
// };
// const message = "Hello";
// const pricePerWord = 10;
// const total = calculateEngravingPrice(message, pricePerWord);
// console.log(total);

// function findLongestWord(string) {
//     let words = string.split(' ');
//     let longestWord = '';

//     for (let i = 0; i < words.length; i++) {

//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// let result = findLongestWord("Hello World");
// console.log(result);

// const formatString = function (string) {
//     if (string.length <= 40) {
//         return string;
//     }
//     return string.slice(0, 40) + '...'
// };

// console.log(formatString('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptas laboriosam nostrum deserunt deleniti ex quisquam, dolore sequi veritatis repellendus iste consequatur, autem illum eum ratione dignissimos porro nam quos.'));

// const checkForSpam = function (message) {
//     if (message.includes('spam') || message.includes('sale')) {
//         return true;
//     }
//     return false;
// };
// console.log(checkForSpam('Hello spam World'));

function getNumbersSum(){
let input; 
const numbers = []; 
let total = 0; 


while (true) {
    input = prompt("Введіть число або натисніть Cancel");

    if (input === null) {
        break;
    }

    input = Number(input); 
    if (Number.isNaN(input)) {
        alert("Було введено не число");
    } else {
        numbers.push(input); 
    }
}


if (numbers.length > 0) {
    for (let number of numbers) {
        total += number; 
    }

    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Масив чисел порожній");
    }
}
getNumbersSum();