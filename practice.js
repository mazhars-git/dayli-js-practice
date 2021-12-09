let a = {
    b: 1,
    c: '2',
    d: false
};

let b = a;

b.b = 2;
b.c = '3';
b.d = true;

// console.log(a.b, a.c, a.d);


//if, else if, else -----------------------

/*
var num = 5;

if (num % 2 == 0) {
    // console.log('even');
}

else{
    // console.log('odd')
}

var num = 0;

if(num > 0){
    console.log('positive')
}
else if(num < 0){
    console.log('negative')
}

else {
    console.log('Zero')
}
*/

//Grading system

/*
var num = 88;

if (num > 100 || num < 0) {
    console.log('Invalid Number')
}
else if (num >= 80 && num <=100) {
    console.log('Result is A+')
}
else if (num >= 70 && num <=79) {
    console.log('Result is A')
}
else if (num >= 60 && num <=69) {
    console.log('Result is A-')
}
else if (num >= 50 && num <=59) {
    console.log('Result is B')
}
else if (num >= 40 && num <=49) {
    console.log('Result is D')
}
else if (num >= 33 && num <=39) {
    console.log('Result is C')
}
else {
    console.log('Result is Fail!')
}

*/

//another example: big or small

/*
var Apple = 10;
var Banana = 40;
var Orange = 30;

if (Apple > Banana && Apple > Orange) {
    console.log('Apple price is high.')
}

else if(Banana > Apple && Banana > Orange){
    console.log('Banana price is high')
}

else{
    console.log('Orange is high')
}
*/



//vowel or consonant check

/*var letter = "I";

letter = letter.toLocaleLowerCase();

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    console.log('Vowel Letter')
}

else
    console.log('Consonant Letter')*/


//switch, case, break, default

/*var digit = "-8";

switch (digit) {
    case '1':
       console.log('One') 
       break;
    case '2':
        console.log('Two')
        break;
    case '3':
        console.log('Three')
        break;
    case '4':
        console.log('Four')
        break;
    case '5':
        console.log('Five')
        break;
    case '6':
        console.log('Six')
        break;
    case '7':
        console.log('Seven')
        break;
    case '8':
        console.log('Eight')
        break;
    case '9':
        console.log('Nine')
        break;
    case '10':
        console.log('Ten')
        break;
    default:
        console.log('Not a digit')
}
*/

//****000002 */

var letter = "w";

letter = letter.toLocaleLowerCase();
/*
switch (letter) {
    case 'a':
        console.log('vowel')
        break;
    case 'e':
        console.log('vowel')
        break;
    case 'i':
        console.log('vowel')
        break;
    case 'o':
        console.log('vowel')
        break;
    case 'u':
        console.log('vowel')
        break;

    default:
        console.log('consonant')
}
*/
/*
switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('vowel')
        break;

    default:
        console.log('consonant')
} */

//for loop, while loop anb do while loop, 


// for (let x = 2; x <= 100; x= x+2) {
//     console.log(x)
    
// }

// console.log('End')
/*
for (let x = 10; x >= 1; x= x-1) {
    console.log(x)
    
}

console.log('End')
*/

/*var sum = 0;

for (let x = 1; x <=5; x++){
    sum = sum + x;
    console.log(sum);



//while loop
var i = 1;
var sum = 0;

while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum = sum + i;
    }
   
    i= i + 1;
}

console.log(sum);


//do while loop

var i = 15;

do{
    console.log(i);
    i--
}
while(i >=1)



//break


for(i = 1; i <= 100; i++){
    if (i == 50) {
        break;
    }
    console.log(i)
}



for(i = 1; i <= 100; i++){
    if (i % 2 == 0) {
        continue;
    }
    console.log(i)
}


for(i = 1; i <= 100; i++){
    if (i % 2 != 0) {
        continue;
    }
    console.log(i)
}



//Ternary operator

var num = -5;

var result = num > 0 ? "positive" : "negative";

console.log(result);

*/

var num1 = 80;
var num2 = 90;

var result = num1 > num2 ? "Big number" : 'Small';

console.log(result)