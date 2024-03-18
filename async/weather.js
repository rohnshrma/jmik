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


