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




fetchData(handleRequest,"https://jsonplaceholder.typicode.com/users/1")




function handleRequest(data , error) {
    if(data){
        console.log("=========================================");
        console.log(data);
        console.log("=========================================");
    }
    else if (error){
        console.log("*****************************************");
        console.error(error);
        console.log("*****************************************");
    }
    
}

// callback("hello world",undefined)
// callback(undefined,"something went wrong")