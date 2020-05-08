//alert("comment")

function myValidation(){
    let myValue = document.getElementById("myform").value;

    if(isNaN(myValue) || myValue < 1 || myValue > 20){
        console.log("Not a valid input")
    }else{
        console.log("this is ok")
    }

}
//password validation

function myPasswordValidation(){
    let myPassword = document.getElementById("password").value;
    let myPass = document.getElementById("password1").value;

    if (myPass === myPassword){
        console.log("successssss!!!!!!!")

    }else{
        console.log("your password is incorrect")
    }


}








//form validation

document.querySelector(".myform").addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log(event.target.username.value);
    event.target.username.value=""
})