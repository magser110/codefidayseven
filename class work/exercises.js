//ex 1 create todo list

const todoList = ["walk the dog", "wash clothes", "go to the bank"];

todoList.push("wash dishes"); //add task

console.log(todoList);

todoList.shift(); //removes first task

console.log(todoList);

//ex 2 count even numbers


const numbers = [1,2,3,4,5,6,7,8,9];

let evenAmount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenAmount++;
    }
    
}
console.log(evenAmount);

// ex 3 reverse an array 

const reverseArray = ["hello", "bye", "teehee"];

console.log(reverseArray.reverse());

// ex 4 find the largest number

const largestNumber = [22, 10, 333, ,3, 444, 5555, 1, 4, 8];
let maxNumber = 0;
 

    for (let i = 0; i < largestNumber.length; i++) {
         if (largestNumber[i] > maxNumber)
            maxNumber = largestNumber[i];
        }

console.log(maxNumber);


//ex 5 dynamic greeting 



function greetUsers(names1, greetings) {
    for (let i = 0; i < names1.length; i++){

        let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        console.log(`${randomGreeting} ${names1[i]}`);
        
    }
}

greetUsers(["Tina", "Jimmy", "Lucy"], ["hello", "hi", "good morning"]);

