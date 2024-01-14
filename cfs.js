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


var age = parseInt(prompt("Enter age : "))
switch (age) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Free")
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("$2")
        break;
    case 11:
    case 12:
    case 13:
    case 14:
        console.log("$5")
        break;
    default:
        console.log("$10")
        break;
}