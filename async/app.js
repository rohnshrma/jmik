var url = "https://jsonplaceholder.typicode.com/todos/1"



function fetchData(callback,url){
    
    //1. create a request object
    const request = new XMLHttpRequest()
    
    // 4. add an event listener to trigger a cb , when the value of ready state changes
    request.addEventListener("readystatechange",(event)=>{
        // console.log(request.readyState , request.responseText,request.status);
    
        if(request.readyState == 4 && request.status == 200){
            callback(request.responseText,undefined)
        }else if(request.readyState == 4 && request.status != 200){
            callback(undefined,"could not fetch data")
        }
    
    })
    // 2. call the open function , providing the method and url
    request.open("GET",url)
    
    // 3. call the send function
    request.send()
    
    // console.log(request.responseText,request.readyState);

}





// fetchData((data , error)=>{
//         if(data){
//             console.log(data);
//             fetchData((data,error)=>{
//                 if(data){
//                     console.log(data);
//                     fetchData((data,error)=>{
//                         if(data){
//                             console.log(data);
//                         }else if(error){
//                             console.log(error);
//                         }
//                     },"https://jsonplaceholder.typicode.com/comments/1")
//                 }else if(error){
//                     console.log(error);
//                 }
//             },"https://jsonplaceholder.typicode.com/todos/1")
//         }
//         else if (error){
//             console.error(error);
//         }
        
//     },"https://jsonplaceholder.typicode.com/users/1")
    



// fetchData((data , error)=>{
//     if(data){
//         console.log("=========================================");
//         console.log(data);
//         console.log("=========================================");
//     }
//     else if (error){
//         console.log("*****************************************");
//         console.error(error);
//         console.log("*****************************************");
//     }
    
// },"https://jsonplaceholder.typicode.com/userss/1")




// function handleRequest

// callback("hello world",undefined)
// callback(undefined,"something went wrong")



// console.log(1);

// console.log(2);

// setTimeout(()=>{
//     console.log("hello world");
// },5000)

// console.log(3);
// console.log(4);




// =======================================
// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then(response=>{
//     response.json()
//     .then(data=>{
//         console.log(data);
//     })
// })
// .catch(err=>{
//     console.log(err);
// })






// var myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         var name = prompt("Enter your name : ")
//         if(name.length >= 3){
//             resolve("a correct name")
//         }else{
//             reject("not a valid name")
//         }
//     },10000)
// })


// myPromise
// .then(data=>{
//     console.log("then=>",data);
// })
// .catch(err=>{
//     console.log("Catch",err);
// })









// first promise
// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then(response=>{
//     console.log("response -> ",response);
//     // second promise
//    response.json() 
//    .then(data=>{
//     console.log("data -> ",data);
//    })
// })
// .catch(err=>{
//     console.log(err);
// })





// function hello(name) {
//     // var myPromise = new Promise();
//     // return myPromise;
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(name.length >= 3){
//                 resolve(`${name} is a correct name!`)
//             }else{
//                 reject(`${name} is Not a Valid Name.`)
//             }
//         },5000)
//     });
// }




// hello("rn")
// .then(data=>{
// console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })





// function helloworld(){
//     console.log("hello world this is me from earth");
// }


// setTimeout(helloworld,4000)



// function fetchData(url){
//     return new Promise((resolve,reject)=>{

//         var request = new XMLHttpRequest()

//         request.addEventListener("readystatechange",()=>{
//             if(request.readyState == 4 && request.status == 200){
//                 resolve(JSON.parse(request.responseText))
//             } 
//             else if(request.readyState == 4 && request.status !== 200){
//                 reject("Something went wrong!\nRequest Failed")
//             }
//         })
//         request.open("GET",url)
//         request.send()

//     })
// }


// fetchData("https://jsonplaceholder.typicode.com/users")
// .then(data=>{
//     var c = data.filter(user => user.name[0] == "C")
//     console.log(c);
// })
// .catch(err=>{
//     console.log(err);
// })

