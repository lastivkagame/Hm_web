console.log("hello");

var number = 100n;
var num=34;
console.log(typeof(num));
num = "hello";
num = `hello ${number}`;
console.log(typeof(num)+num);
console.log(typeof number); //2^53

// let test=34;
// console.log(typeof test);
// console.log(34/"aaa");
// console.log('34'/'2');
// //alert("");
// let name = 3;//prompt("enter name: ");
// console.log(typeof name);
// console.log("hello "+ name);
// console.log(+name+'2');
// console.log(+name+2);
// console.log(2**(1/3)-1);

// // let a = prompt("num: ");
// /let res = a%2==0 ? true:false;// a % 3 == 0 ? "else" : "else else"
// // false;
// console.log(res);

//let answer=confirm("you take a test?");

let r = showname(487);
console.log(r);

function showname(args)
{
    return "hello"+args;
}

let funcExp = function(){
    return "Hello, world!";
}

funcExp = () => {
    return "Hello, world!";
}

console.log( funcExp());