// console.log(typeof "hello")


// var a = "   "
// console.log(typeof a);


// console.log(typeof "123");
// console.log(typeof 123);
// console.log(typeof  +"123");


// var mess = `hello world
// my name is rohan
// and i am a 
// full stack web developer`

// console.log(mess);



// var mess = "hello world\nmy name is rohan\nand i am a full stack web developer"

// console.log(mess);


// concatenation : adding two or more strings together

// var fName = prompt("ENter your first name : ")
// var lName = prompt("ENter your last name : ")
// var age = parseInt(prompt("ENter your age : "))

// console.log(age + 100);

// console.log("hello world my name is " + fName + " " + lName + "and my age is " + age  );

// console.log("hello world my name is",fName,lName,"and my age is",age);

// expression and variables
// console.log(`hello world my name is ${fName} ${lName} and my age is ${age*100}`);



// indexing :   `
var myName = "hello,hello world my name is rohan sharma"

// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName[myName.length - 1]);


// console.log(123 + 123); // 246
// console.log(123 + "123"); // 123123
// console.log("123" + "123"); // 123123
// console.log(+"123" + 123); // 246
// console.log(+"123" + -"123"); // 0

// console.log(myName.length)



// console.log(myName.at(3));
// console.log(myName.at(-1));

var res = myName.at(3)

// console.log(res);
// console.log(myName.charAt(3));
// console.log(myName.charAt(-1));


// function greet(){
//     console.log("1");
//     console.log("2");
// return "bye bye"
//     console.log("3");
//     console.log("4");
// }

// greet()
// console.log(greet());

// var res = greet()

// console.log("REs => ",res);


// console.log(myName.concat("bye bye"," see you"," later"));

// myName = myName.concat("bye bye"," see you"," later")
// console.log(myName);

// console.log(myName.startsWith("e",18));
// console.log(myName.startsWith("e",18));


// console.log(myName.slice(0,4)); // 0-3

// console.log(myName.substring(0,4));


// console.log(myName.slice(-4));
// console.log(myName.substring(-4));


// console.log(myName.split());
// console.log(myName.split(""));
// console.log(myName.split(" "));
// console.log(myName.split("a"));

// var brand = prompt("ENter a brand name : ")
// var res = brand.charAt(0).toUpperCase()+brand.charAt(1)+brand.charAt(2).toUpperCase()+brand.slice(3)
// console.log(res);

// r1
// console.log(myName.replace(/hello/g,"bye bye"));

// console.log(myName.length);
// console.log(myName.padEnd(45).length); // new length (> actual length)
// console.log(myName.padStart(45));
// console.log(myName.padStart(45).length);
// console.log(myName.padStart(45,"@-"));

// var data = prompt("Enter your name : ")
// console.log(data.length,data);
// console.log(data.trim());
// console.log(data.trimStart());
// console.log(data.trimEnd());
// console.log(data.trimStart().length);
// console.log(data.trimEnd().length);
// console.log(data.trim().length);



// console.log(myName.includes("hello")); //search string
// console.log(myName.includes("hello",11)); // search string ,  position
// console.log(myName.includes("a",11));


// console.log(myName.repeat(4));

// ṛ2
// console.log(myName.search(/[rs]/));


// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());


// var x;
// console.log(typeof x);


// var y = null;