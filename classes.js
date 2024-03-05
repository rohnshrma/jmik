// // creating a class
// class Person{
//     name = "Jmik"
//     age = 23
//     gender = "Male"
//     isHuman = true 

//     info(){
//         console.log(`Name : ${this.name}\nAge : ${this.age}\nGender : ${this.gender}\nIsHuman : ${this.isHuman}`)
//     }

// }


// // create an instance of a class (object)
// var person1 = new Person()

// console.log(person1);
// var person2 = new Person()

// console.log(person2);

// person1.info()
// person2.info()


// class Person{
//     constructor(name,age,gender,isHuman){
//         this.name = name
//         this.age  = age
//         this.gender = gender
//         this.isHuman = isHuman
//     }

//         info(){
//         console.log(`Name : ${this.name}\nAge : ${this.age}\nGender : ${this.gender}\nIsHuman : ${this.isHuman}`)
//     }
// }


// var person1  = new Person("Jmik",23,"Male",true)
// var person2  = new Person("Rohan",26,"Male",true)

// person1.info()
// person2.info()


// book , author , genre,+ release year, pages , age (methods)





// class Book{
//     // the constructor function runs when we create an instance of the class
//     constructor(book,author,genre,year,pages){
//         this.book_name = book
//         this.author = author
//         this.genre = genre
//         this.year = year
//         this.pages = pages
//         console.log(`the ${this.book_name} has been added to the library`)
//     }

//     age(){
//         return new Date().getFullYear() - this.year
//     }

//     info(){
//         console.log(`Name : ${this.book_name}\nAuthor : ${this.author}\nGenre : ${this.genre}\nYear : ${this.year}\nPages : ${this.pages}`)
//     }
// }


















// class Circle {
//     constructor(radius) {
//         this.radius = radius
//     }

//     static PI = 3.14

//     static calculateArea(radius) {
//         return Circle.PI * radius ** 2
//     }

// }

// console.log(Circle.PI);
// console.log(Circle.calculateArea(5));



class Book{
    constructor(title,author,ISBN,category,availaility){
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this.category = category
        this.availaility = availaility
    }


    static books = []

    static addBook(title,author,ISBN,category,availaility){
        
        var newBook = new Book(title,author,ISBN,category,availaility)
        Book.books.push(newBook)
    }

}

console.log(Book.books);
Book.addBook("dead mans chest", "john doe" , 1234323467654, "adventure",true)
Book.addBook("Stranger ties", "john doe" , 46765434564345, "adventure",true)
console.log(Book.books);


// var myBook = new Book("abc","Def",123456789,"sci-fi",false)

// console.log(myBook.title)
