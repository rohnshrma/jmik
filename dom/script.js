// console.log(document);
// console.log(document.getElementById("head"));

// console.log(document.getElementsByClassName("paras"));

// console.log(document.getElementsByTagName("p"));

// console.log(document.querySelector("p"));
// console.log(document.querySelector(".paras"));
// console.log(document.querySelector("#head"));


// console.log(document.querySelectorAll("p"));
// console.log(document.querySelectorAll(".paras"));



var head_one = document.getElementById("head")

// get the text
// console.log(head_one.innerText); 
// console.log(head_one.textContent); 
// console.log(head_one.innerHTML);


// set
// head_one.innerText = "bye bye world"
// head_one.innerText = "bye <i>bye</i>  world"

// head_one.textContent = "new <i>new heading</i> heading"
// head_one.textContent = "new heading"


// head_one.innerHTML = "hey! <i>My name is john doe</i>"


// head_one.style = "color:Red;text-decoration:underline;border:2px solid black;"

// console.log(head_one.style);


// console.log(head_one.attributes);

// console.log(head_one.getAttribute("id"));
// console.log(head_one.getAttribute("class"));


// head_one.setAttribute("id","xyz")




// function pop(){
//     alert("hello world this is jmik")
// }



// head_one.addEventListener("click",handler)




// function handler(){
//     console.log("event triggered")
// }


// click
// head_one.addEventListener("click",(event)=>{
//     console.log("event triggered",event.target)
// })


// head_one.addEventListener("dblclick",(event)=>{
//    console.log("double click happened!",event.target); 
// })

// head_one.addEventListener("mousedown",(event)=>{
// console.log("mouse key pressed");
// })
// head_one.addEventListener("mouseup",(event)=>{
// console.log("mouse key released");
// })

// head_one.addEventListener("mouseover",()=>{
//     console.log("hovering");
// })
// head_one.addEventListener("mouseout",()=>{
//     console.log("removed");
// })
// head_one.addEventListener("mousemove",(e)=>{
//     console.log("X",e.clientX,"y",e.clientY);
// })
// head_one.addEventListener("mouseenter",(e)=>{
//     console.log("entering");
// })


// select a parent
const boxes = document.getElementById("boxes")
console.log(boxes);

// creating a new element
var newBox = document.createElement("div")
newBox.textContent = "new box"
newBox.style = "height:100px;width:100px;border:1px solid black;"

boxes.appendChild(newBox)


// select the element to be removed
var b2 = document.getElementsByClassName("b2")[0]

boxes.removeChild(b2)