// a string is a sequence of characters(alpha, numbers, symbols (whitespace)) enclosed in single , double or backtics 


// console.log(typeof 123)
// console.log(typeof "123")


// console.log(123 + 123);
// console.log(123 + "123");
// console.log("123" + "123");
// console.log(+ 123 + "123");
// console.log(123 + +"123");
// console.log(123 + -"123");



// var age = parseInt(prompt("enter your bestie's age : "))
// console.log(typeof age);


var myName = "Nikhil gulyani is my best friend"


// length of string
// console.log(myName.length);


// indexing is used with the help of []

// first character is on the 0th position
// last character is on the string.length - 1



// console.log(myName[0]);
// console.log(myName[4]);


// console.log(myName[5])

// console.log(myName[myName.length - 1]);

// ============================== concatenation
// 
// adding two or more strings together


// var first = prompt("Enter your First Name : ")
// var last = prompt("Enter your Last Name : ")
// var age = parseInt(prompt("Enter your age : "))


// console.log("hello world my name is " + first + " " + last + " and my age is " + age  );

// console.log(`hello world my name ${first} ${last} is and my age is ${(age*100) / 2} `);



// string methods

// var x = myName.at(3)
// console.log(x);

// console.log(myName.at(-3));
// console.log(myName.at(3));



// console.log(myName.charAt(3));
// console.log(myName.charAt(-3));


// console.log(myName.includes("abc"));
// console.log(myName.includes("e"));
// console.log(myName.includes("e",10));


// index of the first appearance of the specified substring
// console.log(myName.indexOf("e"));
// console.log(myName.indexOf("e",23));
// console.log(myName.indexOf("e",30));


// console.log(myName.lastIndexOf("e"));