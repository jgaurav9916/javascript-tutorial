//alert("file is attached")

// const myPElements = document.querySelector('p')
// myPElements.textContent = "I am being changed using js"


//track input form

document.querySelector("button").addEventListener("click",(event) =>{
    event.target.textContent = "I was clicked ";
})


document.querySelector("#myform").addEventListener("input",(event) =>{
    console.log(event.target.value);
})
