let whoIsHere = ""

if (whoIsHere === "user"){
    console.log("greeting message for the user")
    console.log("allow the user to view the courses")
} else if(whoIsHere === "teacher"){
    console.log("greeting message for the TEACHER")
    console.log("allow him to view his courses")
}else{
    console.log("MESSAGE:please verify your account")
    console.log("send user an email to verify his account")
}