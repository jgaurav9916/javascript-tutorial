// const days =["mon","tues","wed","thurs","friday","sat"]

// // days.forEach(function(day,index){
// //     console.log(`starts with ${index + 1}==================${day}`)
// // })

// for (let i = days.length - 1 ; i >= 0 ; i--){
//     console.log(days[i])
// }


const todos =[]

todos.unshift("buy vegetables")
todos.unshift("code on leetcode")
todos.unshift("go to gym")


for (let i =0;i< todos.length;i++){
    console.log(`your task number${i + 1} is:${todos[i]}`)
}
