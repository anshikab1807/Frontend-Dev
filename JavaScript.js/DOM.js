// DOM : dOCUMENT OBJECT MODEL

// MANIPULATES HTML AND XML DOCUMENTS

// The DOM represents the document as nodes and objects.
// That way, programming languages can connect to the page.
//HEIRARCHY OF DOM
// Document
//    |__Element
//         |__Attribute
//         |__Text
//DOM METHODS TO SELECT ELEMENT

// dom - > document object model
// manipulate html using javascript
// select element
// add event listener
// change style / class / content


let ele = document.querySelector(".box");
ele.style.backgroundColor = "red";


let paraEle = document.querySelector(".para-box .para-one");
paraEle.textContent = "this is my new para";

 const btn = document.querySelector("#btn");

                let fun = function(){
                    alert("Button clicked");
                }

                btn.addEventListener('click', fun);
    const containerEle = document.querySelector(".container");
    let pEl = document.createElement("p");
    pEl.textContent = "hello"
    // pEl.style.color = "blue"
 containerEle.classList.add("bg-green");
    containerEle.appendChild(pEl);

     containerEle.classList.add("bg-green");