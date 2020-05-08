// const sayHello = function(name){
//     return "hey there ," + name  + " !" 
// }

// console.log(sayHello("gaurav"))

// const sayHello = (name) =>  "hey there," +  name + " !"


// console.log(sayHello("gaurav"))




const todos =[
{   title:"Buy Bread",
    isDone : false,

},

{
    title: "Go to Gym",
    isDone:false,
},

{   title:"Record yoututbe videos",
    isDone:true,

},
{
    title:"go for the movies",
    isDone:false,
},
{
    title:"play cricket",
    isDone:true,
},
{
    title:"code on leetcode",
    isDone:false,
},

    ]



const thingsNotDone = todos.filter((todo) => {
    if (todo.isDone === false){
        console.log(todo.title)
    } 
}
    )

//console.log(thingsDone)










