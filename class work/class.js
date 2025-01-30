//data types = string, boolean, number

// data structures = {} [] 
// //objects { 
// letter: ["a", "b", "c"]
// }

//

// const arrayObject = [
//     email: "",
//     username: "",
//     password: "",
// ]


const colors = ["red", "blue", "green", "pink"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    
}

colors[2];


colors.push("orange");

let newColors = colors.pop();
console.log(newColors);

let newColors2 = colors.slice(2, 1, "purple");








const mixedArray = [1, "hello", true, {name: "maggie"}, [10, 20]];

console.log(mixedArray);

console.log(mixedArray[4][1]); //to reach 20


let count = 3;
while (count > 0) {
    count--;
    console.log(count);
}

console.log("count 2: ", count);

// let fruits = ["apple", "orange", "melon", "cherry"];

// for (const fruit of fruits) {
//     console.log(fruit);
    
// }

const user = {
    name: "maggie", 
    age: 100,
    profession: "magician"
}

for (const key in user) {
    console.log(key);
    if (Object.hasOwnProperty.call(user, key)) {
        console.log(`${key}: ${user[key]}`);
        
    }
}


function sum() {
    let sum = 0;
    let numbers = [1, 20, 30, 80];

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        // console.log(currentNumber);
        sum += currentNumber;
        
    } 
    console.log(sum);
}

sum();




function doubleNumbers() {
    const numbers3 = [2,5,9,1];
    const doubled = [];
    
    for (let i = 0;  i < numbers3.length; i++) {
        // let currentNumber = numbers3[i];
        // console.log(currentNumber);
        // let multipledNumber = currentNumber * 2;
        // // console.log(multipledNumber);
        // doubleNumbers.push(multipledNumber);

        doubled.push(numbers3[i] * 2);
    }
    console.log(doubled);
    
}

doubleNumbers();


function evenNumbers() {
    const numbers4 = [2,5,9,1,4,6,8];
    let evens = [];

    for (let i = 0; i < numbers4.length; i++) {
        if (numbers4[i] % 2 === 0) {
            evens.push(numbers4[i]);
        }
    }
    console.log(evens);
    
}

evenNumbers();