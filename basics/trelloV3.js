//assignment
//handle meeting done
//create a fxn that can reset the entire day

let myTodo = {
    day : "Monday",
    meetings : 0,
    meetingsDone : 0,

    addMeeting : function(num){
        this.meetings = this.meetings + num
    },

    meetDone : function(n){
        this.meetingsDone = this.meetingsDone - n
    },

    resetDay : function(){
        this.meetings = 0
        this.meetingsDone = 0
    },

    summary : function(){
        let leftMeeting = this.meetings + this.meetingsDone
        return `you hav ${leftMeeting} left today!`
    },

}

myTodo.addMeeting(5)
myTodo.addMeeting(4)

myTodo.meetDone(3)

console.log(myTodo.summary())