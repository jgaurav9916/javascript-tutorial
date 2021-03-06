let myTodo = {
    day : "Monday",
    meetings : 0,
    meetDone : 0,
}

let addMeeting = function(todo,meet = 0){
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo,meet = 0){
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let summaryDay = function(todo){
    let meetLeft = todo.meetings + todo.meetDone
    return `you have ${meetLeft} meetings left today!`
}

addMeeting(myTodo,5)

addMeeting(myTodo,2)

meetDone(myTodo,4)

console.log(summaryDay(myTodo))
//console.log(resetDay(myTodo))