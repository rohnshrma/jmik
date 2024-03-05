var person = {
    name: "jmik",
    gender: "Male",
    age: 22,
    hobbies: ["a", "b", "c"],
    greeting: function (name) {
        console.log("hello world my name is ", name)
    }
}

// console.log(person)

// console.log(person.age);
// console.log(person["hobbies"]);


// console.log(person[0]);


// var marks = {
//     0: 120,
//     1: 3455,
//     2: 65,
// }


// console.log(marks[0]);




// var sum = function (a, b) {
//     console.log(`the sum of ${a} and ${b} is ${a + b}`)
// }

// sum(12,23)


// person.greeting("rohan")


// person.hobbies.forEach(cb)




// function cb(hobbie,index,self){
//     console.log("hobbie => ", hobbie)
//     console.log("index => ", index)
//     console.log("self => ", self)
// }






// var a = 12;
// var b = 34;


// function printDetails(x,y){
//     console.log(x+y)
// }

// // printDetails(a,b)


// function addition(num1,num2 ,cb) {
//     // var num1 = parseInt(prompt("Enter the value of number 1 :"))
//     // var num2 = parseInt(prompt("Enter the value of number 2 :"))
//     cb(num1 , num2) // printDetails()
// }


// addition(12,45,printDetails)
// // printDetails(12,34)


// function printDetails(fName, lName, email, phone) {

//     console.log(`my name is ${fName} ${lName}, email is ${email} and phone number is ${phone}`);


// }

// printDetails("jmik","thang","jmik@gamil.com","222 222 3333"); 

// function gatherData(cb) {

//     let fName = prompt("Enter your first name");
//     let lName = prompt("Enter your last name");
//     let email = prompt("Enter your eamil address");
//     let phone = prompt("Enter your phone number: ");



//     cb(fName, lName, email, phone);
// }
// gatherData(function (fName, lName, email, phone) {

//     console.log(`my name is ${fName} ${lName}, email is ${email} and phone number is ${phone}`);


// })







// function Person(name,age,gender){
//     this.person_name = name
//     this.person_age = age 
//     this.person_gender = gender
//     this.greet = ()=>{
//         console.log("hello world this is", this.person_name);
//     }
// }





// var jmik  = new Person("jmik",23,"Male")

// console.log(jmik.person_age)
// console.log(jmik.person_name)
// // jmik.greet()

// // console.log(jmik.details)

// var rohan = new Person("rohan sharma",1000)
// console.log(rohan);


// Person.prototype.details = function(){
// console.log(`Name : ${this.person_name}\nAge : ${this.person_age}`)
// }


// Person.prototype.changeYear = function(newAge){
//     this.person_age = newAge
// }


// jmik.changeYear(100)


// jmik.details()


// console.log(jmik)







// function Employee(name,age,gender,jobTitle,salary){
//     Person.call(this,name,age,gender)
//     this.jobTitle = jobTitle
//     this.salary = salary 
// }

// var x = new Employee("john",23,"Male","Engineer",1000000)
    
// console.log(x)

// the methods inside of the constructor function automaticall y gets inherited 
// x.greet()
// but no the methods inside of the prototypes  
// x.details()




// ====================================================== assignment



// // Task 1
// const Product = function(name,price,quantity){ 

//       this.name = name; 
//       this.price = price; 
//       this.quantity = quantity;

// }
// //Task 3
// Product.prototype.calculateTotal = function(){
//       return this.price*this.quantity; 
// }

// let newProduct = new Product("Keyboard",100,10); 
// let newMonitor = new Product("Monitor",80,12); 
// let newPhone = new Product("Phone",80,12); 
// console.log(newProduct)
// console.log(newMonitor)

// //Task 5
// Product.prototype.category = "Electronics"; 

// console.log(newProduct)
// //Task 6
// function Book(name,price,quantity,author){ 
//       Product.call(this,name,price,quantity,author); 
//       this.author = "Mike"; 

// }

// Book.prototype = Object.create(Product.prototype)
// Book.prototype.constructor = Book;
// var abc = new Book("abc",12,10,"zayn")
// console.log(abc);


// Book.prototype.calculateTotal = function(){
//     var total = Product.prototype.calculateTotal.call(this)
//     // console.log((total*90)/100)
//     console.log(total*0.9)
// }
// abc.calculateTotal()

// //Task 9
// Book.prototype.getAuthorInfo = function(){
//       return `${this.author} is writing about how to code!`; 
// }
// let authorInfo = newBook.getAuthorInfo(); 
// console.log(newBook);
// console.log(authorInfo);


// task 1
function Animal(name,species){
this.name = name
this.species = species
}

// Task 2
const animal1 = new Animal("Lion","Feline")
const animal2 = new Animal("Elephant","Mammal")
const animal3 = new Animal("Snake","Reptile")


// task 3
Animal.prototype.introduce = function(){
    return `I am a ${this.species} names ${this.name}`
}

// task 4
// console.log(animal2.introduce())

// task 5
Animal.prototype.sound = "Makes Noise"


// task 6
function Dog(name,species,breed){
    Animal.call(this,name,species)
    this.breed = breed
}

console.log("dog prototype => ",Dog.prototype);
console.log("animal prototype => ",Animal.prototype);
console.log("result of Object.create => ",Object.create(Animal.prototype));
Dog.prototype = Object.create(Animal.prototype)
console.log("dog prototype => ",Dog.prototype);
Dog.prototype.constructor = Dog;
console.log("dog prototype => ",Dog.prototype);



Dog.prototype.introduce = function(){
    return `hey my name is ${this.name}, i am a ${this.breed}!`
}

var tommy = new Dog("tommy","Canine","Labrador")
console.log(tommy.sound);
console.log(tommy.introduce())
