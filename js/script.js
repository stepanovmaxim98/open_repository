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