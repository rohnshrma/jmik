// var a = 10
// var b = a // copy of value of a
// console.log(a,b);
// a = 30
// console.log(a,b);


var fruits = ["apple", "banana", "cherry", "kiwi"]
// var copy = fruits

// console.log(fruits , copy);

// fruits[1] = "orange"

// console.log(fruits , copy);



// console.log(typeof fruits);


// console.log(fruits.length);



// console.log(fruits[1]);



// marks.push(1000,10000)

// marks.unshift(10001,9999)

// marks.pop()

// console.log(marks.includes(12)) // search item
// console.log(marks.includes(12,3)) // search item , search index (inclusive)


// console.log(marks.at(0))
// console.log(marks.at(-4))


// var nums = [234,45,5,6454]

// var newArr = marks.concat(nums,[56,676,789,9876])

// console.log(newArr);

// console.log(nums + marks);


// console.log(marks);
// marks.splice(1,0,"rohan") // index , delete count , items...
// marks.splice(1,1,"rohan","jmik") // index , delete count , items...
// marks.splice(1,4,"rohan","jmik") // index , delete count , items...


// console.log(marks.slice(2,5)) // start , end(excluding)




// console.log(marks.indexOf(12));
// console.log(marks.indexOf(12,3));
// console.log(marks.indexOf(127,3));



// console.log(marks.every(m=>m%2==0))
// console.log(marks.every(m=>m>5))


// marks.reverse()


// var x = marks.join(",")
// var x = marks.join(" ")
// var x = marks.join("-")

// var x = 10;
// console.log(Array.isArray(x));
// console.log(Array.isArray(marks));


// console.log(marks.sort());


// marks.fill(0)
// console.log(marks);


// console.log(x);



// marks.forEach(function(mark,index){
// console.log(mark,index);
// })


//sum,average,min,max

// var sum = 0
// marks.forEach(function(mark){
// sum+=mark
// })
// var average = sum / marks.length
// console.log(average);

var marks = [12, 43, 23, 34, 56, 23, 12, 4534, 6, 34, 2334]

// var max = marks[0]
// marks.forEach(function (mark) {
//     if (mark > max) {
//         max = mark
//     }
// })

// console.log(max);
// var min = marks[0]
// marks.forEach(function (mark) {
//     if (mark < min) {
//         min = mark
//     }
// })

// console.log(min);


var evens = []
var odds = []

marks.forEach(function (mark) {
    if (mark % 2 == 0) {
        evens.push(mark)
    } else {
        odds.push(mark)
    }
})


console.log(evens);
console.log(odds);


// even,odds,sum,average