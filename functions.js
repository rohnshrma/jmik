// function declaration

// function greet(){
//     // code to be executed
//     console.log("hello world");
// }


// function greet(name){
//     console.log(`hello world this is ${name}!`)
// }



// greet("jmik")
// greet("rohan")
// greet("apple")


// weight (kg) / height (m)
// bmi = w / (h ** 2)

// < 18.5 => underweight
// 18.5-24.9 => normal weight
// 25- 29.9 => overweight
// > 30 => obesse



// function details(fname = "John", lname = "Doe", age = 100) {
//     console.log(`hey! my name is ${fname} ${lname} and my age is ${age}`)
// }


// details()
// details()
// details()
// details()
// details()
// details("jmil","thang","23")



// function reversal(str) {
//     var list = str.split(" ")
//     var rev = []
//     for (var i = list.length - 1; i >= 0; i--) {
//         console.log(rev.push(list[i]))
//     }
//     console.log(rev.join(" "))
// }


// reversal("hello world this is rohan")



// var yourName = "jmik" // global

// function greet() {
//     console.log("hello " + yourName)
// }


// greet()




// function getBmi(weight,height){
// var bmi = weight / (height**2) // local
// console.log(bmi);
// }



// console.log("your bmi => ",  getBmi(100,1.80));

// console.log(bmi);




// function logs(){
//     console.log(1);
//     console.log(2);
//     return "hello world";
//     console.log(3);
//     console.log(4);
// }

// var s = logs()

// console.log(s);




var greeting = function () {
    console.log("hey jmik")
}

// console.log(typeof greeting);

greeting()


var rev = function (str) {
    var reversed = ""
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    console.log(reversed);
}

rev("hello jmik")






// var add = function () {
//     var x = parseInt(prompt("Enter the value of number 1 : "))
//     var y = parseInt(prompt("Enter the value of number 2 : "))
//     return x + y
// }


// var z = add()
// console.log("the result is " , z);

// var printDetails = function (callback) {
//     var result = callback()
//     console.log(`the result is ${result}`);
// }


// printDetails(add)


    function lifespan(callback, average_age) {
        var age = callback()
        var years_left = average_age - age
        console.log(`Years : ${years_left}\nMonths : ${years_left * 12}\nWeeks : ${years_left * 52}\nDays : ${years_left * 365}`);
    }


lifespan(function () {
    var yob = parseInt(prompt("Enter your year of birth : "))
    return new Date().getFullYear() - yob
}, 100)