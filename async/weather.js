// XMLHttpRequest


// function xmlFetch(city, cb) {
//     var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`

//     var request = new XMLHttpRequest()

//     request.addEventListener("readystatechange", () => {

//         if (request.readyState == 4 && request.status == 200) {
//             // console.log(JSON.parse(request.responseText));
//             cb(JSON.parse(request.responseText), undefined)
//         }
//         else if (request.readyState == 4 && request.status != 200) {
//             // console.log("Something went wrong");
//             cb(undefined, `Error! Something went wrong while fetching Weather data of ${city}`)
//         }
//     })

//     request.open("GET", url)

//     request.send()

// }

// xmlFetch("dublin", (data, error) => {
//     if (data) {
//         console.log(data);
//     }
//     else if (error) {
//         console.log(error);
//     }
// })
// xmlFetch("gu", (data, error) => {
//     if (data) {
//         console.log(data);
//     }
//     else if (error) {
//         console.log(error);
//     }
// })



// fetch
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`)
//     .then(response => {
//         response.json()
//             .then(data => {
//                 console.log(data);
//             })

//     })
//     .catch(err => {
//         console.log(err);
//     })




// reject => 
// resolve =>


// var myName = prompt("Enter your name : ")

// // store promise in a variable
// var myPromise = new Promise(function(resolve,reject){

//     setTimeout(()=>{
//         if(myName.length >= 3){
//             resolve(`${myName} is welcomed.`)
//         }else{
//             reject(`${myName} is not an actual name!`)
//         }
//     },5000)

// })


// myPromise
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })



// 

function yourPromise() {
    var myName = prompt("Enter your name : ")
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            if (myName.length >= 3) {
                resolve(`${myName} is welcomed.`)
            } else {
                reject(`${myName} is not an actual name!`)
            }
        }, 5000)

    })
}

// yourPromise()
// .then(data=>{
//     console.log(data);
//     yourPromise()
//     .then(data=>{
//         console.log(data);
//         yourPromise()
//         .then(data=>{
//             console.log(data);
//             yourPromise()
//             .then(data=>{
//                 console.log(data);
//             })

//         })

//     })

// })
// .catch(err=>{
//     console.log(err);
// })





// create a function called getWeatherInfo which takes the city name as parameter
// and returns a "Promise" shows the weather data of that city if resolved else shows "data not found". 


// yourPromise()
// .then(data=>{
//     console.log(data);

// })
// .catch(err=>{
//     console.log(err);
// })







var fetchData = async (city) => {
    try {
        var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`)
        console.log("response => ", response);
        var data = await response.json()
        console.log("final data =>",data);
    } catch (err) {
        console.log("Errors => ", err);
    }

}

fetchData("dublin")









// async function readData() {

//     try {
//         // run an async code
//         var response = await yourPromise()
//         console.log("success => ", response)
//     }
//     catch (err) {
//         console.log("err => ", err);
//     }

// }


// readData()


