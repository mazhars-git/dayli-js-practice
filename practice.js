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

var num = 99;

if (num >= 80 && num <=100) {
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
else if (num >=1 && num <=32) {
    console.log('Result is F')
}

else{
    console.log('Ops!! Something Wrong')
}
