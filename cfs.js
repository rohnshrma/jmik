// if statement : if the condition inside of the if block is true only then the code inside of it will work

// if (12 > 10) {
// console.log("greater");
// }



// if (12 < 10) {
//     console.log("greater");
// }else {
//     // the code inside of the else block gets executed if all the conditions above are false
//     console.log("smaller or equals");
// }


// var x = parseInt(prompt("Enter a number : "))
// // console.log(x);

// if(x > 0){
//     console.log("Positive");
// }else if(x < 0){
//     console.log("Negative");
// }else{
//     console.log("Zero")
// }


// var guest = prompt("Enter your name : ")
// if (guest.length >= 3) {
//     if (guest[0] == "j") {
//         console.log(`welcome ${guest}, enjoy the party`);
//     } else {
//         console.log(`${guest}, you are not invited`);
//     }
// } else {
//     console.log("Not a valid name");
// }





// https://www.w3resource.com/w3r_images/javascript-basic-image-exercise-6.png
// var year = parseInt(prompt("Enter a year : "))

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log(`${year} is a leap year`)
//         }
//         else {
//             console.log(`${year} is not a leap year`)
//         }
//     } else {
//         console.log(`${year} is a leap year`)
//     }
// } else {
//     console.log(`${year} is not a leap year`)
// }

// divisible by 4 and not by 100
// divisible by 4 ,100 and 400



// var day = parseInt(prompt("Enter the day today", "0-6"))
// switch (day) {
//     case 0:
//         console.log("Sunday");
//         break
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     default:
//         console.log("Not a valid day")
//         break
// }


// var age = parseInt(prompt("Enter age : "))
// switch (age) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log("Free")
//         break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log("$2")
//         break;
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//         console.log("$5")
//         break;
//     default:
//         console.log("$10")
//         break;
// }

// var marks = parseInt(prompt("Enter your marks : "))
// switch (true) {
//     case marks >= 90 && marks <= 100:
//         alert("A")
//         break
//     case marks >= 80 && marks < 90:
//         alert("B")
//         break
//     case marks >= 70 && marks < 80:
//         alert("C")
//         break
//     case marks >= 60 && marks < 70:
//         alert("D")
//         break
//     case marks >= 0 && marks < 60:
//         alert("F")
//         break
//     default:
//         alert("Invalid Marks")
//         break
// }



// var chr = prompt("Enter a character : ").toLowerCase()

// if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u") {
//         console.log(`${chr} is a vowel`);
// } else {
//     console.log(`${chr} is a consonant`);
// }


// if ("aeiou".includes(chr)) {
//     console.log(`${chr} is a vowel`);
// } else {
//     console.log(`${chr} is a consonant`);
// }

























// initialization ; condition ; update
// for(var i = 100 ; i < 110;i++){
// console.log("jmik",i);    
// }


// var yourName = prompt("enter your name : ")
// console.log(yourName[0]);
// console.log(yourName[1]);
// console.log(yourName[2]);
// console.log(yourName[3]);

// for(var i = 0; i < yourName.length; i++){
//     console.log(yourName[i]);
// }


// var num = parseInt(prompt("Enter a number : "))
// for (var i = 1 ; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num*i}`);
// }

// var i = 0
// while(i<10){
//     console.log("hello world",i);
//     i++
// }


// var myName = prompt("enter name : ")
// while (myName.length < 3){
//     myName = prompt("enter correct name : ")
// }

// console.log(`welcome ${myName}`);


// var i = 100

// do{
//     console.log("hello world",i);
//     i++
// }while(i<10)


// for(var i = 1; i <= 5 ; i++){
//     var row = ""
//     for(var j= 1 ; j <= i ; j++){
//        row += i
//     }
//     console.log(row)
// }

// var secret = Math.floor(Math.random() * 100) + 1
// var guess ;
// var attempts = 0;


// do{
//     guess = parseInt(prompt("Enter your guess ","1-100"))
//     attempts++
//     if(guess < secret){
//        alert("Too Low! Guess High");
//     }else if (guess > secret){
//         alert("Too High! Guess Low");
//     }else{
//         alert(`congratulations! you guessed the number ${secret} in ${attempts} attempts`);
//     }
// }while(guess !== secret)



// assignment 2 task 2

// var sum = 0
// var cn = 1 // init
// while(cn <= 50){

//   var isPrime = true

//   for (var i = 2; i< cn;i++){
//     console.log("cn:",cn,",i:",i)
//     if (cn % i == 0){
//       isPrime = false;
//     break;
//     }
//   }

// //   sum
//   if(isPrime === true){
//     sum+=cn
//   }
//   console.log("sum:" + sum)

//   cn++
// }

// console.log(sum)



// let choice;
// let num_1 = parseInt(prompt("Enter the value of number 1 : "))
// let num_2 = parseInt(prompt("Enter the value of number 2 : "))

// do{
// choice = parseInt(prompt("Calulator Menu :\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n 5. Exit:","1-5"))
// switch (choice) {
//     case 1:
//         alert(`the sum of ${num_1} and ${num_2} is ${num_1 + num_2}`)
//         break;
//     case 2:
//         alert(`the difference of ${num_1} and ${num_2} is ${num_1 - num_2}`)
//         break;
//     case 3:
//         alert(`the product of ${num_1} and ${num_2} is ${num_1 * num_2}`)
//         break;
//     case 4:
//         alert(`the quotient of ${num_1} and ${num_2} is ${num_1 / num_2}`)
//         break;
//     case 5:
//         alert(`You Chose to exit\nThanx for using calculator`)
//         break;

//     default:
//         alert("Invalid operation\nchoose between 1 - 5")
//         break;
// }
// }while(choice !== 5)


// let num;
// while(num !== 6){
//     num = Math.floor(Math.random() * 6) + 1
//     console.log(`Dice Rolled : ${num}`);
// }
// console.log(`You got a 6.\nGame Over`);


// let  correctPassword = "helloworld"   
// let attempts = 0;
// let userPassword;

// do{
//     userPassword = prompt("Enter your password : ")
//     attempts++

//     if(userPassword !== correctPassword){
//         alert("Incorrect password !\nTry Again")
//     }else{
//         alert("Logged in Successfully")
//     }

// }while(correctPassword !== userPassword && attempts < 3)

// if(attempts === 3 && userPassword !== correctPassword){
//     alert("Maximum attempts reached\nExiting Program...")
// }

let score = 0
let questionNumber = 1

do {
    let userAnswer;
    switch (questionNumber) {
        case 1:
            userAnswer = prompt(`Question 1. What is the capital of france. ? `).toLowerCase()
            if (userAnswer === "paris") {
                alert("Correct!")
                score++
            } else {
                alert("Incorrect")
            }
            break
        case 2:
            userAnswer = prompt(`Question 2. What is the largest mammal. ? `).toLowerCase()
            if (userAnswer === "blue whale") {
                alert("Correct!")
                score++
            } else {
                alert("Incorrect")
            }
            break
        case 3:
            userAnswer = prompt(`Question 3. How many continents are there. ? `).toLowerCase()
            if (userAnswer === "7" || userAnswer === "seven") {
                alert("Correct!")
                score++
            } else {
                alert("Incorrect")
            }
            break

        default:
            alert("Invalid Question Number")
            break
    }
    questionNumber++
} while (questionNumber <= 3)


alert(`Quiz Finished\nYour score is : ${score}/3`)