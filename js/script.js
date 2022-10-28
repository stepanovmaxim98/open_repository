"use strict";
// // задача на вывод звездочек
// let result = '';
// const lenght = 7;
// for (let i = 1; i < lenght; i++){
//     for( let j = 0; j < i; j++){
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);
// // прерывания цикла 
// first: for(let i=0; i<3; i++){
//     console.log(`First_level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`Second_level: ${j}`);
//         for (let k = 0; k < 5; k++){
//             if(k === 2) break first;
//             console.log(`Third_level: ${k}`);
//         }
//     }
// }
let num = 5;
while(num <= 10){
    console.log(num);
    num++;
}
let i = 20;
for(i; i > 10; i--){
    if (i == 13){
        break;
    }
    console.log(i);
}

for(let i = 2; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

let i = 2;
while ( i <= 16){
    i++;
    if (i % 2 === 0){
        continue;
    }else{
        console.log(i);
    }
}
const newArr = [];

for (let i = 5; i < 11; i++){
    newArr[i - 5] = i;
}
console.log(newArr); 

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++){
    result[i] = arr[i];
}
console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];
for( let i = 0; i<data.length; i++);