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

var num = 30;

if (num >= 80) {
    console.log('Result is A+')
}
else if (num >= 70) {
    console.log('Result is A')
}
else if (num >= 60) {
    console.log('Result is A-')
}
else if (num >= 50) {
    console.log('Result is B')
}
else if (num >= 40) {
    console.log('Result is D')
}
else if (num >= 33) {
    console.log('Result is C')
}
else {
    console.log('Result is F')
}
